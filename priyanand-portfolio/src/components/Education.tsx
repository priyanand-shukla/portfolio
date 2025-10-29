import { Award, BookOpen, GraduationCap } from "lucide-react";

export const Education = () => {
  return (
    <section className="py-20 relative" id="education">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Academic background and professional credentials
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Education */}
            <div className="glass-card rounded-2xl p-8 tech-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-xl gradient-bg">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Education</h3>
                  <p className="text-sm text-muted-foreground">Academic Qualification</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Bachelor of Technology</h4>
                  <p className="text-muted-foreground mb-1">Information Technology</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Dr APJ Abdul Kalam Technical University
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <span className="text-sm text-muted-foreground">2018 - 2022</span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                      CGPA: 8.1/10
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="glass-card rounded-2xl p-8 tech-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-xl gradient-bg">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Certifications</h3>
                  <p className="text-sm text-muted-foreground">Professional Credentials</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold mb-2">
                    Databricks Certified Data Engineer Associate
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs px-2 py-1 rounded-full bg-background text-muted-foreground">
                      Apache Spark
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-background text-muted-foreground">
                      Delta Lake
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-background text-muted-foreground">
                      Python
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-background text-muted-foreground">
                      ETL Pipelines
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">Issued: 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Awards */}
          <div className="glass-card rounded-2xl p-8 tech-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl gradient-bg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Awards & Recognition</h3>
                <p className="text-sm text-muted-foreground">Professional Achievements</p>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-2xl font-bold gradient-text mb-2">
                    Brightest Mind Award 2024
                  </h4>
                  <p className="text-muted-foreground">
                    Recognized for exceptional technical contributions and innovative problem-solving at Nagarro
                  </p>
                </div>
                <div className="text-6xl opacity-20">🏆</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
