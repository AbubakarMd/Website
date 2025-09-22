import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Building, Users, TrendingUp } from "lucide-react";

const WorkExperience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const workData = [
    {
      position: "Senior Creative Director",
      company: "Design Studio Pro",
      period: "2022 - Present",
      description: "Leading creative teams and managing high-profile client projects",
      icon: TrendingUp,
      progress: 95,
      achievements: ["Led 20+ successful campaigns", "Managed team of 8 designers", "Increased client satisfaction by 40%"]
    },
    {
      position: "Art Director",
      company: "Creative Agency",
      period: "2020 - 2022",
      description: "Developing visual concepts and brand identities for various clients",
      icon: Building,
      progress: 88,
      achievements: ["Created 50+ brand identities", "Won 3 design awards", "Mentored junior designers"]
    },
    {
      position: "Senior Graphic Designer",
      company: "Marketing Firm",
      period: "2018 - 2020",
      description: "Creating visual content for digital and print media campaigns",
      icon: Briefcase,
      progress: 82,
      achievements: ["Designed 100+ marketing materials", "Improved brand consistency", "Collaborated with marketing team"]
    },
    {
      position: "Freelance Designer",
      company: "Self-Employed",
      period: "2016 - 2018",
      description: "Working with startups and small businesses on various design projects",
      icon: Users,
      progress: 75,
      achievements: ["Served 25+ clients", "Built strong portfolio", "Developed business skills"]
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and the experiences that shaped my creative expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {workData.map((work, index) => {
            const Icon = work.icon;
            return (
              <Card 
                key={index}
                className={`shadow-elegant border-0 bg-gradient-to-br from-white to-primary/5 hover:shadow-glow transition-all duration-500 hover:scale-105 group ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.15 * index}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-1">{work.position}</h3>
                      <p className="text-secondary font-medium mb-1">{work.company}</p>
                      <p className="text-sm text-muted-foreground mb-3">{work.period}</p>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {work.description}
                      </p>
                      
                      {/* Achievements */}
                      <div className="space-y-2 mb-6">
                        {work.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Experience Level Progress */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-primary">Experience Level</span>
                          <span className="text-sm font-medium text-secondary">{work.progress}%</span>
                        </div>
                        <div className="w-full bg-border rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: isVisible ? `${work.progress}%` : '0%',
                              transitionDelay: `${0.5 + 0.1 * index}s`
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;