
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-background to-secondary/30 border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <button 
                onClick={() => scrollToSection('#home')}
                className="flex items-center mb-4"
              >
                <img 
                  src="/logo.png" 
                  alt="TAZOBV Logo" 
                  className="h-12 w-auto"
                />
              </button>
              <p className="text-gray-400 text-sm mb-2">Your digital transformation catalyst</p>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Transforming enterprises through advanced SAP solutions and innovative custom software development. We specialize in comprehensive digital transformation across diverse industries with deep expertise in cutting-edge SAP technologies.
              </p>
            </div>

            <div className="mb-6">
              <p className="text-gray-300 mb-4">
                Ready to begin your digital transformation journey?
              </p>
              <button
                onClick={() => scrollToSection('#contact')}
                className="magnetic-button bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                { name: 'SAP Implementation', href: '#services' },
                { name: 'SAP S/4 HANA Solutions', href: '#services' },
                { name: 'SAP Migration & Support', href: '#services' },
                { name: 'SAP Integration Services', href: '#services' },
                { name: 'Custom Software Development', href: '#services' },
                { name: 'Mobile & Web Development', href: '#services' },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 text-left text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white font-semibold mb-6">Industries</h4>
            <ul className="space-y-3">
              {[
                { name: 'Manufacturing', href: '#industries' },
                { name: 'Pharmaceutical', href: '#industries' },
                { name: 'Automotive', href: '#industries' },
                { name: 'Food & Beverage', href: '#industries' },
                { name: 'Fashion & Retail', href: '#industries' },
                { name: 'FMCG', href: '#industries' },
                { name: '3PL (Third-Party Logistics)', href: '#industries' },
                { name: 'E-Commerce', href: '#industries' },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-accent transition-colors duration-300 text-left text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { name: 'Services', href: '#services' },
                { name: 'Industries', href: '#industries' },
                { name: 'Vision', href: '#vision' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 text-left text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} TAZOBV. All rights reserved.
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>

          {/* Additional info */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm mb-2">
              Your digital transformation catalyst
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
