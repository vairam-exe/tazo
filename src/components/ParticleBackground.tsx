
import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random starting position
      const startX = Math.random() * 100;
      const duration = Math.random() * 3 + 2; // 2-5 seconds
      const delay = Math.random() * 2;
      
      particle.style.left = `${startX}%`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${delay}s`;
      
      // Random opacity and size
      particle.style.opacity = `${Math.random() * 0.5 + 0.2}`;
      particle.style.width = `${Math.random() * 4 + 2}px`;
      particle.style.height = particle.style.width;
      
      container.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      }, (duration + delay) * 1000);
    };

    // Create particles continuously
    const interval = setInterval(createParticle, 200);

    // Create initial burst
    for (let i = 0; i < 10; i++) {
      setTimeout(createParticle, i * 100);
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="particles absolute inset-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;
