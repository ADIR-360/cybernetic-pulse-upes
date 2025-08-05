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
    // Smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    // Custom cursor tracking without visible dot
    const handleMouseMove = (e: MouseEvent) => {
      // Just track mouse for any future interactions, no visible cursor
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black" style={{ scrollBehavior: 'smooth' }}>
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative">
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