import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "JavaScript", "TypeScript", "Python", "SQL", "HTML", "CSS"],
    color: "primary"
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Spring Boot", "Spring", "React", "Next.js"],
    color: "secondary"
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "Firestore"],
    color: "primary"
  },
  {
    title: "Cloud & Platforms",
    skills: ["AWS", "GCP", "Databricks", "Apache Kafka", "Kibana", "Grafana Cloud", "Okta"],
    color: "secondary"
  },
  {
    title: "Tools & Technologies",
    skills: [
      "Microservices",
      "REST APIs",
      "Drools",
      "CI/CD",
      "OAuth 2.0",
      "Generative AI",
      "LangChain",
      "Git",
      "GitHub",
      "Jenkins",
      "SonarQube",
      "Docker",
      "Maven"
    ],
    color: "primary"
  }
];

export const Skills = () => {
  return (
    <section className="py-20 relative" id="skills">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Technologies I work with to build exceptional solutions
          </p>

          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title}
                className="glass-card rounded-2xl p-6 md:p-8 tech-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full gradient-bg" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant={category.color === "primary" ? "default" : "secondary"}
                      className="px-4 py-2 text-sm font-medium hover:scale-105 transition-transform cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Key Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="glass-card rounded-2xl p-6 text-center tech-shadow hover:scale-105 transition-transform">
              <div className="text-4xl font-bold gradient-text mb-2">Microservices</div>
              <p className="text-muted-foreground">Scalable Architecture Design</p>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center tech-shadow hover:scale-105 transition-transform">
              <div className="text-4xl font-bold gradient-text mb-2">High Performance</div>
              <p className="text-muted-foreground">Optimized API Development</p>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center tech-shadow hover:scale-105 transition-transform">
              <div className="text-4xl font-bold gradient-text mb-2">Clean Code</div>
              <p className="text-muted-foreground">Test-Driven Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
