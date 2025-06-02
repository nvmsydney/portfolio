
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Conversational UAV",
      description: "An autonomous UAV system capable of interpreting natural language commands for real-time navigation and mission planning, enabling applications in public safety.",
      image: "/uav.png",
      technologies: ["Python", "LangChain", "Streamlit", "GPT-4"],
      githubUrl: "https://github.com/vcu-swim-lab/conversational_uav_explorer"
    },
    {
      id: 2,
      title: "Reptile LLM",
      description: "Llama2 powered system to extract and classify reptile traits from scientific literature, accelerating data entry for the world's most comprehensive reptile database.",
      image: "/reptileDB.png",
      technologies: ["Python", "LangChain", "Llama2"],
      githubUrl: "https://github.com/vcu-swim-lab/reptileDB-llm"
    },
    {
      id: 3,
      title: "Thrifty",
      description: "A full-stack marketplace web application where users can list clothing items for sale, browse listings, and share their daily outfits. Combines social interaction with secondhand fashion.",
      image: "/thrifty.jpeg",
      technologies: ["TypeScript", "React", "PHP", "MySQL"],
      githubUrl: "https://github.com/nvmsydney/thrifty"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group bg-card border-border overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-xs rounded-md text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary/20 hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
