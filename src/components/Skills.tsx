import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
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

  const skills = [
    { name: "Branding", percentage: 95, color: "from-primary to-secondary" },
    { name: "Web Design", percentage: 88, color: "from-secondary to-accent" },
    { name: "Digital Graphics", percentage: 90, color: "from-accent to-primary" },
    { name: "Print Media", percentage: 75, color: "from-primary to-accent" }
  ];

  const CircularProgress = ({ percentage, size = 120, strokeWidth = 8, color }: any) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative inline-flex items-center justify-center">
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="hsl(var(--border))"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#gradient)"
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={isVisible ? offset : circumference}
            className="transition-all duration-2000 ease-out"
            style={{ transitionDelay: "0.5s" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-primary">{percentage}%</span>
        </div>
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technical expertise and creative abilities that drive exceptional design solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className={`text-center shadow-elegant border-0 bg-gradient-to-br from-white to-secondary/5 hover:shadow-glow transition-all duration-500 hover:scale-105 group ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardContent className="p-8">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CircularProgress 
                    percentage={skill.percentage} 
                    color={skill.color}
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{skill.name}</h3>
                <div className="w-full bg-border rounded-full h-2 mb-2">
                  <div 
                    className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                    style={{ 
                      width: isVisible ? `${skill.percentage}%` : '0%',
                      transitionDelay: `${0.5 + 0.1 * index}s`
                    }}
                  ></div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {skill.percentage >= 90 ? 'Expert Level' : 
                   skill.percentage >= 80 ? 'Advanced Level' : 
                   'Proficient Level'}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos */}
        <div className={`mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Trusted by Amazing Clients</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'RoboChamps', logo: 'https://kidpreneur.robochamps.in/wp-content/uploads/2023/09/robochamps-logo-01-e1696062909864.png' },
              { name: 'Colors TV', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Colors_TV_logo.svg' },
              { name: 'HealthMug', logo: 'https://play-lh.googleusercontent.com/EuOzmdPI1mNduCHndT13_8L16-Q9rQltNGnOszPFrawqeZvnhm8YoC4h5_MpufMMH6F_=w600-h300-pc0xffffff-pd' },
              { name: 'Dr.Reckeweg', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Reckeweg_Flasche.png' },
              { name: 'Dabur', logo: 'https://www.logo.wine/a/logo/Dabur/Dabur-Logo.wine.svg' },
              { name: 'Himalaya Wellness', logo: 'https://cdn.shopify.com/s/files/1/0272/4714/9155/files/logo-aboutus.png?1207' }
            ].map((client, index) => (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 relative"
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="w-full h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-md text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {client.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;