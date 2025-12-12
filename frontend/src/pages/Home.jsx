import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Globe, Shield, Smartphone, TrendingUp, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Home = () => {
  const features = [
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: 'Complete Website Setup',
      description: 'End-to-end setup including hosting, free subdomain, SSL security, and deployment'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Secure & Reliable',
      description: 'SSL certificates, secure hosting, and regular backups for peace of mind'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: 'SEO Optimized',
      description: 'Built-in SEO best practices to help your business rank on Google'
    },
    {
      icon: <Smartphone className="h-8 w-8 text-blue-600" />,
      title: 'Mobile Responsive',
      description: 'Perfect viewing experience across all devices and screen sizes'
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: 'Fast Performance',
      description: 'Optimized for speed to keep your visitors engaged'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
      title: 'Affordable Pricing',
      description: 'Professional quality at rates far below typical agency costs'
    }
  ];

  const benefits = [
    'Break free from traditional profit-driven systems',
    'Reach wider markets beyond local boundaries',
    'Sell directly to customers with e-commerce',
    'Build true business independence',
    'Modern technology with simple explanations',
    'Complete technical support included'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up"
              data-testid="hero-heading"
            >
              Empowering <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">Rural Businesses</span> to Go Digital
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
              High-quality, affordable websites and web applications with complete setup. 
              We handle everything from hosting to deployment so you can focus on your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-300">
              <Button
                size="lg"
                onClick={() => window.open('https://wa.me/917385311748?text=Hi%2C%20I%27m%20interested%20in%20your%20web%20development%20services%20for%20my%20business', '_blank')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg w-full sm:w-auto shadow-premium-lg hover:shadow-premium-xl transition-all duration-300 btn-premium"
                data-testid="hero-whatsapp-button"
              >
                Get Started on WhatsApp
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.location.href = 'tel:+917385311748'}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg w-full sm:w-auto shadow-premium hover:shadow-premium-lg transition-all duration-300"
                data-testid="hero-call-button"
              >
                Call Us Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-testid="features-heading">
              Everything You Need to Succeed Online
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide complete digital solutions tailored for rural and local businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-blue-600 transition-all duration-300 card-hover shadow-premium animate-fade-in-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`feature-card-${index}`}
              >
                <CardContent className="p-6">
                  <div className="mb-4 transform transition-transform duration-300 hover:scale-110">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white shadow-premium-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="benefits-heading">
                Why Choose SiteGet?
              </h2>
              <p className="text-lg text-blue-100">
                We're committed to helping rural businesses thrive in the digital world
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  data-testid={`benefit-item-${index}`}
                >
                  <CheckCircle className="h-6 w-6 text-blue-300 flex-shrink-0 mt-1" />
                  <p className="text-lg text-blue-50 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6" data-testid="cta-heading">
              Ready to Take Your Business Online?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Join hundreds of rural businesses already thriving online. Let's build your digital presence together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => window.open('https://wa.me/917385311748?text=Hi%2C%20I%27m%20interested%20in%20your%20web%20development%20services%20for%20my%20business', '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg shadow-premium-lg hover:shadow-premium-xl transition-all duration-300 btn-premium"
                data-testid="cta-whatsapp-button"
              >
                Chat on WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg shadow-premium hover:shadow-premium-lg transition-all duration-300"
              >
                <Link to="/services" data-testid="cta-services-link">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;