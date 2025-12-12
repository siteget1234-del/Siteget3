import React from 'react';
import { Target, Heart, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-10 w-10 text-blue-600" />,
      title: 'Our Mission',
      description: 'To empower rural and local businesses with affordable, professional digital solutions that help them break free from traditional systems and reach their full potential.'
    },
    {
      icon: <Target className="h-10 w-10 text-blue-600" />,
      title: 'Our Vision',
      description: 'A world where every small business, regardless of location, has access to modern technology and can compete in the digital marketplace with confidence.'
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: 'Who We Serve',
      description: 'We specialize in helping farming-related groups and rural businesses enter the e-commerce world, enabling them to sell directly and build true independence.'
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-blue-600" />,
      title: 'Our Approach',
      description: 'Simple explanations, practical support, and pricing far below typical agency rates make digital transformation effortless and achievable for every small business.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">SiteGet</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              We're on a mission to make digital transformation accessible and affordable for every rural business.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p className="text-lg leading-relaxed">
                SiteGet was founded with a simple yet powerful belief: every business, regardless of size or location, deserves access to professional digital solutions. We saw countless rural businesses struggling within traditional systems where they were treated merely as sources of profit, with limited opportunities to grow beyond local boundaries.
              </p>
              <p className="text-lg leading-relaxed">
                We decided to change that. By offering high-quality, affordable websites and web applications with complete end-to-end setup, we remove all technical barriers. From hosting and free subdomains to SSL security, SEO, and full deployment, we handle everything until your platform is live and performing smoothly.
              </p>
              <p className="text-lg leading-relaxed">
                Our primary focus has been supporting farming-related groups and rural businesses, helping them enter the e-commerce world with confidence. We guide them to sell directly, reach wider markets, and build true independence. Beyond development, we help businesses adopt modern technology, choose the right delivery partners, manage costs effectively, and expand their reach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our values guide everything we do and every business we help
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-2 hover:border-blue-600 transition-all hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Let's Build Your Digital Future Together
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Join us in transforming rural businesses and creating opportunities for growth beyond boundaries.
            </p>
            <Button
              size="lg"
              onClick={() => window.open('https://wa.me/917385311748?text=Hi%2C%20I%27m%20interested%20in%20your%20web%20development%20services%20for%20my%20business', '_blank')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg"
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;