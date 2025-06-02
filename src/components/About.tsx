const About = () => {
  const skills = [
    "Python",
    "Java",
    "TypeScript",
    "SQL",
    "React",
    "React Native",
    "Next.js",
    "LangChain",
    "PyTorch",
    "Azure",
    "AWS",
    "Docker"
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Software Engineer currently pursuing my M.S. in Computer
              Science with a focus on Artificial Intelligence and Machine
              Learning at UT Austin. I’m driven by the potential of intelligent
              systems to solve real-world problems, from UAVs in public safety
              to LLMs in conservation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, reading a good book,
              hanging out with my two dogs and two cats, or traveling!
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="px-4 py-2 bg-secondary rounded-lg text-center transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
