import { motion } from "framer-motion";
import heroBanner from "@/assets/hero-banner.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-secondary text-sm mb-4 font-mono"
            >
              {'> Hello World_'}
            </motion.div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-4">
              <span className="text-foreground">I'm </span>
              <span className="text-primary glow-text">Khiara Razzolini</span>
            </h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-xl lg:text-2xl text-muted-foreground mb-6 font-mono"
            >
              {'<Fullstack Web Developer />'}
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-lg text-foreground/80 mb-8 leading-relaxed"
            >
              You can also call me Kiki, I'm Fullstack Developer who bridges the gap between frontend magic and backend logic. 
              Currently completing my Computer Programming degree in Argentina, I don't just write code; I turn complex ideas into intuitive, digital reality—fueled by curiosity (and Coke Zero)
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex gap-4"
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-primary text-primary-foreground pixel-border pixel-border-hover font-bold hover:bg-primary/90 transition-all"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-secondary text-secondary pixel-border-hover hover:bg-secondary/10 transition-all font-bold"
              >
                Get in Touch
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="mt-8 text-sm text-muted-foreground"
            >
              📍 Argentina • Remote Work Available
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="terminal-window overflow-hidden animate-pulse-glow">
              <div className="bg-muted/50 px-4 py-2 flex items-center gap-2 border-b-2 border-primary">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <div className="w-3 h-3 rounded-full bg-secondary"></div>
                <div className="w-3 h-3 rounded-full bg-foreground/30"></div>
                <span className="ml-4 text-xs text-muted-foreground font-mono">~/developer/khiara</span>
              </div>
              <img
                src={heroBanner}
                alt="Khiara Razzolini - Fullstack Developer"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
