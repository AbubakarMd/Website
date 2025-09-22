import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, MapPin, Send, Star } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const handleWhatsApp = () => {
    window.open("https://wa.me/917973602185", "_blank");
  };

  const handleEmailClick = () => {
    window.open("mailto:collabwithabu@gmail.com", "_blank");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message: " + data.message);
      }
    } catch (error: any) {
      alert("Error sending message: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-secondary/10 to-primary/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your creative vision to life? Let's discuss your
            project and create something amazing together.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Information */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 md:mb-6">
                Get in Touch
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 md:mb-8">
                I'm always excited to work on new projects and collaborate with
                creative minds. Whether you need a complete brand identity, web
                design, or just want to discuss an idea, I'm here to help bring
                your vision to life.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {/* WhatsApp */}
              <Card className="shadow-card border-0 bg-white/80 backdrop-blur-sm hover:shadow-glow transition-all duration-300 group">
                <CardContent className="p-4 md:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary mb-1">
                        WhatsApp
                      </h4>
                      <p className="text-muted-foreground text-sm md:text-base">
                        +91 79736 02185
                      </p>
                    </div>
                    <Button
                      onClick={handleWhatsApp}
                      size="sm"
                      className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary"
                    >
                      Chat Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="shadow-card border-0 bg-white/80 backdrop-blur-sm hover:shadow-glow transition-all duration-300 group">
                <CardContent className="p-4 md:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary mb-1">Email</h4>
                      <p className="text-muted-foreground text-sm md:text-base break-all">
                        collabwithabu@gmail.com
                      </p>
                    </div>
                    <Button
                      onClick={handleEmailClick}
                      size="sm"
                      variant="outline"
                      className="border-secondary text-secondary hover:bg-secondary hover:text-white"
                    >
                      Send Email
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="shadow-card border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">
                        Location
                      </h4>
                      <p className="text-muted-foreground text-sm md:text-base">
                        Available for remote work worldwide
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                <div className="text-lg md:text-2xl font-bold text-primary">
                  24h
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  Response Time
                </div>
              </div>
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                <div className="text-lg md:text-2xl font-bold text-primary flex items-center justify-center gap-1">
                  5 <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  Client Rating
                </div>
              </div>
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                <div className="text-lg md:text-2xl font-bold text-primary">
                  100%
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  Satisfaction
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <Card className="shadow-elegant border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-6">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      className="border-border focus:border-secondary focus:ring-secondary/20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      className="border-border focus:border-secondary focus:ring-secondary/20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                      className="border-border focus:border-secondary focus:ring-secondary/20 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white shadow-glow hover:shadow-elegant transition-all duration-300 hover:scale-105"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>

                <p className="text-xs md:text-sm text-muted-foreground text-center mt-4">
                  Your message will be sent directly to my email for a faster response
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
