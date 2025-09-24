import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Eye, Calendar, Tag } from "lucide-react";
import Project1 from "@/assets/projects/project1.png";
import Project2 from "@/assets/projects/project2.png";
import Project3 from "@/assets/projects/project3.png";
import Project4 from "@/assets/projects/project4.png";
import Project5 from "@/assets/projects/project5.png";
import Project6 from "@/assets/projects/project6.png";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
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

  const projects = [
    {
      id: 1,
      title: "Brand Identity Design",
      category: "Branding",
      year: "2024",
      description: "Complete brand identity design for a tech startup including logo, color palette, and brand guidelines.",
      fullDescription: "This comprehensive brand identity project involved creating a modern, memorable brand for a fintech startup. The project included extensive market research, competitor analysis, logo design iterations, color psychology application, typography selection, and comprehensive brand guidelines. The final identity successfully positioned the company as trustworthy yet innovative in the competitive fintech space.",
      image: Project1,
      tools: ["Adobe Illustrator", "Figma", "Photoshop"],
      client: "TechStart Inc.",
      duration: "6 weeks"
    },
    {
      id: 2,
      title: "Packeging Design",
      category: "Branding",
      year: "2024",
      description: "Modern e-commerce platform design with focus on user experience and conversion optimization.",
      fullDescription: "Designed a complete e-commerce experience for a fashion retailer, focusing on mobile-first approach and conversion optimization. The project involved user journey mapping, wireframing, prototyping, and creating a design system that increased conversion rates by 35%. Special attention was paid to product photography guidelines and checkout flow optimization.",
      image: Project2,
      tools: ["Figma", "Adobe XD", "Principle"],
      client: "Fashion Forward",
      duration: "8 weeks"
    },
    {
      id: 3,
      title: "Mobile App Interface",
      category: "UI/UX Design",
      year: "2023",
      description: "Intuitive mobile app design for a fitness tracking application with gamification elements.",
      fullDescription: "Created an engaging mobile app interface for a fitness tracking application that incorporates gamification elements to increase user engagement. The design process included user research, persona development, user flow mapping, and iterative prototyping. The final design achieved a 4.8-star rating on app stores and increased daily active users by 50%.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      tools: ["Sketch", "InVision", "Zeplin"],
      client: "FitLife App",
      duration: "10 weeks"
    },
    {
      id: 4,
      title: "Corporate Presentation Design",
      category: "Presentation",
      year: "2023",
      description: "Professional presentation design for corporate executives and investor meetings.",
      fullDescription: "Developed a comprehensive presentation template system for a Fortune 500 company, including slide templates, icon libraries, and animation guidelines. The presentations were designed to communicate complex financial data clearly while maintaining brand consistency. The template system was adopted company-wide and improved presentation quality across all departments.",
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=400&fit=crop",
      tools: ["PowerPoint", "Keynote", "After Effects"],
      client: "Global Corp",
      duration: "4 weeks"
    },
    {
      id: 5,
      title: "Social Media Campaign",
      category: "Digital Marketing",
      year: "2023",
      description: "Comprehensive social media visual campaign for product launch across multiple platforms.",
      fullDescription: "Created a cohesive visual campaign for a major product launch across Instagram, Facebook, Twitter, and LinkedIn. The campaign included animated posts, stories templates, video thumbnails, and banner designs. The campaign generated 2M+ impressions and increased brand engagement by 120% during the launch period.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tools: ["After Effects", "Photoshop", "Canva Pro"],
      client: "InnovateTech",
      duration: "3 weeks"
    },
    {
      id: 6,
      title: "Push Notification Design",
      category: "Performance Marketing",
      year: "2022",
      description: "Complete visual identity for a premium restaurant including menu design and interior graphics.",
      fullDescription: "Designed a complete brand identity for a farm-to-table restaurant, including logo design, menu layouts, signage, packaging, and interior graphics. The design emphasized the restaurant's commitment to sustainability and local sourcing through earthy colors and organic shapes. The rebrand resulted in a 40% increase in customer visits and positive media coverage.",
      image: Project6,
      tools: ["Illustrator", "InDesign", "Photoshop"],
      client: "Green Table Restaurant",
      duration: "12 weeks"
    }
  ];

  const handleBehanceClick = () => {
    window.open("https://behance.net/abu-designer", "_blank");
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-accent/5 to-secondary/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my creative work and the projects that define my design journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className={`group cursor-pointer overflow-hidden border-0 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 bg-white/90 backdrop-blur-sm ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.1 * index}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button 
                      size="sm" 
                      className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white"
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-secondary/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Behance Button */}
        <div className={`text-center mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button 
            onClick={handleBehanceClick}
            className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white shadow-glow hover:shadow-elegant transition-all duration-300 hover:scale-105"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View Full Portfolio on Behance
          </Button>
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-primary mb-4">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              
                <div className="space-y-6">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                
                {/* Additional Project Images */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop" 
                    alt="Project detail 1"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop" 
                    alt="Project detail 2"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=300&h=200&fit=crop" 
                    alt="Project detail 3"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Project Overview</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedProject.fullDescription}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                        <Tag className="h-4 w-4" />
                        Project Details
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div><strong>Client:</strong> {selectedProject.client}</div>
                        <div><strong>Duration:</strong> {selectedProject.duration}</div>
                        <div><strong>Year:</strong> {selectedProject.year}</div>
                        <div><strong>Category:</strong> {selectedProject.category}</div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Tools Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tools.map((tool: string, index: number) => (
                          <span 
                            key={index}
                            className="bg-secondary/10 text-secondary px-2 py-1 rounded text-xs"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;