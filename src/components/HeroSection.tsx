import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const cyberTerms = [
    "PENETRATION TESTING", "THREAT INTELLIGENCE", "MALWARE ANALYSIS", "DIGITAL FORENSICS",
    "INCIDENT RESPONSE", "VULNERABILITY ASSESSMENT", "NETWORK SECURITY", "CRYPTOGRAPHY",
    "ETHICAL HACKING", "ZERO-DAY EXPLOITS", "SOCIAL ENGINEERING", "SECURITY AUDITING",
    "CYBER THREAT HUNTING", "BLOCKCHAIN SECURITY", "IOT SECURITY", "CLOUD SECURITY",
    "ARTIFICIAL INTELLIGENCE", "MACHINE LEARNING", "CYBER WARFARE", "DATA PROTECTION"
  ];

  const researchAreas = [
    "CYBERSECURITY", "ETHICAL HACKING", "DIGITAL FORENSICS", "THREAT ANALYSIS",
    "NETWORK SECURITY", "CRYPTOGRAPHY", "MALWARE RESEARCH", "INCIDENT RESPONSE"
  ];

  const scrollToNext = () => {
    const nextSection = document.querySelector('#about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center bg-black text-white overflow-hidden pb-24 pt-20"
    >
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-6 flex-1 flex flex-col justify-center">
        <div className="space-y-8 animate-fade-in-up">
          {/* Main Title */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none">
              CYBERSECURITY
            </h1>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none">
              CENTRE OF EXCELLENCE
            </h2>
            
            <div className="max-w-4xl mx-auto pt-8">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                The CyberSecurity Centre of Excellence is dedicated to advancing cybersecurity education, 
                research, and innovation. Our mission is to develop the next generation of cybersecurity 
                professionals and create cutting-edge solutions for digital security challenges.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8 pb-16">
            <Button
              onClick={scrollToNext}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 text-base font-medium tracking-wide rounded-full"
            >
              RESEARCH
            </Button>
            <Button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 text-base font-medium tracking-wide rounded-full"
            >
              EDUCATION
            </Button>
            <Button
              onClick={() => document.querySelector('#events')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 text-base font-medium tracking-wide rounded-full"
            >
              INNOVATION
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Animated Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-black">
        <div className="relative h-20 flex items-center overflow-hidden">
          <div 
            className="flex items-center space-x-16 whitespace-nowrap animate-scroll-left"
          >
            {researchAreas.concat(researchAreas, researchAreas, researchAreas).map((term, index) => (
              <span
                key={index}
                className="text-lg font-bold tracking-[0.3em] text-white uppercase"
              >
                {term}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;