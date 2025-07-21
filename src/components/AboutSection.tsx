import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import workspaceImg from "@/assets/workspace.jpg";

const AboutSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const aboutSections = [
    {
      title: "Sr. Software Developer",
      content: [
        "Software Developer with 10+ years of experience delivering high-performance, scalable web applications in fintech, e-commerce, healthcare, and other regulated industries.",
        "I have been acknowledged as a solution-focused professional with the ability to design and develop innovative applications using advanced technologies.",
        "I collaborated closely with the application team to develop and implement many full-stack web applications, ensuring optimal functionality, quality and reliability."
      ]
    },
    {
      title: "My Education",
      content: [
        "Full Sail University, Bachelor’s and Master's degree, Computer Science",
        "The study of web design, web content development, client-side/server-side scripting and network security configuration",
        "The study of processes that interact with data and that can be represented as data in the form of programs",
        "The use of algorithms to manipulate, store, and communicate digital information"
      ]
    },
    {
      title: "Free time or Hobbies",
      content: [
        "First of all, I would spend lots of time with my family.",
        "Sometime outside of business, I really enjoy hiking.",
        "I would like to do something to help the less fortunate."
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src={workspaceImg} 
                alt="Professional workspace" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-xl"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            {aboutSections.map((section, index) => (
              <Card key={index} className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {section.title}
                  </h3>
                  <div className="space-y-3">
                    {section.content.map((paragraph, idx) => (
                      <p key={idx} className="text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  
                  {/* Action buttons for each section */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <Button 
                      onClick={() => scrollToSection('projects')}
                      variant="outline" 
                      className="rounded-full"
                    >
                      My Work
                    </Button>
                    <Button 
                      onClick={() => scrollToSection('contact')}
                      variant="outline" 
                      className="rounded-full"
                    >
                      Hire Me
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;