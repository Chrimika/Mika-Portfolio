"use client"

import React, { useState, useEffect } from 'react';
import { ChevronDown, Smartphone, Code, Palette, ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const Portfolio: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Determine active section based on scroll position
      const sections = ['home', 'about', 'projects'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= window.scrollY + 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Mobile App",
      description: "Application mobile complète avec paiement intégré et gestion des commandes",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      technologies: ["React Native", "TypeScript", "Firebase"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Fitness Tracker",
      description: "App de suivi fitness avec géolocalisation et statistiques détaillées",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      technologies: ["Flutter", "Dart", "SQLite"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Chat Application",
      description: "Application de messagerie temps réel avec appels vidéo intégrés",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      technologies: ["React Native", "Socket.io", "WebRTC"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Animated Background Bubbles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-64 h-64 bg-blue-200 rounded-full opacity-20 animate-bounce"
          style={{
            top: '10%',
            right: '10%',
            animationDelay: '0s',
            animationDuration: '6s',
            transform: `translateY(${scrollY * 0.2}px)`
          }}
        />
        <div 
          className="absolute w-48 h-48 bg-purple-200 rounded-full opacity-20 animate-pulse"
          style={{
            bottom: '20%',
            left: '5%',
            animationDelay: '2s',
            animationDuration: '8s',
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        />
        <div 
          className="absolute w-32 h-32 bg-pink-200 rounded-full opacity-20 animate-bounce"
          style={{
            top: '60%',
            right: '20%',
            animationDelay: '4s',
            animationDuration: '10s',
            transform: `translateY(${scrollY * 0.15}px)`
          }}
        />
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-black text-gray-900">
              Mika<span className="text-blue-600">.</span>
            </div>
            
            <nav className="flex items-center space-x-8">
              {['Design', 'Photos', 'About'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.toLowerCase());
                  }}
                >
                  {item}
                </a>
              ))}
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-gray-400">FR</span>
                <span className="text-gray-900 font-medium">EN</span>
              </div>
              <a
                href="mailto:hello@mika.dev"
                className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
              >
                hello@mika.dev
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              className="space-y-6"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
                opacity: Math.max(0, 1 - scrollY * 0.002)
              }}
            >
              <div className="flex items-center space-x-2 text-lg text-gray-600">
                <span className="text-2xl animate-wave">👋</span>
                <span>my name is Mika MBA and I am a freelance</span>
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-black text-gray-900 leading-none">
                Mobile
                <br />
                Developer
              </h1>
              
              <h2 className="text-4xl lg:text-6xl font-light text-gray-500 leading-none">
                & App Designer
              </h2>
              
              <p className="text-lg text-gray-600 max-w-md">
                based in Yaoundé, Cameroon.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-6">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="bg-gray-900 text-white px-8 py-4 rounded-md hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  You need a developer
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-md hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                  You need a designer
                </button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div 
                className="relative"
                style={{
                  transform: `translateY(${scrollY * 0.05}px)`
                }}
              >
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <img
                    src="/assets/images/Mika.jpg"
                    alt="Mika MBA"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl font-bold hidden">
                    M
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8">
                About Me
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Passionate mobile developer with over 5 years of experience creating 
                  beautiful and functional applications that users love.
                </p>
                <p>
                  I specialize in React Native and Flutter development, focusing on 
                  creating seamless user experiences across iOS and Android platforms.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open source projects, or mentoring aspiring developers.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {[
                { icon: Smartphone, title: "Mobile Development", desc: "Native & Cross-platform apps" },
                { icon: Code, title: "Clean Code", desc: "Scalable and maintainable solutions" },
                { icon: Palette, title: "UI/UX Design", desc: "Beautiful and intuitive interfaces" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Recent Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent mobile applications that showcase my skills
              and passion for creating exceptional user experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-sm">Demo</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span className="text-sm">Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to work together?</h3>
          <p className="text-gray-400 mb-6">
            Let's create something amazing together. Get in touch!
          </p>
          <a
            href="mailto:hello@mika.dev"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </footer>

      <style jsx>{`
        @keyframes wave {
          0%, 50%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-10deg); }
        }
        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;