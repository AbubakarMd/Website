import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, ExternalLink, Heart } from "lucide-react";

const Footer = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/917973602185", "_blank");
  };

  const handleEmail = () => {
    window.open("mailto:Collabwithabu@gmail.com", "_blank");
  };

  const handleBehance = () => {
    window.open("https://behance.net/abu-designer", "_blank");
  };

  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-bold mb-4">
              Abu
              <span className="block text-secondary text-lg font-medium">Creative Director</span>
            </h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Transforming ideas into stunning visual experiences that captivate and inspire. 
              Let's create something amazing together.
            </p>
            <div className="flex gap-4">
              <Button 
                onClick={handleWhatsApp}
                size="sm"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30"
              >
                <MessageCircle className="h-4 w-4" />
              </Button>
              <Button 
                onClick={handleEmail}
                size="sm"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30"
              >
                <Mail className="h-4 w-4" />
              </Button>
              <Button 
                onClick={handleBehance}
                size="sm"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30"
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Education', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-white/80 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div>
                <p className="text-white/60 text-sm">WhatsApp</p>
                <p className="text-white">+91 79736 02185</p>
              </div>
              <div>
                <p className="text-white/60 text-sm">Email</p>
                <p className="text-white">Collabwithabu@gmail.com</p>
              </div>
              <div>
                <p className="text-white/60 text-sm">Portfolio</p>
                <button 
                  onClick={handleBehance}
                  className="text-white hover:text-secondary transition-colors duration-300"
                >
                  View on Behance
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 Abu. All rights reserved.
            </p>
            <p className="text-white/60 text-sm flex items-center gap-1">
              Made with <Heart className="h-4 w-4 fill-red-500 text-red-500" /> for creative minds
            </p>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="mt-12 bg-gradient-to-r from-secondary to-accent rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Let's discuss your vision and create something extraordinary together. 
            I'm just a message away!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleWhatsApp}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-glow"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start WhatsApp Chat
            </Button>
            <Button 
              onClick={handleEmail}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;