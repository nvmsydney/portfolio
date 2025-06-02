import { Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen pt-20 flex items-center justify-center px-6"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30 flex items-center justify-center overflow-hidden">
              <img
                src="/pfp.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="gradient-text">Sydney Nguyen</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-light">
                Software Engineer
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                I enjoy working across the entire development stack, from
                front-end and back-end to AI/ML integration and cloud-based
                systems. I focus on building scalable, reliable applications
                that deliver real-world impact.
              </p>
            </div>

            <div className="flex flex-row flex-wrap items-center justify-center lg:justify-start gap-4 pt-8">
              <a
                href="https://linkedin.com/in/sydneyl-nguyen"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/nvmsydney"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://your-resume-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
