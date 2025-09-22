import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";
import profileImage from "@/assets/profile-image2.png";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsApp = () => {
    window.open("https://wa.me/917973602185", "_blank");
  };

  const handleEmail = () => {
    window.open("mailto:Collabwithabu@gmail.com", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-24 md:pt-32">
        {/* Left Content */}
        <div
          className={`text-left text-white transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2
            className="text-lg md:text-xl font-light mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Hello, I'm
          </h2>
          <h1
  className="text-3xl md:text-5xl font-bold px-4 py-2 inline-block bg-white text-blue-600 rounded animate-slide-in-left"
  style={{ animationDelay: "0.4s" }}
>
  Md Abubakar
</h1>

        <h1
  className="mb-6 font-bold leading-tight animate-glow"
  style={{ animationDelay: "0.4s" }}
>
  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl block">
    Graphic
  </span>
  <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gradient bg-gradient-to-r from-white to-white/70 block">
    Designer
  </span>
</h1>


          <p
            className="text-lg md:text-xl font-light mb-8 max-w-2xl animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            Transforming ideas into stunning visual experiences that captivate
            and inspire
          </p>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-4 mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.7s" }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">
                50+
              </div>
              <div className="text-sm md:text-base text-white/80">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">
                5+
              </div>
              <div className="text-sm md:text-base text-white/80">Years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">
                30+
              </div>
              <div className="text-sm md:text-base text-white/80">Clients</div>
            </div>
          </div>

          {/* Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white shadow-glow transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Let's Chat on WhatsApp
            </Button>

            <Button
              onClick={handleEmail}
              variant="outline"
              size="lg"
  className="border-white/30 text-blue-500 hover:bg-white/10 backdrop-blur-md shadow-elegant transition-all duration-300 hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Me
            </Button>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div
          className={`relative transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
          style={{ animationDelay: "0.5s" }}
        >
          <div className="relative w-full max-w-md mx-auto">
            {/* Background shape with top rounded only */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-t-full rounded-b-none"></div>

            {/* Profile Image */}
            <img
              src={profileImage}
              alt="Abu - Graphic Designer"
              className="relative z-10 w-full h-auto object-cover -mt-10 shadow-2xl"
              style={{ borderRadius: "50% 50% 0 0", animation: "none" }}
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full">
          <div className="w-1 h-3 bg-white/50 rounded-full mx-auto mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
