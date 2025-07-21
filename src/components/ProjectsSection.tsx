import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.jpg";
import project6 from "@/assets/project6.jpg";
import project7 from "@/assets/project7.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Hikster",
      description: "Developed dynamic and interactive website that ensured high traﬃc.",
      image: project1,
      technologies: ["React", "D3.js", "Node.js", "MongoDB"],
      liveUrl: "https://hikster.com//",
      githubUrl: "#",
      category: "Web App"
    },
    {
      title: "K2SKATES", 
      description: "Design UI and front end functionality using React.",
      image: project2,
      technologies: ["Python", "Google Maps", "React", "Stripe", "MySQL"],
      liveUrl: "https://k2skates.com/",
      githubUrl: "#",
      category: "E-commerce"
    },
    {
      title: "AmortizeCRE",
      description: "Implemented data tables and wrote a component for client-side validations",
      image: project3,
      technologies: ["React", "Socket.io", "Express", "Redis"],
      liveUrl: "http://amortizecre.com/", 
      githubUrl: "#",
      category: "Mobile App"
    },
    {
      title: "Xilo",
      description: "Developed frontend UI and integrated API.",
      image: project4,
      technologies: ["Vue.js", "Django", "PostgreSQL", "Docker"],
      liveUrl: "https://xilo.io/",
      githubUrl: "#",
      category: "Productivity"
    },
    {
      title: "Dash Challenges",
      description: "Planned, wrote, and debugged web applications and software with complete accuracy",
      image: project5,
      technologies: ["React", "Node.js", "MySQL", "Google Maps"],
      liveUrl: "https://www.dashchallenges.com/",
      githubUrl: "#", 
      category: "Real Estate"
    },
    {
      title: "Dover Saddlery",
      description: "Implemented user interfaces, dynamic landing pages and custom table views.",
      image: project6,
      technologies: ["Angular", "NestJS", "MongoDB", "AWS"],
      liveUrl: "https://www.doversaddlery.com/",
      githubUrl: "#",
      category: "Social Media"
    },
    {
      title: "Humanitarian Service Medal",
      description: "Earned the *Humanitarian Service Medal* for outstanding contributions to disaster recovery and community support in a critical time.",
      image: project7,
      technologies: ["Fuel logistics", "Inventory management"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Army National Guard"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h4 className="text-primary text-sm font-medium mb-2">PORTFOLIO</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">MY PROJECTS</h2>
          <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my recent work spanning web applications, mobile apps, and enterprise solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    {/* <Button size="sm" variant="secondary" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button> */}
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <div className="flex space-x-3 w-full">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </a>
                  </Button>
                  {/* <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button> */}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;