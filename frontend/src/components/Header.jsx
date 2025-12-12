import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/90 shadow-premium">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 transform transition-transform duration-300 hover:scale-105"
            data-testid="header-logo-link"
          >
            <img 
              src="/logo.png" 
              alt="SiteGet Logo" 
              className="h-10 w-10"
              style={{ imageRendering: 'crisp-edges' }}
            />
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
              SiteGet
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 relative ${
                  isActive(link.path) ? 'text-blue-600' : 'text-gray-700'
                } ${isActive(link.path) ? 'after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:rounded-full' : ''}`}
                data-testid={`header-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button
              onClick={() => window.open('https://wa.me/917385311748?text=Hi%2C%20I%27m%20interested%20in%20your%20web%20development%20services%20for%20my%20business', '_blank')}
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-premium hover:shadow-premium-lg transition-all duration-300 btn-premium"
              data-testid="header-cta-button"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            data-testid="header-mobile-menu-button"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                    isActive(link.path) ? 'text-blue-600' : 'text-gray-700'
                  }`}
                  data-testid={`header-mobile-nav-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                onClick={() => {
                  window.open('https://wa.me/917385311748?text=Hi%2C%20I%27m%20interested%20in%20your%20web%20development%20services%20for%20my%20business', '_blank');
                  setIsMenuOpen(false);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white w-full shadow-premium btn-premium"
                data-testid="header-mobile-cta-button"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;