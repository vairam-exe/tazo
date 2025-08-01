
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import Vision from '@/components/Vision';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Custom cursor effect
    const cursorDot = document.createElement('div');
    const cursorRing = document.createElement('div');
    
    cursorDot.className = 'cursor-dot';
    cursorRing.className = 'cursor-ring';
    
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorRing);

    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      cursorDot.style.transform = `translate(${clientX - 4}px, ${clientY - 4}px)`;
      cursorRing.style.transform = `translate(${clientX - 20}px, ${clientY - 20}px)`;
    };

    const handleMouseEnter = () => {
      cursorDot.style.transform += ' scale(1.5)';
      cursorRing.style.transform += ' scale(1.5)';
    };

    const handleMouseLeave = () => {
      cursorDot.style.transform = cursorDot.style.transform.replace(' scale(1.5)', '');
      cursorRing.style.transform = cursorRing.style.transform.replace(' scale(1.5)', '');
    };

    document.addEventListener('mousemove', moveCursor);
    
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      cursorDot.remove();
      cursorRing.remove();
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Industries />
        <Vision />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
