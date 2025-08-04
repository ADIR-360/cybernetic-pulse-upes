import { useEffect, useRef } from "react";
import { Calendar, MapPin, Users, Award } from "lucide-react";
import workshopBg from "@/assets/workshop-bg.jpg";

const EventsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in-right');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const pastEvents = [
    {
      title: "CyberSec Summit 2023",
      date: "March 15-17, 2023",
      location: "UPES Campus, Dehradun",
      attendees: "450+",
      type: "Conference",
      description: "Annual cybersecurity conference featuring industry leaders, research presentations, and hands-on workshops.",
      image: workshopBg,
      highlights: ["20+ Industry Speakers", "Research Paper Presentations", "Live Demonstrations"],
      outcome: "Successfully established industry partnerships"
    },
    {
      title: "National Ethical Hacking Championship",
      date: "November 8-10, 2023",
      location: "UPES Campus, Dehradun",
      attendees: "200 teams",
      type: "Competition",
      description: "National level ethical hacking competition with participants from top universities across India.",
      image: workshopBg,
      highlights: ["72-hour Hackathon", "Industry Mentors", "Cash Prizes Worth ₹5 Lakhs"],
      outcome: "Discovered 15 critical vulnerabilities"
    },
    {
      title: "Cyber Threat Intelligence Workshop",
      date: "September 22-24, 2023",
      location: "CyberSec Lab",
      attendees: "75",
      type: "Workshop",
      description: "Advanced workshop on threat intelligence, malware analysis, and incident response strategies.",
      image: workshopBg,
      highlights: ["Hands-on Labs", "Real-world Scenarios", "Industry Certification"],
      outcome: "100% certification completion rate"
    },
    {
      title: "Digital Forensics Bootcamp",
      date: "August 12-14, 2023",
      location: "UPES Forensics Lab",
      attendees: "60",
      type: "Bootcamp",
      description: "Intensive bootcamp covering digital forensics techniques, evidence collection, and analysis.",
      image: workshopBg,
      highlights: ["Expert Sessions", "Case Studies", "Tool Training"],
      outcome: "Established forensics research collaboration"
    },
    {
      title: "Women in Cybersecurity Symposium",
      date: "July 8, 2023",
      location: "UPES Auditorium",
      attendees: "300+",
      type: "Symposium",
      description: "Celebrating and promoting women's participation in cybersecurity with panel discussions and networking.",
      image: workshopBg,
      highlights: ["Panel Discussions", "Networking Sessions", "Mentorship Program Launch"],
      outcome: "50% increase in female enrollment"
    },
    {
      title: "Industry Connect Series 2023",
      date: "Throughout 2023",
      location: "Virtual + On-campus",
      attendees: "1200+ total",
      type: "Seminar Series",
      description: "Monthly seminar series connecting students with cybersecurity professionals from CISO community.",
      image: workshopBg,
      highlights: ["12 Sessions", "Industry Leaders", "Career Guidance"],
      outcome: "85% placement rate increase"
    }
  ];

  return (
    <section id="events" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground mb-6">
            Past <span className="text-primary">Events</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
            A showcase of our successful cybersecurity events, workshops, and competitions that have shaped the future of digital security education
          </p>
        </div>

        <div className="space-y-12">
          {pastEvents.map((event, index) => (
            <div 
              key={event.title}
              className={`flex flex-col lg:flex-row gap-8 items-start animate-on-scroll group ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Event Image */}
              <div className="lg:w-1/3 relative">
                <div className="relative overflow-hidden rounded-lg h-64 border border-border group-hover:border-primary/50 transition-all duration-300">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-card border border-border rounded-full text-xs font-medium text-card-foreground">
                      {event.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* Event Content */}
              <div className="lg:w-2/3 space-y-6">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-orbitron font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-foreground-secondary leading-relaxed">
                    {event.description}
                  </p>
                </div>

                {/* Event Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3 text-sm">
                    <Calendar className="text-primary" size={18} />
                    <div>
                      <div className="text-foreground font-medium">{event.date}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-sm">
                    <MapPin className="text-primary" size={18} />
                    <div className="text-foreground-secondary">{event.location}</div>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-sm">
                    <Users className="text-primary" size={18} />
                    <div className="text-foreground-secondary">{event.attendees} participants</div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-foreground uppercase tracking-wide">Key Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {event.highlights.map((highlight, highlightIndex) => (
                      <span
                        key={highlightIndex}
                        className="px-3 py-1 bg-secondary/20 text-secondary-foreground border border-secondary/30 rounded-full text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcome */}
                <div className="flex items-start space-x-3 bg-card/30 border border-border rounded-lg p-4">
                  <Award className="text-primary mt-1" size={18} />
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-1">Impact & Outcome</h4>
                    <p className="text-sm text-foreground-secondary">{event.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Archive Notice */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="max-w-2xl mx-auto p-8 border border-border rounded-lg bg-card/30">
            <h3 className="text-xl font-orbitron font-bold text-foreground mb-4">
              Event Archive
            </h3>
            <p className="text-foreground-secondary">
              These events represent our commitment to advancing cybersecurity education and research. 
              For detailed reports and resources from past events, please contact our team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;