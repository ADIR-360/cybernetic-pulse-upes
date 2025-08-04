import { useState, useRef, useEffect } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      primary: "cybersec.coe@upes.ac.in",
      secondary: "For general inquiries and collaboration"
    },
    {
      icon: Phone,
      title: "Phone",
      primary: "+91 1234 567 890",
      secondary: "Monday - Friday, 9:00 AM - 6:00 PM"
    },
    {
      icon: MapPin,
      title: "Address",
      primary: "UPES Campus, Knowledge Acres",
      secondary: "Bidholi, Dehradun, Uttarakhand 248007"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 relative overflow-hidden bg-background-secondary">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center space-x-2 bg-card/30 backdrop-blur-sm border border-accent/30 rounded-full px-6 py-2 text-sm font-medium text-accent mb-6">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span>Get In Touch</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              <span className="text-gradient">Connect With</span>
              <br />
              <span className="text-foreground">CyberSec COE</span>
            </h2>
            
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
              Have questions about our programs, research opportunities, or want to collaborate? 
              We'd love to hear from you and explore how we can work together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-on-scroll">
              <div>
                <h3 className="text-2xl font-orbitron font-bold text-primary mb-6">
                  Let's Start a Conversation
                </h3>
                <p className="text-foreground-secondary leading-relaxed mb-8">
                  Whether you're a student interested in cybersecurity, a researcher looking for collaboration, 
                  or an industry partner seeking to connect, we're here to help build the future of cyber defense together.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.title}
                    className="cyber-card group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-cyber-primary rounded-lg flex items-center justify-center group-hover:animate-glow-pulse transition-all duration-300">
                          <info.icon size={20} className="text-background" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="text-primary font-medium mb-1">{info.primary}</p>
                        <p className="text-sm text-foreground-secondary">{info.secondary}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="cyber-card">
                <h4 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <button className="w-full text-left px-4 py-3 bg-muted/20 hover:bg-primary/20 hover:text-primary transition-all duration-300 rounded-lg border border-muted/30 hover:border-primary/30">
                    Schedule a Campus Visit
                  </button>
                  <button className="w-full text-left px-4 py-3 bg-muted/20 hover:bg-secondary/20 hover:text-secondary transition-all duration-300 rounded-lg border border-muted/30 hover:border-secondary/30">
                    Request Research Collaboration
                  </button>
                  <button className="w-full text-left px-4 py-3 bg-muted/20 hover:bg-accent/20 hover:text-accent transition-all duration-300 rounded-lg border border-muted/30 hover:border-accent/30">
                    Download Program Brochure
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-on-scroll">
              <div className="cyber-card">
                {!isSubmitted ? (
                  <>
                    <h3 className="text-2xl font-orbitron font-bold text-foreground mb-6">
                      Send us a Message
                    </h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Input */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 cyber-input rounded-lg transition-all duration-300 focus:outline-none"
                          placeholder="Enter your full name"
                        />
                      </div>

                      {/* Email Input */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 cyber-input rounded-lg transition-all duration-300 focus:outline-none"
                          placeholder="Enter your email address"
                        />
                      </div>

                      {/* Subject Select */}
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 cyber-input rounded-lg transition-all duration-300 focus:outline-none"
                        >
                          <option value="">Select a topic</option>
                          <option value="admissions">Student Admissions</option>
                          <option value="research">Research Collaboration</option>
                          <option value="industry">Industry Partnership</option>
                          <option value="events">Events & Workshops</option>
                          <option value="general">General Inquiry</option>
                        </select>
                      </div>

                      {/* Message Textarea */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 cyber-input rounded-lg transition-all duration-300 focus:outline-none resize-none"
                          placeholder="Tell us more about your inquiry..."
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full cyber-button flex items-center justify-center space-x-2"
                      >
                        <Send size={18} />
                        <span className="relative z-10">Send Message</span>
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 animate-glow-pulse">
                      <CheckCircle size={32} className="text-background" />
                    </div>
                    <h3 className="text-2xl font-orbitron font-bold text-primary mb-4">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-foreground-secondary">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-8 w-28 h-28 border border-accent/15 rounded-full floating-animation opacity-20"></div>
      <div className="absolute bottom-1/4 left-10 w-18 h-18 border border-primary/20 rounded-lg floating-animation opacity-25" style={{ animationDelay: '3s' }}></div>
    </section>
  );
};

export default ContactSection;