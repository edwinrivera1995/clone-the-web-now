import { Linkedin, Github, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/edwin-rivera-11ba972a",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/edwinrivera1995",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      label: "Facebook",
      href: "https://www.facebook.com/",
    },
  ];

  return (
    <section
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <div className="max-w-4xl mx-auto">
          {/* Name Badge */}
          <div className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium mb-6">
            Edwin Rivera
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            SR. SOFTWARE DEVELOPER
          </h1>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                className="rounded-full bg-transparent hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href={social.href} aria-label={social.label}>
                  {social.icon}
                </a>
              </Button>
            ))}
          </div>

          {/* Contact Info */}
          <div className="bg-glass-bg backdrop-blur-glass border border-glass-border rounded-xl p-6 max-w-md mx-auto">
            <div className="space-y-3 text-left">
              <div className="flex justify-between">
                <span className="text-gray-300">Name:</span>
                <span className="text-white">Edwin Rivera</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Address:</span>
                <span className="text-white">Ephrata, Pennsylvania</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">E-mail:</span>
                <span className="text-white">edwinrivera19955@gmail.com</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-primary hover:bg-tech-dark text-primary-foreground px-8 py-3 rounded-full"
            >
              My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-full"
            >
              Hire Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
