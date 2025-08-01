import React, { useEffect, useRef, useState } from 'react';
import { Lightbulb, Users, Target, Globe, Eye } from 'lucide-react';

const Vision = () => {
  const visionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const scrollToSection = (sectionId: string) => {
    document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Floating particles component (simplified)
  const FloatingParticles = () => {
    const particles = Array.from({ length: 15 }, (_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-primary/20 rounded-full animate-pulse"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${3 + Math.random() * 2}s`,
        }}
      />
    ));
    return <div className="absolute inset-0 overflow-hidden pointer-events-none">{particles}</div>;
  };

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

    const elements = visionRef.current?.querySelectorAll('.scroll-section');
    elements?.forEach((el) => observer.observe(el));

    // Mouse movement tracking for subtle parallax effects
    const handleMouseMove = (e: MouseEvent) => {
      const rect = visionRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    visionRef.current?.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      visionRef.current?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const coreValues = [
    {
      icon: Lightbulb,
      title: "Innovation Leadership",
      description: "Developing groundbreaking solutions that establish new industry benchmarks",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      icon: Users,
      title: "Human-Centric Design",
      description: "Creating technology that amplifies human potential and capabilities",
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20"
    },
    {
      icon: Target,
      title: "Sustainable Excellence",
      description: "Building robust solutions engineered for long-term organizational success",
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20"
    },
    {
      icon: Globe,
      title: "Global Transformation",
      description: "Generating positive impact and meaningful change across worldwide markets",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
    }
  ];

  return (
    <section 
      id="vision" 
      ref={visionRef} 
      className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient mesh */}
        <div 
          className="absolute inset-0 opacity-30 transition-all duration-1000"
          style={{
            background: `
              radial-gradient(circle at ${20 + mousePosition.x * 60}% ${50 + mousePosition.y * 30}%, hsl(var(--primary) / 0.1) 0%, transparent 50%),
              radial-gradient(circle at ${80 - mousePosition.x * 40}% ${20 + mousePosition.y * 60}%, hsl(var(--accent) / 0.1) 0%, transparent 50%)
            `
          }}
        />
        
        {/* Floating particles */}
        <FloatingParticles />
        
        {/* Subtle circuit pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-primary/30 rounded-full" />
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-accent/30 rounded-lg" />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary/20 rounded-full" />
        </div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Split Layout Container */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Main Content (60%) */}
          <div className="lg:col-span-3 space-y-8">
            <div className="scroll-section">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full mb-8 group hover:bg-primary/20 transition-all duration-300">
                <Eye className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Our Vision</span>
              </div>
              
              {/* Main Title */}
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-12">
                <span className="text-white">Pioneering Tomorrow's </span>
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Technology Landscape
                </span>
              </h2>
            </div>

            {/* Vision Content Paragraphs */}
            <div className="space-y-8 max-w-3xl">
              <div className="scroll-section">
                <p className="text-lg lg:text-xl text-gray-200 leading-relaxed">
                  We envision a future where <span className="text-primary font-semibold">advanced technology</span> harmoniously amplifies human innovation, creating transformative solutions that revolutionize enterprises and elevate global standards of excellence.
                </p>
              </div>
              
              <div className="scroll-section">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our mission transcends exceptional software delivery. We serve as <span className="text-accent font-semibold">architects of digital evolution</span>, empowering organizations to achieve unprecedented levels of operational efficiency, breakthrough innovation, and exponential growth in today's rapidly advancing technological ecosystem.
                </p>
              </div>
              
              <div className="scroll-section">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Through <span className="text-primary font-semibold">revolutionary development methodologies</span>, strategic foresight, and relentless pursuit of excellence, we forge enduring partnerships that catalyze meaningful transformation and deliver sustainable competitive advantages.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Core Values (40%) */}
          <div className="lg:col-span-2">
            <div className="scroll-section">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 text-center lg:text-left">
                Core <span className="text-primary">Values</span>
              </h3>
              
              {/* 2x2 Grid for Core Values */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {coreValues.map((value, index) => (
                  <div
                    key={value.title}
                    className={`scroll-section group`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className={`p-6 rounded-xl ${value.bgColor} border ${value.borderColor} hover:border-opacity-50 transition-all duration-300 h-full group-hover:transform group-hover:scale-105`}>
                      {/* Icon */}
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-lg ${value.bgColor} border ${value.borderColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <value.icon className={`w-6 h-6 ${value.color}`} />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          {/* Title */}
                          <h4 className="text-base font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                            {value.title}
                          </h4>
                          
                          {/* Description */}
                          <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="scroll-section text-center mt-20">
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
            <button 
              onClick={() => scrollToSection('#contact')}
              className="relative px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Discover Our Impact
              <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;