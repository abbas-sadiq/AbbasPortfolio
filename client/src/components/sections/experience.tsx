import { Calendar, MapPin, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  const experiences = [
    {
      company: "Fiverr",
      role: "Software Engineer (Self-Employed)",
      location: "Lahore, Pakistan",
      period: "03/2025 - Present",
      description: [
        "Developed scalable applications using Java and Spring Boot.",
        "Wrote and tested REST APIs while following clean coding standards.",
        "Participated in code reviews and Agile sprint with the engineering team.",
        "Integrated RESTful APIs with JDBC in Bricker projects, enhancing backend data connectivity."
      ]
    },
    {
      company: "YAP Pakistan",
      role: "Software Engineer Intern",
      location: "Johar Town Lahore, Pakistan",
      period: "03/2025 - 06/2025",
      description: [
        "Addressed bugs and performance issues during development lifecycle.",
        "Optimized codebase increasing application performance by 100%, improving UX.",
        "Collaborated with cross-functional teams to deliver 100% faster project completion.",
        "Working with Fintech Application YAP-PK."
      ]
    },
    {
      company: "Digitify",
      role: "Associate Software Engineer (Intern)",
      location: "Johar Town Lahore, Pakistan",
      period: "08/2024 - 03/2025",
      description: [
        "Contributed to core backend development of Java-based microservices.",
        "Implemented and maintained RESTful APIs for financial services platforms.",
        "Collaborated on the design of scalable solutions with senior engineers."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-primary font-mono text-xl">01.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Where I've Worked</h2>
          <div className="h-px bg-border flex-grow max-w-xs ml-4"></div>
        </div>

        <div className="relative border-l border-border ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors ring-4 ring-background" />
              
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.role} <span className="text-primary">@ {exp.company}</span>
                      </CardTitle>
                    </div>
                    <Badge variant="secondary" className="w-fit font-mono text-xs">
                      {exp.period}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1 font-mono">
                    <MapPin size={14} />
                    {exp.location}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mt-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm md:text-base leading-relaxed">
                        <span className="text-primary mt-1.5">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
