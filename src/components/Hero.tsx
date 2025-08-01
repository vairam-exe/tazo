
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Code, Database, Zap } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    const elements = heroRef.current?.querySelectorAll('.scroll-section');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: "url('/background.png')" }}
      ></div>
      <ParticleBackground />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/20 rounded-lg animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 border border-primary/30 transform rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl">
          {/* Main heading with typewriter effect */}
          <div className="scroll-section mb-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-left">
              <span className="block text-white">Accelerating</span>
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient">
                Digital Excellence
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 text-left">
              Next-Generation Technology Solutions
            </h2>
          </div>

          {/* Subtitle */}
          <div className="scroll-section mb-8">
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed text-left">
              We architect intelligent digital ecosystems and transformative solutions that drive enterprises toward unprecedented growth. Discover where innovation meets operational excellence.
            </p>
          </div>

          {/* Feature badges */}
          <div className="scroll-section mb-12">
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
                <Code className="w-5 h-5 text-primary" />
                <span className="text-sm text-gray-300">Custom Development</span>
              </div>
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
                <Database className="w-5 h-5 text-accent" />
                <span className="text-sm text-gray-300">Enterprise Integration</span>
              </div>
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-sm text-gray-300">Digital Transformation</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="scroll-section">
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="magnetic-button group bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              Begin Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Stats */}
          <div className="scroll-section mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl">
            <div className="text-left">
              <div className="text-3xl font-bold text-primary mb-2">300+</div>
              <div className="text-gray-400 text-sm">Projects Delivered</div>
            </div>
            <div className="text-left">
              <div className="text-3xl font-bold text-accent mb-2">75+</div>
              <div className="text-gray-400 text-sm">Enterprise Clients</div>
            </div>
            <div className="text-left">
              <div className="text-3xl font-bold text-primary mb-2">99%</div>
              <div className="text-gray-400 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
