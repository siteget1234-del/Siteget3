import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white shadow-2xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo.png" 
                alt="SiteGet Logo" 
                className="h-8 w-8"
                style={{ imageRendering: 'crisp-edges' }}
              />
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                SiteGet
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md leading-relaxed">
              Empowering rural businesses to go online with affordable, professional websites and complete digital solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/917385311748?text=Hi%2C%20I%27m%20interested%20in%20your%20web%20development%20services%20for%20my%20business"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 p-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Contact us on WhatsApp"
                data-testid="footer-whatsapp-link"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block" data-testid="footer-home-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block" data-testid="footer-about-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block" data-testid="footer-services-link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block" data-testid="footer-contact-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col space-y-1">
                  <a href="tel:+917385311748" className="text-gray-300 hover:text-blue-400 transition-colors duration-200" data-testid="footer-phone-1">
                    +91 7385311748
                  </a>
                  <a href="tel:+919067551748" className="text-gray-300 hover:text-blue-400 transition-colors duration-200" data-testid="footer-phone-2">
                    +91 9067551748
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:siteget1234@gmail.com" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 break-all"
                  data-testid="footer-email-link"
                >
                  siteget1234@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">WhatsApp Available</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} SiteGet. All rights reserved. Empowering Rural Businesses Digitally.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;