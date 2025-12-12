import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SEO from './components/SEO';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SEO
                  title="SiteGet - Empowering Rural Businesses to Go Digital | Affordable Web Development"
                  description="Professional, affordable websites and e-commerce solutions for rural businesses. Complete setup including hosting, SSL, SEO, and deployment. Helping farming groups thrive online."
                />
                <Home />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <SEO
                  title="About SiteGet - Our Mission to Empower Rural Businesses | SiteGet"
                  description="Learn about SiteGet's mission to help rural and farming businesses succeed online with affordable, professional web development and e-commerce solutions."
                />
                <About />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <SEO
                  title="Our Services - Web Development, E-Commerce & SEO | SiteGet"
                  description="Comprehensive web development services including custom websites, e-commerce solutions, hosting, SSL security, SEO optimization, and ongoing support for rural businesses."
                />
                <Services />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <SEO
                  title="Contact SiteGet - Get Your Business Online Today | SiteGet"
                  description="Contact SiteGet for professional web development services. Call +91 7385311748 or +91 9067551748. WhatsApp available. Let's build your digital presence together."
                />
                <Contact />
              </>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;