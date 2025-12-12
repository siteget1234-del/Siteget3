import React from 'react';
import { Globe, ShoppingCart, Palette, Server, Search, HeadphonesIcon, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-blue-600" />,
      title: 'Professional Website Development',
      description: 'Custom-designed websites that represent your business professionally and attract customers.',
      features: [
        'Modern, responsive design',
        'Mobile-friendly across all devices',
        'Fast loading speeds',
        'Easy content management'
      ]
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-blue-600" />,
      title: 'E-Commerce Solutions',
      description: 'Complete online stores that let you sell directly to customers and expand your market reach.',
      features: [
        'Product catalog management',
        'Secure payment integration',
        'Order management system',
        'Customer account features'
      ]
    },
    {
      icon: <Server className="h-12 w-12 text-blue-600" />,
      title: 'Complete Hosting & Setup',
      description: 'End-to-end technical setup so you never worry about the technical side of your website.',
      features: [
        'Reliable web hosting',
        'Free subdomain included',
        'SSL security certificate',
        'Regular backups'
      ]
    },
    {
      icon: <Search className="h-12 w-12 text-blue-600" />,
      title: 'SEO Optimization',
      description: 'Get found on Google with our built-in SEO best practices and optimization.',
      features: [
        'Google search optimization',
        'Local SEO for your area',
        'Meta tags and descriptions',
        'Site speed optimization'
      ]
    },
    {
      icon: <Palette className="h-12 w-12 text-blue-600" />,
      title: 'Custom Web Applications',
      description: 'Tailored digital solutions for your specific business needs and workflows.',
      features: [
        'Custom functionality',
        'Business process automation',
        'Data management systems',
        'Integration with existing tools'
      ]
    },
    {
      icon: <HeadphonesIcon className="h-12 w-12 text-blue-600" />,
      title: 'Ongoing Support & Guidance',
      description: 'Continuous support with simple explanations and practical help whenever you need it.',
      features: [
        'Technical support',
        'Content updates assistance',
        'Platform training',
        'Digital strategy guidance'
      ]
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We discuss your business needs, goals, and vision for your online presence.'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'We create a detailed plan including design, features, and timeline.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Our team builds your website with attention to every detail.'
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'We deploy your site and provide ongoing support for your success.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6" data-testid="services-heading">
              Our <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Comprehensive digital solutions designed specifically for rural and local businesses
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-blue-600 transition-all duration-300 card-hover shadow-premium animate-fade-in-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`service-card-${index}`}
              >
                <CardHeader>
                  <div className="mb-4 transform transition-transform duration-300 hover:scale-110">{service.icon}</div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-testid="process-heading">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A simple, straightforward approach to building your digital presence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
                data-testid={`process-step-${index}`}
              >
                <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-premium-lg transform transition-transform duration-300 hover:scale-110">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white shadow-premium-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" data-testid="services-cta-heading">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Let's discuss how we can help your business thrive online with our affordable, professional services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => window.open('https://wa.me/917385311748?text=Hi%2C%20I%27m%20interested%20in%20your%20web%20development%20services%20for%20my%20business', '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg shadow-premium-lg hover:shadow-premium-xl transition-all duration-300 btn-premium"
                data-testid="services-whatsapp-button"
              >
                Contact on WhatsApp
              </Button>
              <Button
                size="lg"
                onClick={() => window.location.href = 'tel:+917385311748'}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg shadow-premium-lg hover:shadow-premium-xl transition-all duration-300 btn-premium"
                data-testid="services-call-button"
              >
                Call Us Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;