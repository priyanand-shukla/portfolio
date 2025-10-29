import { Briefcase, Calendar } from "lucide-react";

const achievements = [
  "Designed and deployed a scalable microservice for payout automation using Drools rule engine, automating 700K+ monthly transactions with 99% accuracy, eliminating manual processing",
  "Engineered a real-time notification service via contract-driven development with Apache Kafka and Firestore",
  "Implemented BFF (Backend-for-Frontend) architecture in Next.js, aggregating and transforming data from 50+ APIs for frontend consumption",
  "Redesigned application infrastructure from single-tenant to multi-tenant architecture, improving scalability and reducing resource overhead by 40%",
  "Leveraged Generative AI (ChatGPT, LangChain) to build custom solutions, solving complex client-specific problems",
  "Deployed IAM features with Okta, enabling seamless authentication and onboarding for 700K+ B2B users",
  "Integrated 10+ SaaS platforms (e.g., Salsify, Contentful) to streamline content and data workflows",
  "Improved UX performance scores by 70% through architectural redesign and workflow optimization",
  "Integrated 4+ digital services using a micro frontend strategy, improving modularity and scalability",
  "Built reusable UI components and design system integrations using React, reducing UI development time by 40%",
  "Delivered REST APIs and 100+ JUnit tests, achieving over 90% test coverage",
  "Led RFP solution architecture and feasibility analysis for 2+ enterprise clients",
  "Collaborated cross-functionally across Agile/Scrum teams, resulting in a 25% reduction in post-release defects"
];

export const Experience = () => {
  return (
    <section className="py-20 relative" id="experience">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Delivering impactful solutions in cloud-native development
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary" />

            <div className="glass-card rounded-2xl p-6 md:p-8 tech-shadow ml-6 md:ml-16 relative">
              {/* Timeline dot */}
              <div className="absolute -left-[1.6rem] md:-left-[2.5rem] top-8 w-4 h-4 rounded-full gradient-bg shadow-lg" />

              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    <Briefcase className="h-6 w-6 text-primary" />
                    Senior Engineer
                  </h3>
                  <p className="text-xl text-muted-foreground mb-2">Nagarro</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Jan 2022 - Present | Gurugram, India
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg gradient-text mb-4">Key Achievements & Responsibilities:</h4>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground italic">
                  Tools & practices: Adhered to SOLID design principles, leveraging Git/GitHub, Kibana, Grafana, and SonarQube 
                  for continuous integration, monitoring, and code quality. Created design documents, sequence diagrams, 
                  and technical architecture flows using Lucidchart and Draw.io.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
