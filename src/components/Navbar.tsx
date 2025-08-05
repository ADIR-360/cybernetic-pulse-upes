import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import upesLogo from "@/assets/upes-logo.jpg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "PROJECTS", href: "#projects" },
    { name: "EVENTS", href: "#events" },
    { name: "MENTORS", href: "#mentors" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md border-b border-gray-800" : "bg-black/50 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={upesLogo} alt="UPES Logo" className="h-10 w-auto brightness-0 invert" />
            <div className="border-l border-gray-600 pl-3">
              <span className="text-lg font-bold text-white">
                CyberSec COE
              </span>
              <p className="text-xs text-gray-400">Center of Excellence</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-gray-300 transition-colors duration-300 font-medium text-sm tracking-wide"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle & Login */}
          <div className="lg:hidden flex items-center space-x-4">
            <button className="border border-white text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all duration-300">
              LOGIN
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Login Button */}
          <div className="hidden lg:block">
            <button className="border border-white text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all duration-300">
              LOGIN
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-white hover:text-gray-300 transition-colors duration-300 py-2"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;