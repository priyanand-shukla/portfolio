import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" id="home">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style prefix */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 font-mono text-sm text-muted-foreground">
            <span className="text-primary">$</span> portfolio.init()
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="gradient-text">Priyanand Shukla</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
            Senior Engineer <span className="text-primary">@</span> Nagarro
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Building scalable <span className="text-primary font-semibold">cloud-native applications</span> with Java, Spring Boot, React, and AI. 
            Specialized in microservices architecture and delivering <span className="text-secondary font-semibold">high-performance enterprise solutions</span>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Button 
              size="lg" 
              className="gradient-bg text-white hover:opacity-90 transition-opacity"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/50 hover:bg-primary/10"
              onClick={() => scrollToSection("experience")}
            >
              View My Work
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://github.com/priyanandshukla" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:bg-primary/10 transition-colors tech-shadow"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/priyanandshukla" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:bg-primary/10 transition-colors tech-shadow"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:priyanandshukla48@gmail.com"
              className="p-3 rounded-full glass-card hover:bg-primary/10 transition-colors tech-shadow"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <button 
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 rounded-full glass-card hover:bg-primary/10 transition-colors animate-bounce"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
};
