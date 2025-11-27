import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projectsData = [
  {
    title: "Tu Volkswagen hoy :: Volkswagen Sales Advisor Platform",
    description: "Web page solution with React, Node.js, Tailwind and Typescript. Features include vehicle catalog, contact forms and product information. Domain setup and deployment included with Vercel.",
    tech: ["React", "Node.js", "MongoDB", "TypeScript", "TailwindCSS", "Vercel"],
    github: "https://github.com/razzolinik/razzolini-vw",
    demo: "https://razzoliniventas.com/",
  },
  {
    title: "Wisteria :: Small Bussiness Welcome Site",
    description: "Landing page for a small business using React, TailwindCSS and TypeScript. Showcases services, portfolio, and contact information with responsive design. Deployed on Netlify.",
    tech: ["TypeScript", "React", "TailwindCSS", "Netlify"],
    github: "https://github.com/razzolinik/wisteria-tiendadeco",
    demo: "https://wisteriatienda.netlify.app/",
  },
  {
    title: "FastNotes :: Java EE Note Taking App",
    description: "A full-featured note-taking web application built with Java EE, JSP, and Servlets. Features user login, CRUD operations for notes, rich text.",
    tech: ["Java EE", "JSP", "Servlets", "MySQL", "GlassFish"],
    github: "https://github.com/razzolinik/FastNotes",
    demo: "https://github.com/razzolinik/FastNotes",
  },
  {
    title: "Interactive Curriculum Viewer for my degree program",
    description: "A web application that allows students to explore and visualize their curriculum interactively. Built with Javascript, HTML and CSS, featuring dynamic course maps and progress tracking.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/razzolinik/MallaInteractivaPUI",
    demo: "https://razzolinik.github.io/MallaInteractivaPUI/",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-secondary">{'<'}</span>
            <span className="text-primary glow-text">Featured Projects</span>
            <span className="text-secondary">{' />'}</span>
          </h2>
          <p className="text-muted-foreground text-lg">Some of my recent work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="terminal-window overflow-hidden pixel-border-hover group"
            >
              <div className="bg-muted/50 px-4 py-2 flex items-center gap-2 border-b-2 border-primary">
                <div className="w-3 h-3 rounded-full bg-primary group-hover:animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-secondary group-hover:animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-foreground/30"></div>
                <span className="ml-4 text-xs text-muted-foreground font-mono">
                  {project.title.toLowerCase().replace(/\s+/g, '-')}.html
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-3 glow-text">
                  {project.title}
                </h3>
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary/20 text-secondary border border-secondary text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary text-primary hover:bg-primary/30 transition-colors text-sm font-mono"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-secondary/20 border border-secondary text-secondary hover:bg-secondary/30 transition-colors text-sm font-mono"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
