import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillsData = {
  Frontend: ["React.js", "TypeScript", "JavaScript", "Tailwind", "Vite", "UI/UX"],
  Backend: ["Node.js", "Java", "MongoDB", "MySQL"],
  "Tools & Others": [
    "Git",
    "Github",
    "C",
    "Cybersecurity",
    "Prompt Engineering",
    "Leadership",
    "Agile Methodologies",
  ],
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative grid-bg" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-secondary">{'<'}</span>
            <span className="text-primary glow-text">Skills & Expertise</span>
            <span className="text-secondary">{' />'}</span>
          </h2>
          <p className="text-muted-foreground text-lg">My technical arsenal</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="terminal-window p-6 pixel-border-hover"
            >
              <div className="bg-muted/30 px-4 py-2 -mx-6 -mt-6 mb-6 border-b-2 border-primary">
                <h3 className="text-xl font-bold text-primary glow-text">{category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 bg-primary/20 text-foreground border border-primary text-sm font-mono hover:bg-primary/30 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
