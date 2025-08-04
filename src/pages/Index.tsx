import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import EventsSection from "@/components/EventsSection";
import MentorsSection from "@/components/MentorsSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Parallax effect for background elements
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach((element) => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    // Mouse move effect for interactive elements
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth - 0.5) * 2;
      const yPos = (clientY / innerHeight - 0.5) * 2;
      
      const floatingElements = document.querySelectorAll('.floating-animation');
      floatingElements.forEach((element, index) => {
        const speed = 0.02 + (index * 0.01);
        const x = xPos * speed * 10;
        const y = yPos * speed * 10;
        (element as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    // Observe all animation elements
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative">
        {/* Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {/* Animated Grid Lines */}
          <div className="absolute inset-0 cyber-grid opacity-[0.03]"></div>
          
          {/* Floating Particles */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full parallax-element"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.8}s`
              }}
            />
          ))}
          
          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/5 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-secondary/5 via-transparent to-transparent"></div>
        </div>

        {/* Page Sections */}
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EventsSection />
        <MentorsSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-primary text-background rounded-full flex items-center justify-center hover:bg-primary-glow transition-all duration-300 z-50 opacity-0 hover:opacity-100 group"
        style={{
          opacity: 0,
          transition: 'opacity 0.3s ease'
        }}
        onMouseEnter={(e) => {
          if (window.scrollY > 500) {
            e.currentTarget.style.opacity = '1';
          }
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:animate-bounce"
        >
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </button>

      {/* Loading Overlay (optional enhancement) */}
      <style>{`
        @keyframes pageLoad {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-page-load {
          animation: pageLoad 0.8s ease-out;
        }

        /* Custom scrollbar for webkit browsers */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: hsl(var(--background));
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, hsl(var(--primary)), hsl(var(--secondary)));
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, hsl(var(--primary-glow)), hsl(var(--secondary-glow)));
        }

        /* Enhance scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Back to top button visibility */
        .back-to-top {
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .back-to-top.visible {
          opacity: 1;
          visibility: visible;
        }
      `}</style>

      <script dangerouslySetInnerHTML={{
        __html: `
          // Show/hide back to top button based on scroll position
          window.addEventListener('scroll', function() {
            const backToTopButton = document.querySelector('.back-to-top');
            if (backToTopButton) {
              if (window.scrollY > 500) {
                backToTopButton.classList.add('visible');
              } else {
                backToTopButton.classList.remove('visible');
              }
            }
          });
        `
      }} />
    </div>
  );
};

export default Index;