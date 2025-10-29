import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 relative" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Feel free to reach out for collaborations, opportunities, or just to say hi!
          </p>

          <div className="glass-card rounded-2xl p-8 md:p-12 tech-shadow">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-6 gradient-text">Get in Touch</h3>
                  <div className="space-y-4">
                    <a 
                      href="mailto:priyanandshukla48@gmail.com"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium">priyanandshukla48@gmail.com</p>
                      </div>
                    </a>

                    <a 
                      href="tel:+919935801473"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="font-medium">+91 9935801473</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-3 p-3 rounded-lg">
                      <div className="p-2 rounded-lg bg-secondary/10">
                        <MapPin className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-medium">Gurugram, India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-6 gradient-text">Social Media</h3>
                  <div className="space-y-3">
                    <a
                      href="https://github.com/priyanandshukla"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-lg glass-card hover:bg-primary/10 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <Github className="h-6 w-6 text-primary" />
                        <span className="font-medium">GitHub</span>
                      </div>
                      <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                        View Profile →
                      </span>
                    </a>

                    <a
                      href="https://linkedin.com/in/priyanandshukla"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-lg glass-card hover:bg-primary/10 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <Linkedin className="h-6 w-6 text-primary" />
                        <span className="font-medium">LinkedIn</span>
                      </div>
                      <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                        Connect →
                      </span>
                    </a>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-4">
                    Open to new opportunities and collaborations. Let's build something amazing together!
                  </p>
                  <Button 
                    className="w-full gradient-bg text-white hover:opacity-90 transition-opacity"
                    asChild
                  >
                    <a href="mailto:priyanandshukla48@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Send a Message
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-12 text-sm text-muted-foreground">
            <p>© 2025 Priyanand Shukla. Built with React & TypeScript.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
