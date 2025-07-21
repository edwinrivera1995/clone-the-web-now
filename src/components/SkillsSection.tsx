import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const mobileSkills = [
    { name: "React Native (iOS & Android)", level: 95 },
    { name: "Expo", level: 80 },
    { name: "Zustand", level: 85 },
    { name: "Redux", level: 85 },
    { name: "React Navigation", level: 85 },
    { name: "UI/UX & Accessibility Best Practices", level: 80 },
  ];

  const frontendSkills = [
    { name: "ReactJS", level: 90 },
    { name: "VueJS", level: 85 },
    { name: "Redux", level: 90 },
    { name: "MaterialUI", level: 85 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "NextJS", level: 83 },
    { name: "Angular", level: 78 },
  ];

  const backendSkills = [
    { name: "NodeJS", level: 90 },
    { name: "Express", level: 85 },
    { name: "Django", level: 80 },
    { name: "Flask", level: 85 },
    { name: "Java (Spring Boot)", level: 80 },
    { name: "RESTful API", level: 75 },
    { name: "ASP.NET", level: 75 },
    { name: "Ruby on Rails", level: 75 },
  ];

  const devOpsSkills = [
    { name: "GitLab CI", level: 90 },
    { name: "GitHub Actions", level: 85 },
    { name: "Docker", level: 80 },
    { name: "Kubernetes", level: 85 },
    { name: "AWS CodeDeploy", level: 80 },
    { name: "Azure DevOps", level: 75 },
  ];

  const databases = [
    "MongoDB", "MySql", "PostgreSQL", "Oracle", "SQLite"
  ];

  const projectTools = [
    "Agile", "Scrum", "Git & BitBucket", "Jenkins", "Jira"
  ];

  const cloudServices = [
    "Amazon EC2", "Amazon S3", "Amazon Lambda", "Firebase", 
    "Google Map API", "DigitalOcean", "Heroku", "DynamoDB", 
    "DocumentDB", "Netlify", "cPanel"
  ];

  const SkillBar = ({ skill }: { skill: { name: string; level: number } }) => (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <Progress value={skill.level} className="h-2" />
    </div>
  );

  const SkillList = ({ title, items }: { title: string; items: string[] }) => (
    <Card>
      <CardHeader>
        <CardTitle className="text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {items.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h4 className="text-primary text-sm font-medium mb-2">WHAT I DO</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">MY SKILLS</h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Frontend Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Front-end Development</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </CardContent>
          </Card>

          {/* Backend Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Back-End Development</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {backendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </CardContent>
          </Card>
          
          {/* Mobile Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Mobile Development</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {mobileSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </CardContent>
          </Card>
          
          {/* DevOps Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">DevOps & CI/CD</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {devOpsSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Other Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillList title="Databases" items={databases} />
          <SkillList title="Project Tools" items={projectTools} />
          <SkillList title="Cloud Services" items={cloudServices} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
