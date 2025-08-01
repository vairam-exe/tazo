
import React, { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const ClientShowcase = () => {
  const showcaseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = showcaseRef.current?.querySelectorAll('.scroll-section');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const clients = [
    { name: 'TechCorp', logo: '🏢' },
    { name: 'GlobalSoft', logo: '🌐' },
    { name: 'InnovateLab', logo: '🚀' },
    { name: 'DataDrive', logo: '📊' },
    { name: 'CloudFirst', logo: '☁️' },
    { name: 'SecureNet', logo: '🔒' },
    { name: 'ScaleUp', logo: '📈' },
    { name: 'NextGen', logo: '⚡' },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      company: "Fortune 500 Manufacturing",
      content: "TAZOBV transformed our SAP infrastructure, reducing operational costs by 40% while improving system performance. Their expertise in enterprise solutions is unmatched.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Michael Chen",
      role: "VP of Operations",
      company: "Global Logistics Leader",
      content: "The Manhattan WMS implementation exceeded our expectations. Real-time inventory tracking and automated workflows have revolutionized our warehouse operations.",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "Elena Rodriguez",
      role: "Digital Transformation Director",
      company: "International Retail Chain",
      content: "Outstanding cloud migration strategy and execution. TAZOBV guided us through a seamless transition to AWS, ensuring zero downtime and enhanced scalability.",
      rating: 5,
      avatar: "👩‍💻"
    }
  ];

  return (
    <section id="clients" ref={showcaseRef} className="py-20 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-20"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="scroll-section">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by <span className="text-primary">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We've partnered with forward-thinking companies across various industries to deliver 
              transformational enterprise solutions.
            </p>
          </div>
        </div>

        {/* Client logos */}
        <div className="scroll-section mb-20">
          <div className="relative overflow-hidden">
            <div className="flex animate-pulse">
              <div className="flex animate-marquee">
                {[...clients, ...clients].map((client, index) => (
                  <div
                    key={`${client.name}-${index}`}
                    className="flex-shrink-0 mx-8 flex items-center justify-center"
                  >
                    <div className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group">
                      <div className="flex items-center gap-4">
                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                          {client.logo}
                        </span>
                        <span className="text-white font-medium whitespace-nowrap">
                          {client.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="scroll-section">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              What Our Clients Say
            </h3>
            <p className="text-gray-300">
              Real feedback from businesses that have transformed with TAZOBV
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="card-3d group bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Quote icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-primary/60" />
                </div>

                {/* Content */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-400">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-primary">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="scroll-section mt-20">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <div className="text-gray-300 text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-gray-300 text-sm">Enterprise Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">99%</div>
                <div className="text-gray-300 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="scroll-section">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how TAZOBV can help transform your business with enterprise-grade solutions.
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="magnetic-button bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg transition-all duration-300"
            >
              Start Your Transformation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
