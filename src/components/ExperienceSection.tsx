import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Pratt & Whitney",
      period: "02/2023 - 03/2025",
      location: "Columbus, Georgia(REMOTE)",
      description: "Led development of secure analytics and internal monitoring tools for aviation systems using React.js, Next.js, Angular, Vue, and TypeScript, achieving 45.7% faster load times and 32.3% higher user engagement.",
      technologies: ["React.js", "Next.js", "TypeScript", "Dokcer", "CI/CD"]
    },
    {
      title: "Senior Software Engineer", 
      company: "Rx Marketing",
      period: "09/2021 - 10/2022",
      location: "REMOTE",
      description: "Developed fintech and lead management portals using React, Vue, Angular, and TypeScript, increasing conversion rates by 29.4%. ",
      technologies: ["React.js", "Vue", "Angular", "TypeScript"]
    },
    {
      title: "Full Stack Engineer",
      company: "RGR Marketing",
      period: "01/2020 - 07/2021", 
      location: "REMOTE",
      description: "Designed full-stack fintech platforms for credit scoring and lead qualification with React.js, Angular, Vue, Node.js, and .NET Core, increasing qualified leads by 32.7%.  Created scalable REST & GraphQL APIs streamlined with Experian and Plaid, enabling 1M+ monthly validations.",
      technologies: ["Vue.js", "JavaScript", "CSS3", "Git"]
    },
    {
      title: "Backend Engineer",
      company: "Prudential Financial",
      period: "2014 - 2016",
      location: "Georgia",
      description: "Started career building websites and web applications. Learned full-stack development principles and best practices. Contributed to various projects while continuously expanding technical skills.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"]
    },
    
    {
      title: "Petroleum Supply Specialist",
      company: "Army National Guard",
      period: "2016 - Present",
      location: "Puerto Rico",
      description: "Dedicated and mission-focused Petroleum Supply Specialist with nearly a decade of service in the Army National Guard. Experienced in fuel logistics, inventory management, and emergency response operations, particularly in crisis environments",
      technologies: ["Fuel logistics", "Inventory management", "Emergency response operations"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h4 className="text-primary text-sm font-medium mb-2">CAREER PATH</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">MY EXPERIENCE</h2>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
            
            {/* Experience items */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                  
                  {/* Content */}
                  <div className="md:ml-16">
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                            <p className="text-primary font-medium">{exp.company}</p>
                          </div>
                          <div className="flex flex-col md:items-end mt-2 md:mt-0">
                            <div className="flex items-center text-muted-foreground text-sm mb-1">
                              <Calendar className="w-4 h-4 mr-1" />
                              {exp.period}
                            </div>
                            <div className="flex items-center text-muted-foreground text-sm">
                              <MapPin className="w-4 h-4 mr-1" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {exp.description}
                        </p>
                        
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;