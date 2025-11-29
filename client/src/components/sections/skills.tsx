import { CheckCircle2 } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: ["Java", "Spring Boot", "Microservices", "JDBC", "RESTful APIs"]
    },
    {
      title: "Database",
      skills: ["MySQL", "SQL", "PostgreSQL", "Data Modeling"]
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "GitHub", "Postman", "Maven", "IntelliJ IDEA"]
    },
    {
      title: "Frontend & Others",
      skills: ["HTML/CSS", "JavaScript", "Next.js", "Algorithms", "Agile"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-primary font-mono text-xl">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Technical Skills</h2>
          <div className="h-px bg-border flex-grow max-w-xs ml-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-bold text-foreground/90 border-b border-border/50 pb-2">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-muted-foreground font-mono text-sm hover:text-primary transition-colors">
                    <CheckCircle2 size={14} className="text-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
