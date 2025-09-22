import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import about from "@/assets/about-me.png";

const About = () => {
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

  const journeySteps = [
    { year: "2020", title: "Intrest in Designing", description: "Started to play with Design and Creativity" },
    { year: "2021", title: "Worked For BiggBoss", description: "Got First Big Oppurtunity to explore" },
    { year: "2024", title: "Joined Robochamps as Intern", description: "Start of my Corporate life, Kept learning" },
    { year: "2025", title: "working as Graphic designer Associate", description: "Creafting diffrent visuals for Website and Application" }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About & <span className="text-gradient">Intro</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey in design is driven by passion for creating meaningful visual experiences that connect with people on an emotional level.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Journey Timeline */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h3 className="text-2xl font-semibold text-primary mb-8">My Professional Journey</h3>
            <div className="space-y-6">
              {journeySteps.map((step, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 group"
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-secondary rounded-full shadow-glow group-hover:scale-125 transition-transform duration-300"></div>
                    {index < journeySteps.length - 1 && (
                      <div className="w-0.5 h-16 bg-gradient-to-b from-secondary to-accent/30 mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                        {step.year}
                      </span>
                      <h4 className="text-lg font-semibold text-primary">{step.title}</h4>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* About Card */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <Card className="shadow-elegant border-0 bg-gradient-to-br from-white to-secondary/5">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  {/* Circle with gradient border and image inside */}
                  <div className="w-32 h-32 rounded-full p-1 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary shadow-glow animate-float">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img
                        src={about}
                        alt="Abu"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Abu</h3>
                  <p className="text-secondary font-medium">Graphic Designer</p>
                </div>
                
                <div className="space-y-4 text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    With years of experience in visual design, I specialize in creating compelling brand identities, 
                    digital experiences, and creative solutions that drive results.
                  </p>
                  
                  <div className="flex justify-center gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-sm text-muted-foreground">Projects</div>
                    </div>
                    <div className="w-px bg-border mx-4"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">5+</div>
                      <div className="text-sm text-muted-foreground">Years</div>
                    </div>
                    <div className="w-px bg-border mx-4"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">30+</div>
                      <div className="text-sm text-muted-foreground">Clients</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
