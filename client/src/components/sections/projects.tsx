import { Folder, Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "Virtual Clothing (FYP)",
      description: "An AR-based app for virtual clothing trials with intuitive UX. Allows users to visualize clothes on themselves before purchasing.",
      tech: ["AR/VR", "Java", "Android", "UX Design"],
      links: { github: "#", demo: "#" }
    },
    {
      title: "Bricker",
      description: "Java Spring Boot application integrated with Next.js frontend. Features robust API integration with Rebrickable.com for LEGO data.",
      tech: ["Java", "Spring Boot", "Next.js", "REST APIs"],
      links: { github: "#", demo: "#" }
    },
    {
      title: "Food Order Management",
      description: "Comprehensive backend system for food ordering. Implements full CRUD operations and RESTful APIs tested with Postman.",
      tech: ["Java", "JDBC", "REST APIs", "Postman"],
      links: { github: "#", demo: "#" }
    },
    {
      title: "Airline Reservation System",
      description: "Backend development for booking online tickets. Handles complex data relationships and booking logic.",
      tech: ["Java", "Backend", "SQL", "System Design"],
      links: { github: "#", demo: "#" }
    },
    {
      title: "Islamic Quiz Application",
      description: "Engaging quiz platform with scoring and question bank features. Built with Java Spring Boot backend.",
      tech: ["Spring Boot", "Java", "CRUD", "Education"],
      links: { github: "#", demo: "#" }
    },
    {
      title: "Attendance Management",
      description: "Robust backend enabling automated tracking of student or employee attendance with role-based access controls.",
      tech: ["Spring Boot", "Security", "Role-based Auth", "Java"],
      links: { github: "#", demo: "#" }
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-primary font-mono text-xl">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Some Things I've Built</h2>
          <div className="h-px bg-border flex-grow max-w-xs ml-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="group bg-card hover:translate-y-[-5px] transition-all duration-300 border-border/50 hover:border-primary/50 flex flex-col h-full">
              <CardHeader>
                <div className="flex justify-between items-center mb-4">
                  <Folder className="text-primary w-10 h-10" />
                  <div className="flex gap-2">
                    <a href={project.links.github} className="text-muted-foreground hover:text-primary transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.links.demo} className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono text-muted-foreground/80 mr-2">
                      {t}
                    </span>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
