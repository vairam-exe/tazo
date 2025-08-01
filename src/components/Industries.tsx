import React, { useEffect, useRef } from 'react';

const Industries = () => {
  const industriesRef = useRef<HTMLDivElement>(null);

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

    const elements = industriesRef.current?.querySelectorAll('.scroll-section');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const industries = [
    {
      image: "1.png",
      title: "Fashion & Retail",
      description: "The retail landscape evolves rapidly. We possess the expertise and agility to swiftly develop and deploy solutions that guarantee measurable commercial success.",
      color: "primary"
    },
    {
      image: "2.png",
      title: "FMCG",
      description: "The FMCG sector maintains strong resilience while facing complex supply chain challenges. We deliver proven solutions for sustainable growth.",
      color: "accent"
    },
    {
      image: "3.png",
      title: "3PL (Third-Party Logistics)",
      description: "3PL partnerships are essential in modern commerce. We specialize in B2B SAP Business ByDesign solutions for comprehensive 3PL operations.",
      color: "primary"
    },
    {
      image: "4.png",
      title: "E-Commerce",
      description: "E-commerce faces evolving challenges in an increasingly competitive landscape. Our specialized solutions ensure complete system integration and optimal performance.",
      color: "accent"
    },
    {
      image: "5.png",
      title: "Manufacturing",
      description: "Successful manufacturing depends on streamlined processes and operational excellence. Future-ready solutions are critical for sustained competitive advantage.",
      color: "primary"
    },
    {
      image: "6.png",
      title: "Pharmaceutical",
      description: "The pharmaceutical sector benefits from precise mapping and reliable tracking in SAP EWM, supported by our extensive industry experience.",
      color: "accent"
    },
    {
      image: "7.png",
      title: "Automotive",
      description: "SAP EWM optimizes Automated Guided Vehicles (AGVs) and Automated Storage and Retrieval Systems (AS/RS) for maximum efficiency.",
      color: "primary"
    },
    {
      image: "8.png",
      title: "Food & Beverage",
      description: "SAP EWM provides powerful warehouse management capabilities that help food and beverage companies maximize operational efficiency and compliance.",
      color: "accent"
    }
  ];

  return (
    <section id="industries" ref={industriesRef} className="py-20 bg-secondary/10 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-mesh opacity-20"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="scroll-section">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industries We <span className="text-primary">Master</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-accent mb-4">
              Expertise that delivers results.
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Our comprehensive industry knowledge and specialized technical expertise enable us to create precision-tailored solutions that solve the distinct challenges and strategic requirements of your industry sector.
            </p>
          </div>
        </div>

        {/* Industries grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className={`scroll-section card-3d group cursor-pointer focus:outline-none`}
              style={{ animationDelay: `${index * 150}ms` }}
              tabIndex={0}
              role="button"
              aria-label={`Learn more about ${industry.title} solutions`}
            >
              <div className="relative bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden h-full hover:border-primary/30 focus:border-primary/30 transition-all duration-300">
                {/* Decorative dots */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full group-hover:scale-150 group-focus:scale-150 transition-transform duration-300"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full group-hover:scale-150 group-focus:scale-150 transition-transform duration-300" style={{ transitionDelay: '0.1s' }}></div>

                <div className="p-6">
                  {/* Image container */}
                  <div className={`relative h-48 rounded-lg bg-gradient-to-br from-${industry.color}/20 via-${industry.color}/10 to-transparent border border-${industry.color}/20 mb-6 overflow-hidden`}>
                    <div className="relative w-full h-full group-hover:scale-105 group-focus:scale-105 transition-transform duration-300" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
                      <img 
                        src={`/${industry.image}`} 
                        alt={industry.title}
                        className="w-full h-full object-cover drop-shadow-lg"
                      />
                    </div>
                    {/* Background pattern */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-${industry.color}/5 to-transparent pointer-events-none`}></div>
                  </div>

                                     {/* Content */}
                   <div className="space-y-4">
                     <h3 className="text-lg font-semibold text-white group-hover:text-primary group-focus:text-primary transition-colors duration-300">
                       {industry.title}
                     </h3>
                     
                     {/* Description with reveal animation */}
                     <div className="overflow-hidden">
                       <div className="max-h-0 group-hover:max-h-[200px] group-focus:max-h-[200px] transition-all duration-500 ease-out">
                         <p className="text-gray-100 text-sm leading-relaxed pt-2 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0 transition-all duration-500 ease-out">
                           {industry.description}
                         </p>
                       </div>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="scroll-section">
            <p className="text-gray-300 mb-6">
              Seeking industry-specific solutions designed for your unique business requirements?
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="magnetic-button bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg transition-all duration-300"
            >
              Discover Solutions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;