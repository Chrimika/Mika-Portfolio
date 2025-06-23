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
  const [language, setLanguage] = useState<'fr' | 'en'>('en');

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
      title: "Papers - Livres et Histoires",
      description: "Application mobile complète avec paiement intégré et gestion auteurs - livres",
      image: "/assets/images/Papers.jpg",
      technologies: ["React Native", "TypeScript", "Firebase"],
      demoUrl: "https://play.google.com/store/apps/details?id=com.seedsoftengine.papers",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Kamer Otaku Festival",
      description: "App de présentation de l'événement otaku le plus chaud au Cameroun",
      image: "/assets/images/Kof.png",
      technologies: ["Next JS", "TypeScript", "Tailwind CSS"],
      demoUrl: "https://kof-web.vercel.app/",
      githubUrl: "https://github.com/Chrimika/KOF_WEB"
    },
    {
      id: 3,
      title: "Care Application",
      description: "Application de prise de rendez-vous médicaux avec chat en temps réel, avec maps integrées",
      image: "/assets/images/PiolCare.png",
      technologies: ["React Native", "Firebase", "MapBox"],
      demoUrl: "https://play.google.com/store/apps/details?id=com.wizeman.piolcare",
      githubUrl: "#"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const translations = {
    en: {
      heroIntro: "my name is Mika MBA and I am a freelance",
      heroTitle1: "Mobile",
      heroTitle2: "Developer",
      heroSubtitle: "& App Designer",
      heroLocation: "based in Yaoundé, Cameroon.",
      heroBtnDev: "You need a developer",
      heroBtnDesign: "You need a designer",
      aboutTitle: "About Me",
      aboutP1: "Passionate mobile developer with over 5 years of experience creating beautiful and functional applications that users love.",
      aboutP2: "I specialize in React Native and Flutter development, focusing on creating seamless user experiences across iOS and Android platforms.",
      aboutP3: "When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or mentoring aspiring developers.",
      aboutSkills: [
        { icon: Smartphone, title: "Mobile Development", desc: "Native & Cross-platform apps" },
        { icon: Code, title: "Clean Code", desc: "Scalable and maintainable solutions" },
        { icon: Palette, title: "UI/UX Design", desc: "Beautiful and intuitive interfaces" }
      ],
      projectsTitle: "Recent Projects",
      projectsDesc: "Here are some of my recent mobile applications that showcase my skills and passion for creating exceptional user experiences.",
      demo: "Demo",
      code: "Code",
      footerTitle: "Ready to work together?",
      footerDesc: "Let's create something amazing together. Get in touch!",
      footerBtn: "Get In Touch",
      whatsapp: "WhatsApp"
    },
    fr: {
      heroIntro: "je m'appelle Mika MBA et je suis freelance",
      heroTitle1: "Développeur",
      heroTitle2: "Mobile",
      heroSubtitle: "& Designer d'applications",
      heroLocation: "basé à Yaoundé, Cameroun.",
      heroBtnDev: "Vous avez besoin d'un développeur",
      heroBtnDesign: "Vous avez besoin d'un designer",
      aboutTitle: "À propos de moi",
      aboutP1: "Développeur mobile passionné avec plus de 5 ans d'expérience dans la création d'applications belles et fonctionnelles appréciées des utilisateurs.",
      aboutP2: "Je suis spécialisé en développement React Native et Flutter, avec un focus sur l'expérience utilisateur fluide sur iOS et Android.",
      aboutP3: "Quand je ne code pas, je découvre de nouvelles technologies, contribue à l'open source ou mentor des développeurs en herbe.",
      aboutSkills: [
        { icon: Smartphone, title: "Développement Mobile", desc: "Apps natives & multiplateformes" },
        { icon: Code, title: "Code Propre", desc: "Solutions scalables et maintenables" },
        { icon: Palette, title: "UI/UX Design", desc: "Interfaces belles et intuitives" }
      ],
      projectsTitle: "Projets récents",
      projectsDesc: "Voici quelques-unes de mes applications mobiles récentes qui illustrent mes compétences et ma passion pour l'expérience utilisateur.",
      demo: "Démo",
      code: "Code",
      footerTitle: "Prêt à collaborer ?",
      footerDesc: "Créons quelque chose d'incroyable ensemble. Contactez-moi !",
      footerBtn: "Me contacter",
      whatsapp: "WhatsApp"
    }
  };

  const t = translations[language];

  const navLabels = {
    en: [
      { label: 'Home', id: 'home' },
      { label: 'About', id: 'about' },
      { label: 'Projects', id: 'projects' }
    ],
    fr: [
      { label: 'Accueil', id: 'home' },
      { label: 'À propos', id: 'about' },
      { label: 'Projets', id: 'projects' }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 w-full overflow-x-hidden">
      {/* Animated Background Bubbles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none w-full">
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 w-full">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-black text-gray-900">
              Mika<span className="text-blue-600">.</span>
            </div>
            
            <nav className="flex items-center space-x-8">
              {navLabels[language].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-gray-600 hover:text-gray-900 transition-colors${activeSection === item.id ? ' font-bold underline' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center space-x-2 text-sm">
                <button
                  className={`transition-colors cursor-pointer ${language === 'fr' ? 'text-gray-900 font-medium' : 'text-gray-400'}`}
                  onClick={() => setLanguage('fr')}
                  aria-label="Français"
                >
                  FR
                </button>
                <button
                  className={`transition-colors cursor-pointer ${language === 'en' ? 'text-gray-900 font-medium' : 'text-gray-400'}`}
                  onClick={() => setLanguage('en')}
                  aria-label="English"
                >
                  EN
                </button>
              </div>
              <a
                href="mailto:mbachristian58@gmail.com"
                className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
              >
                mbachristian58@gmail.com
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 min-h-screen flex items-center w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
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
                <span>{t.heroIntro}</span>
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-black text-gray-900 leading-none">
                {t.heroTitle1}
                <br />
                {t.heroTitle2}
              </h1>
              
              <h2 className="text-4xl lg:text-6xl font-light text-gray-500 leading-none">
                {t.heroSubtitle}
              </h2>
              
              <p className="text-lg text-gray-600 max-w-md">
                {t.heroLocation}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-6">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="bg-gray-900 text-white px-8 py-4 rounded-md hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  {t.heroBtnDev}
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-md hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                  {t.heroBtnDesign}
                </button>
              </div>
            </div>

            <div className="flex justify-center w-full">
              <div 
                className="relative"
                style={{
                  transform: `translateY(${scrollY * 0.05}px)`
                }}
              >
                <div className="w-60 h-60 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl mx-auto">
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
      <section id="about" className="py-20 bg-white w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8">
                {t.aboutTitle}
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  {t.aboutP1}
                </p>
                <p>
                  {t.aboutP2}
                </p>
                <p>
                  {t.aboutP3}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 w-full">
              {t.aboutSkills.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow w-full min-w-0"
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
      <section id="projects" className="py-20 bg-gray-50 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              {t.projectsTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.projectsDesc}
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
                          <span className="text-sm">{t.demo}</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span className="text-sm">{t.code}</span>
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
      <footer className="bg-gray-900 text-white py-12 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center w-full">
          <h3 className="text-2xl font-bold mb-4">
            {t.footerTitle}
          </h3>
          <p className="text-gray-400 mb-6">
            {t.footerDesc}
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="mailto:mbachristian58@gmail.com"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white px-8 py-3 rounded-md hover:from-blue-700 hover:to-pink-600 transition-colors font-semibold shadow-lg"
            >
              {t.footerBtn}
            </a>
            <a
              href="https://wa.me/237672094167"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md transition-colors font-semibold shadow-lg"
              aria-label="WhatsApp"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.197.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.372.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 6.318h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.455 4.436-9.89 9.893-9.89 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.896 6.994c-.003 5.455-4.438 9.89-9.893 9.89zm8.413-18.303A11.815 11.815 0 0012.05 0C5.495 0 .06 5.435.058 12.086c0 2.13.557 4.213 1.615 6.044L0 24l6.064-1.594a11.88 11.88 0 005.978 1.527h.005c6.554 0 11.89-5.435 11.893-12.086a11.82 11.82 0 00-3.495-8.626z" />
              </svg>
              {t.whatsapp}
            </a>
          </div>
        </div>
      </footer>

      {/* Floating CV Download Button */}
      <a
        href="/MikaMBA_Resume.pdf"
        download
        className="fixed bottom-6 right-6 z-50 bg-white/90 border border-gray-300 rounded-full shadow-lg p-3 flex items-center gap-2 text-gray-700 hover:bg-blue-600 hover:text-white transition-colors text-sm backdrop-blur-md"
        aria-label="Télécharger mon CV"
        title="Télécharger mon CV"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4m-8 8h8" />
        </svg>
        Télécharger mon   CV
      </a>

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