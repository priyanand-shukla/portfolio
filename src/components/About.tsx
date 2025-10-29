import { Award, Briefcase, GraduationCap } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 relative" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Building the future, one microservice at a time
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="glass-card rounded-2xl p-8 tech-shadow">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Summary</h3>
              <p className="text-muted-foreground leading-relaxed">
                Senior Engineer with <span className="text-primary font-semibold">3+ years of experience</span> developing 
                cloud-native applications using Java, Spring Boot, and React. Expertise in building scalable microservices, 
                applying core design patterns and SOLID principles to ensure modular and maintainable architecture.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Proven ability in implementing <span className="text-secondary font-semibold">IAM (Okta)</span> and integrating 
                <span className="text-secondary font-semibold"> Generative AI solutions</span> (LLMs, LangChain) to solve complex 
                enterprise challenges.
              </p>
            </div>

            <div className="space-y-6">
              <div className="glass-card rounded-2xl p-6 tech-shadow flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Current Role</h4>
                  <p className="text-muted-foreground">Senior Engineer at Nagarro</p>
                  <p className="text-sm text-muted-foreground">Jan 2022 - Present</p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 tech-shadow flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <GraduationCap className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Education</h4>
                  <p className="text-muted-foreground">B.Tech in Information Technology</p>
                  <p className="text-sm text-muted-foreground">CGPA: 8.1/10 | 2018-2022</p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 tech-shadow flex items-start gap-4">
                <div className="p-3 rounded-lg gradient-bg">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Recent Achievement</h4>
                  <p className="text-muted-foreground">Brightest Mind Award 2024</p>
                  <p className="text-sm text-muted-foreground">Nagarro Recognition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
