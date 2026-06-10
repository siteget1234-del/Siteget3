import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { mockArticles } from "./src/data";

const app = express();
const PORT = 3000;

async function startServer() {
  let vite: any = null;
  
  if (process.env.NODE_ENV !== "production") {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve static files from dist first, EXCEPT index.html
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath, { index: false }));
  }

  // Intercept HTML requests to inject Open Graph tags
  app.get("*", async (req, res, next) => {
    // Skip explicit API routes and static assets
    if (req.path.startsWith('/api') || req.path.match(/\.(js|cjs|css|png|jpg|jpeg|gif|svg|ico|json|woff|woff2|ttf)$/i)) {
      return next();
    }
    
    // Quick heuristic: Only inject HTML for requests that accept 'text/html' or '*/*' (which social media crawlers often send)
    const accept = req.headers.accept || '';
    const userAgent = (req.headers['user-agent'] || '').toLowerCase();
    const isBot = userAgent.includes('bot') || userAgent.includes('whatsapp') || userAgent.includes('telegram') || userAgent.includes('facebook') || userAgent.includes('twitter');

    if (!accept.includes('text/html') && !accept.includes('*/*') && !isBot) {
        return next();
    }

    try {
      let template = '';
      if (process.env.NODE_ENV !== "production") {
        template = fs.readFileSync(path.resolve(process.cwd(), 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(req.originalUrl, template);
      } else {
        const indexPath = path.resolve(process.cwd(), 'dist/index.html');
        if (fs.existsSync(indexPath)) {
           template = fs.readFileSync(indexPath, 'utf-8');
        } else {
           return res.status(404).send('Not Found');
        }
      }

      const articleId = req.query.article as string;
      let title = "देशाचे लोक";
      let description = "सत्यशोधक व पारदर्शक पत्रकारिता";
      let image = "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"; // Default nice newspaper image
      const host = req.headers.host || "siteget.in";
      const protocol = req.headers['x-forwarded-proto'] || 'https';
      const url = `${protocol}://${host}${req.originalUrl}`;

      // Fetch dynamic OG tags from Firestore REST API if an article is in the URL
      if (articleId) {
         let foundInMock = mockArticles.find(a => a.id === articleId);
         if (foundInMock) {
             title = foundInMock.title + " | देशाचे लोक";
             description = foundInMock.excerpt;
             if (foundInMock.imageUrl) image = foundInMock.imageUrl;
         } else {
             try {
                // Check if user set Firebase explicitly in local env, else try to use process.env
                const projectId = process.env.VITE_FIREBASE_PROJECT_ID; 
                if (projectId) {
                   const docUrl = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/articles/${articleId}`;
                   const response = await fetch(docUrl);
                   
                   if (response.ok) {
                       const data = await response.json();
                       if (data.fields) {
                           if (data.fields.title && data.fields.title.stringValue) {
                               title = data.fields.title.stringValue + " | देशाचे लोक";
                           }
                           if (data.fields.excerpt && data.fields.excerpt.stringValue) {
                               description = data.fields.excerpt.stringValue;
                           } else if (data.fields.summary && data.fields.summary.stringValue) {
                               description = data.fields.summary.stringValue;
                           }
                           
                           // Try imageUrl if available, otherwise just use default
                           if (data.fields.imageUrl && data.fields.imageUrl.stringValue) {
                               image = data.fields.imageUrl.stringValue;
                           }
                       }
                   }
                }
             } catch(e) { 
                console.error("Error fetching article for OG", e); 
             }
         }
      }

      // Prepare metadata block
      const ogTags = `
        <meta property="og:title" content="${title.replace(/"/g, '&quot;')}" />
        <meta property="og:description" content="${description.replace(/"/g, '&quot;')}" />
        <meta property="og:image" content="${image.replace(/"/g, '&quot;')}" />
        <meta property="og:url" content="${url}" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="${title.replace(/"/g, '&quot;')}" />
        <meta name="twitter:description" content="${description.replace(/"/g, '&quot;')}" />
        <meta name="twitter:image" content="${image.replace(/"/g, '&quot;')}" />
        <title>${title.replace(/"/g, '&quot;')}</title>
      `;

      // Inject dynamically replacing </head>
      const html = template.replace('</head>', `${ogTags}\n</head>`);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);

    } catch (e) {
      if (vite) vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e instanceof Error ? e.message : String(e));
    }
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
