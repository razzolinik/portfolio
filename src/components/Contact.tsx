import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-secondary">{'<'}</span>
            <span className="text-primary glow-text">Get In Touch</span>
            <span className="text-secondary">{' />'}</span>
          </h2>
          <p className="text-muted-foreground text-lg">Let's build something amazing together</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto terminal-window p-8 pixel-border-hover"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 border-2 border-primary">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Email</h3>
                  <a
                    href="mailto:khiararazzolini@gmail.com"
                    className="text-secondary hover:text-primary transition-colors font-mono text-sm"
                  >
                    khiararazzolini@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 border-2 border-primary">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Location</h3>
                  <p className="text-foreground/80 text-sm">Argentina</p>
                  <p className="text-muted-foreground text-sm">Remote Work Available</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 border-2 border-primary">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">GitHub</h3>
                  <a
                    href="https://github.com/razzolinik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-primary transition-colors font-mono text-sm"
                  >
                    @razzolinik
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 border-2 border-primary">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/razzolinik/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-primary transition-colors font-mono text-sm"
                  >
                    razzolinik
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t-2 border-primary/30 text-center">
            <p className="text-foreground/80 mb-4">
              Available for freelance projects and full-time opportunities
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:khiararazzolini@gmail.com"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground pixel-border pixel-border-hover font-bold hover:bg-primary/90 transition-all"
            >
              Send a Message
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
