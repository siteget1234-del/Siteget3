import React, { useState } from "react";
import { ArrowLeft, Clock, Share2, ThumbsUp, Eye, Maximize2, Tag, ChevronRight } from "lucide-react";
import { NewsArticle, Contributor } from "../types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ArticlePageProps {
  article: NewsArticle;
  contributors: Contributor[];
  onLikeUpdate: (id: string, newLikes: number) => void;
}

export const ArticlePage: React.FC<ArticlePageProps> = ({ article, contributors, onLikeUpdate }) => {
  const [likes, setLikes] = useState(article.likes);
  const [isLiking, setIsLiking] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleLike = async () => {
    if (isLiking) return;
    setIsLiking(true);

    try {
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 300));
      const newLikesCount = likes + 1;
      setLikes(newLikesCount);
      onLikeUpdate(article.id, newLikesCount);
    } catch (err) {
      console.error("Error liking article:", err);
    } finally {
      setIsLiking(false);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <article className="animate-fade-in relative pb-10">

      <div className="space-y-4">
        
        {/* Category Header */}
        <div className="flex items-center gap-2 mb-1 pt-3">
          <span className="text-gray-900 text-base font-black tracking-wider select-none uppercase">
            {article.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-[28px] md:text-[36px] font-sans font-extrabold text-gray-900 leading-[1.3] md:leading-[1.25] tracking-tight">
          {article.title}
        </h1>

        {/* Excerpt */}
        <p className="text-[18px] md:text-[22px] text-gray-700 leading-relaxed font-serif italic mb-4">
          {article.excerpt}
        </p>

        {/* Hero Image */}
        <figure className="relative w-full overflow-hidden bg-slate-100 rounded-xl mt-4 mb-5 shadow-sm">
          <img
            src={article.imageUrl}
            alt={article.title}
            referrerPolicy="no-referrer"
            className="w-full h-auto object-cover max-h-[500px]"
          />
        </figure>

        {/* Meta Info: Author & Date Block */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 pb-4 pt-2 select-none gap-4">
          <div className="flex items-center gap-2 text-slate-700">
            <div className="flex flex-col space-y-1">
              <span className="text-[15px] font-bold text-slate-900 flex items-center gap-1.5">
                {article.source}
                {article.authorHandle && <span className="text-blue-500 hover:text-blue-600 font-mono text-[12px] opacity-80 mt-0.5 cursor-pointer" onClick={(e) => { e.stopPropagation(); window.open(`https://x.com/${article.authorHandle}`, '_blank'); }}>𝕏 {article.authorHandle}</span>}
              </span>
              <span className="text-[13px] text-slate-500 font-medium">
                Updated on: {article.date} | 10:25 am IST
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-bold font-mono pt-2 md:pt-0">
            <span className="flex items-center gap-1.5" title="वाचकांचे समाधान">
              <Eye className="h-5 w-5" />
              {article.views.toLocaleString('en-IN')}
            </span>
            <button 
              onClick={handleLike}
              disabled={isLiking}
              className="flex items-center gap-1.5 hover:text-red-700 transition-colors cursor-pointer active:scale-95"
              title="आवडले"
            >
              <ThumbsUp className={`h-5 w-5 ${isLiking ? 'text-red-700' : ''}`} />
              {likes.toLocaleString('en-IN')}
            </button>
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 hover:text-gray-900 transition-colors cursor-pointer"
              title="शेअर करा"
            >
              <Share2 className="h-5 w-5" />
              {isCopied ? "कॉपी केले" : "शेअर"}
            </button>
          </div>
        </div>

        {/* Content Section */}
        <section className="pt-2">
          {article.fullText ? (
            <div className="prose max-w-none font-sans 
                            prose-headings:font-sans prose-headings:font-black prose-headings:tracking-tight prose-headings:text-gray-900 
                            prose-h2:text-[28px] md:prose-h2:text-[32px] prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-none
                            prose-h3:text-[24px] prose-h3:mt-8 prose-h3:mb-3 
                            prose-p:text-[18px] md:prose-p:text-[20px] prose-p:text-gray-800 prose-p:leading-[1.8] prose-p:mb-5 
                            prose-strong:font-bold prose-strong:text-black prose-strong:bg-transparent 
                            prose-ul:my-5 prose-ul:bg-transparent prose-ul:p-0 prose-ul:pl-6 prose-ul:rounded-none prose-ul:border-none prose-ul:list-disc
                            prose-li:marker:text-black prose-li:text-[18px] md:prose-li:text-[20px] prose-li:text-gray-800 prose-li:my-1.5 prose-li:pl-1 
                            prose-blockquote:border-l-[5px] prose-blockquote:border-gray-300 prose-blockquote:bg-gray-50/50 prose-blockquote:py-3 prose-blockquote:px-5 prose-blockquote:my-6 prose-blockquote:rounded-none prose-blockquote:not-italic prose-blockquote:font-serif prose-blockquote:font-medium prose-blockquote:text-gray-900 prose-blockquote:text-[20px] 
                            prose-a:text-[#0056b3] hover:prose-a:text-[#003d82] prose-a:underline-offset-4 prose-a:decoration-[#0056b3]/30">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {article.fullText}
              </ReactMarkdown>
            </div>
          ) : (
            <div className="prose max-w-none font-sans text-gray-800 leading-[1.8] tracking-wide text-[18px] md:text-[20px]">
              संपूर्ण बातमी लवकरच उपलब्ध होईल...
            </div>
          )}
        </section>

        {/* Footer Tags & End mark */}
        <footer className="pt-8 border-t border-gray-200 mt-8 select-none">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4 text-gray-400" />
              <div className="flex gap-2">
                <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded uppercase tracking-wider">{article.category}</span>
                <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded uppercase tracking-wider">ताज्या घडामोडी</span>
              </div>
            </div>
            
            <div className="h-1 w-12 bg-red-700 rounded-full"></div>
          </div>
        </footer>

      </div>
    </article>
  );
};
