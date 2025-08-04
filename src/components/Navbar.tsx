import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import upesLogo from "@/assets/upes-logo.jpg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navSections = {
    Research: [
      { name: "Active Projects", href: "#projects" },
      { name: "Publications", href: "#publications" },
      { name: "Research Areas", href: "#research" },
      { name: "Collaborations", href: "#collaborations" },
    ],
    Education: [
      { name: "Programs", href: "#programs" },
      { name: "Mentors", href: "#mentors" },
      { name: "Student Resources", href: "#resources" },
      { name: "Workshops", href: "#events" },
    ],
    About: [
      { name: "Mission", href: "#about" },
      { name: "Vision", href: "#vision" },
      { name: "History", href: "#history" },
      { name: "Leadership", href: "#leadership" },
    ],
    University: [
      { name: "UPES Main Site", href: "https://upes.ac.in", external: true },
      { name: "Campus Life", href: "https://upes.ac.in/campus-life", external: true },
      { name: "Alumni Network", href: "https://upes.ac.in/alumni", external: true },
      { name: "Events", href: "#events" },
    ],
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith("http")) {
      window.open(href, "_blank");
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={upesLogo} alt="UPES Logo" className="h-10 w-auto brightness-0 invert" />
            <div className="border-l border-border pl-3">
              <span className="text-lg font-orbitron font-bold text-foreground">
                CyberSec COE
              </span>
              <p className="text-xs text-foreground-secondary">Center of Excellence</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {Object.entries(navSections).map(([section, items]) => (
              <div 
                key={section}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(section)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-300 font-medium">
                  <span>{section}</span>
                  <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
                </button>
                
                {activeDropdown === section && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-md shadow-lg py-2">
                    {items.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className="block w-full text-left px-4 py-2 text-card-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors duration-200"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground hover:text-primary transition-colors duration-300"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border">
            <div className="px-6 py-4 space-y-4">
              {Object.entries(navSections).map(([section, items]) => (
                <div key={section} className="space-y-2">
                  <h3 className="font-medium text-foreground border-b border-border pb-1">{section}</h3>
                  {items.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="block w-full text-left text-foreground-secondary hover:text-primary transition-colors duration-300 pl-4 py-1"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;