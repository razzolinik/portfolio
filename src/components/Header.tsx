import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b-2 border-primary bg-background/95 backdrop-blur-sm"
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold text-primary glow-text"
        >
          {'<KR />'}
        </motion.div>
        
        <div className="flex items-center gap-6">
          <a
            href="#about"
            className="text-foreground hover:text-primary transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-foreground hover:text-primary transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#certificates"
            className="text-foreground hover:text-primary transition-colors duration-300"
          >
            Certificates
          </a>
          <a
            href="#contact"
            className="text-foreground hover:text-primary transition-colors duration-300"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            href="https://github.com/razzolinik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: -5 }}
            href="https://www.linkedin.com/in/razzolinik/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="mailto:khiararazzolini@gmail.com"
            className="text-foreground hover:text-primary transition-colors"
          >
            <Mail size={20} />
          </motion.a>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
