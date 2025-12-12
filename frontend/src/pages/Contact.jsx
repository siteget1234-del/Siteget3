import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Mail } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone className="h-10 w-10 text-blue-600" />,
      title: 'Call Us',
      description: 'Speak directly with our team',
      action: 'Call Now',
      link: 'tel:+917385311748',
      details: ['+91 7385311748', '+91 9067551748']
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-green-600" />,
      title: 'WhatsApp',
      description: 'Quick response via WhatsApp',
      action: 'Chat on WhatsApp',
      link: 'https://wa.me/917385311748?text=Hi%2C%20I%27m%20interested%20in%20your%20web%20development%20services%20for%20my%20business',
      details: ['Available on both numbers']
    }
  ];

  const faqs = [
    {
      question: 'What is included in your web development service?',
      answer: 'We provide complete end-to-end setup including website development, hosting, free subdomain, SSL security, SEO optimization, and full deployment. You get everything you need to go online.'
    },
    {
      question: 'How long does it take to build a website?',
      answer: 'Typically, a basic website takes 1-2 weeks, while e-commerce solutions take 2-4 weeks. The timeline depends on your specific requirements and content availability.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! We provide continuous technical support, content update assistance, and guidance to help your business succeed online. We\'re always here to help.'
    },
    {
      question: 'What makes your pricing affordable?',
      answer: 'Our rates are far below typical agency costs because we focus on helping rural and local businesses. We believe every business deserves access to professional digital solutions.'
    },
    {
      question: 'Do I need technical knowledge?',
      answer: 'Not at all! We handle all technical aspects and provide simple explanations. You focus on your business while we take care of the technology.'
    },
    {
      question: 'Can you help with e-commerce setup?',
      answer: 'Absolutely! We specialize in helping businesses, especially farming and rural businesses, set up online stores to sell directly to customers and expand their market reach.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Get in <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Ready to take your business online? Contact us today and let's start building your digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-2 hover:border-blue-600 transition-all hover:shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">{method.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <div className="space-y-2 mb-6">
                    {method.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-700 font-medium">{detail}</p>
                    ))}
                  </div>
                  <Button
                    size="lg"
                    onClick={() => {
                      if (method.link.startsWith('http')) {
                        window.open(method.link, '_blank');
                      } else {
                        window.location.href = method.link;
                      }
                    }}
                    className={`w-full ${
                      method.title === 'WhatsApp'
                        ? 'bg-green-600 hover:bg-green-700 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <Clock className="h-10 w-10 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Availability</h2>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-600 text-lg">
                    We're available to help you Monday through Saturday. Contact us anytime, and we'll respond as quickly as possible.
                  </p>
                  <p className="text-gray-700 font-medium">
                    WhatsApp responses: Within a few hours
                  </p>
                  <p className="text-gray-700 font-medium">
                    Phone calls: During business hours
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Quick answers to common questions about our services
              </p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Let's Build Something Great Together
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Your journey to digital success starts with a simple conversation. Reach out today!
            </p>
            <Button
              size="lg"
              onClick={() => window.open('https://wa.me/917385311748?text=Hi%2C%20I%27m%20interested%20in%20your%20web%20development%20services%20for%20my%20business', '_blank')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg"
            >
              Start Conversation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;