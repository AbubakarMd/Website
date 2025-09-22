import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const Education = () => {
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

  const educationData = [
    {
      degree: "Master's in Computer Applications",
      institution: "Lovely Professional University",
      year: "2022-2024",
      icon: GraduationCap
    },
    {
      degree: "Bachelor's in Computer Applications", 
      institution: "Jamia Hamdard University",
      year: "2019-2022",      
      icon: BookOpen
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-gradient-to-br from-secondary/5 to-accent/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My educational background in design
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {educationData.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <Card 
                key={index}
                className={`shadow-card border-0 bg-white/80 backdrop-blur-sm hover:shadow-glow transition-all duration-500 hover:scale-105 group ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-primary">{edu.degree}</h3>
                      <p className="text-secondary font-medium text-sm">{edu.institution} • {edu.year}</p>
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

export default Education;