
import React, { useEffect, useRef } from 'react';
import { 
  Code, 
  Database, 
  Cloud, 
  Cog, 
  Smartphone, 
  BarChart3,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

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

    const elements = servicesRef.current?.querySelectorAll('.scroll-section');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Database,
      title: "SAP Solutions",
      description: "Complete SAP implementation, customization, and support services for enterprise-grade business operations.",
      features: ["SAP S/4HANA", "SAP Fiori", "SAP Integration", "Custom Modules"],
      color: "primary"
    },
    {
      icon: Code,
      title: "Manhattan WMS",
      description: "Advanced warehouse management system implementation and optimization for supply chain excellence.",
      features: ["WMS Implementation", "Inventory Optimization", "Process Automation", "Real-time Analytics"],
      color: "accent"
    },
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamless cloud transformation strategies with enterprise-grade security and scalability.",
      features: ["AWS/Azure Migration", "Hybrid Solutions", "DevOps Implementation", "Security & Compliance"],
      color: "primary"
    },
    {
      icon: Smartphone,
      title: "Custom Development",
      description: "Tailored software solutions built with modern technologies to meet your specific business needs.",
      features: ["Web Applications", "Mobile Apps", "API Development", "System Integration"],
      color: "accent"
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Transform your data into actionable insights with advanced analytics and reporting solutions.",
      features: ["Data Warehousing", "Power BI", "Custom Dashboards", "Predictive Analytics"],
      color: "primary"
    },
    {
      icon: Cog,
      title: "IT Consulting",
      description: "Strategic technology consulting to optimize your IT infrastructure and business processes.",
      features: ["Technology Strategy", "Process Optimization", "Digital Transformation", "Change Management"],
      color: "accent"
    }
  ];

  return (
    <section id="services" ref={servicesRef} className="py-20 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-mesh opacity-30"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="scroll-section">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive enterprise solutions designed to accelerate your digital transformation 
              and drive sustainable business growth.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`scroll-section card-3d group`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 h-full hover:border-primary/30 transition-all duration-300">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-lg bg-${service.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-8 h-8 text-${service.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="group/btn flex items-center gap-2 text-primary hover:text-accent transition-colors duration-300 text-sm font-medium">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="scroll-section">
            <p className="text-gray-300 mb-6">
              Ready to transform your business with enterprise solutions?
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="magnetic-button bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg transition-all duration-300"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
