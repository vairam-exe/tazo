
import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const TechnologyStack = () => {
  const stackRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState('enterprise');

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

    const elements = stackRef.current?.querySelectorAll('.scroll-section');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const techCategories = {
    enterprise: {
      title: "Enterprise Systems",
      description: "Robust enterprise platforms for large-scale operations",
      technologies: [
        { name: "SAP S/4HANA", logo: "🏢", description: "Next-generation ERP suite", popularity: 95 },
        { name: "SAP Fiori", logo: "🎨", description: "Modern UX for SAP applications", popularity: 88 },
        { name: "Manhattan WMS", logo: "📦", description: "Advanced warehouse management", popularity: 92 },
        { name: "Oracle ERP", logo: "🔮", description: "Comprehensive business applications", popularity: 85 },
        { name: "Microsoft Dynamics", logo: "🔷", description: "Cloud-first business applications", popularity: 80 },
        { name: "Salesforce", logo: "☁️", description: "Customer relationship management", popularity: 90 }
      ]
    },
    cloud: {
      title: "Cloud Platforms",
      description: "Scalable cloud infrastructure and services",
      technologies: [
        { name: "AWS", logo: "🌐", description: "Comprehensive cloud services", popularity: 95 },
        { name: "Microsoft Azure", logo: "☁️", description: "Enterprise cloud platform", popularity: 90 },
        { name: "Google Cloud", logo: "🔍", description: "AI-powered cloud solutions", popularity: 85 },
        { name: "Docker", logo: "🐳", description: "Containerization platform", popularity: 88 },
        { name: "Kubernetes", logo: "⚙️", description: "Container orchestration", popularity: 82 },
        { name: "Terraform", logo: "🏗️", description: "Infrastructure as code", popularity: 78 }
      ]
    },
    development: {
      title: "Development Tools",
      description: "Modern development frameworks and tools",
      technologies: [
        { name: "React", logo: "⚛️", description: "Modern UI framework", popularity: 92 },
        { name: "Node.js", logo: "🟢", description: "JavaScript runtime", popularity: 88 },
        { name: "Python", logo: "🐍", description: "Versatile programming language", popularity: 90 },
        { name: "TypeScript", logo: "📘", description: "Typed JavaScript", popularity: 85 },
        { name: ".NET Core", logo: "🔷", description: "Cross-platform framework", popularity: 82 },
        { name: "Java", logo: "☕", description: "Enterprise programming language", popularity: 87 }
      ]
    },
    database: {
      title: "Database Systems",
      description: "High-performance data storage solutions",
      technologies: [
        { name: "PostgreSQL", logo: "🐘", description: "Advanced relational database", popularity: 90 },
        { name: "MongoDB", logo: "🍃", description: "Document-oriented database", popularity: 85 },
        { name: "Redis", logo: "🔴", description: "In-memory data structure store", popularity: 82 },
        { name: "SQL Server", logo: "🗄️", description: "Microsoft database platform", popularity: 88 },
        { name: "Oracle DB", logo: "🔮", description: "Enterprise database solution", popularity: 85 },
        { name: "Elasticsearch", logo: "🔍", description: "Search and analytics engine", popularity: 80 }
      ]
    }
  };

  return (
    <section id="technology" ref={stackRef} className="py-20 bg-gradient-to-b from-background to-secondary/10 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 noise-overlay opacity-30"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="scroll-section">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technology <span className="text-accent">Stack</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technologies and platforms that power our enterprise solutions
            </p>
          </div>
        </div>

        {/* Category selector */}
        <div className="scroll-section mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(techCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  selectedCategory === key
                    ? 'bg-primary text-white'
                    : 'bg-card/30 text-gray-300 hover:bg-card/50'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Selected category content */}
        <div className="scroll-section">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-white mb-4">
              {techCategories[selectedCategory as keyof typeof techCategories].title}
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {techCategories[selectedCategory as keyof typeof techCategories].description}
            </p>
          </div>

          {/* Technology grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories[selectedCategory as keyof typeof techCategories].technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="card-3d group bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {tech.logo}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white group-hover:text-primary transition-colors duration-300">
                      {tech.name}
                    </h4>
                    <p className="text-sm text-gray-400 mt-1">
                      {tech.description}
                    </p>
                  </div>
                </div>

                {/* Popularity bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Adoption</span>
                    <span>{tech.popularity}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${tech.popularity}%` }}
                    ></div>
                  </div>
                </div>

                <button className="group/btn flex items-center gap-2 text-primary hover:text-accent transition-colors duration-300 text-sm font-medium">
                  Learn More
                  <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="text-center mt-16">
          <div className="scroll-section">
            <div className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Custom Technology Solutions
              </h3>
              <p className="text-gray-300 mb-6">
                Don't see your preferred technology? We adapt our expertise to work with your existing tech stack 
                and can recommend the best solutions for your specific requirements.
              </p>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="magnetic-button bg-accent hover:bg-accent/90 text-black px-8 py-4 rounded-lg transition-all duration-300 font-medium"
              >
                Discuss Your Tech Stack
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
