import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Award, ExternalLink } from "lucide-react";
import certificadoUI from '@/assets/certificado_UI.png';
import certificadoFullStack from '@/assets/certificado_EducacionIT.png';
import certificadoCiberseguridad from '@/assets/certificado_ciberseguridad.png';
import certificadoMET from '@/assets/certificado_MET.png';
import certificadoAI from '@/assets/certificado_AI.png';


const certificatesData = [
  {
    title: "Full Stack Web Development",
    issuer: "Educación IT - Fundación Pescar - L'oreal Fund for Women - Fundación Karuna",
    date: "August 2025 - December 2025",
    description: "More than 300 hours on technical and professional skills development, including HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, Git, Agile methodologies, and soft skills training.",
    image: certificadoFullStack, 
    credentialUrl: "https://www.linkedin.com/in/razzolinik/details/education/",
  },
  {
    title: "User Interface Design: UI",
    issuer: "Secretaría de Innovación, Ciencia y Tecnología",
    date: "November 2025",
    description: "Comprehensive training in user interface design principles, tools, and best practices to create engaging and user-friendly digital experiences.",
    image: certificadoUI,
    credentialUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7396251381193408512/",
  },
  {
    title: "Cybersecurity",
    issuer: "IBM Skillsbuild",
    date: "October 2025 - January 2026",
    description: "Fundamental concepts of cybersecurity, including threat detection, risk management, and best practices to protect digital assets and information.",
    image: certificadoCiberseguridad,
    credentialUrl: "https://www.credly.com/badges/c72bf91b-8ec9-4a61-8c89-1d195927b7f9/public_url",
  },
  {
    title: "English C1 Certificate",
    issuer: "MET - Michigan English Test by Cambridge",
    date: "2022",
    description: "Certification demonstrating advanced proficiency in English language skills, including reading, writing, listening, and speaking.",
    image: certificadoMET,
    credentialUrl: "https://www.linkedin.com/in/razzolinik/details/certifications/",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM Skillsbuild",
    date: "September 2025",
    description: "Introduction to artificial intelligence concepts, applications, and ethical considerations in modern technology.",
    image: certificadoAI,
    credentialUrl: "https://www.credly.com/badges/622a1c46-02de-4a60-ac36-6d70c0546ec1/public_url",
  },
];

const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificates" className="py-24 relative grid-bg" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-secondary">{'<'}</span>
            <span className="text-primary glow-text">Certificates & Achievements</span>
            <span className="text-secondary">{' />'}</span>
          </h2>
          <p className="text-muted-foreground text-lg">Professional certifications</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <Carousel className="w-full">
            <CarouselContent>
              {certificatesData.map((cert, index) => (
                <CarouselItem key={index}>
                  <div className="terminal-window p-8 pixel-border-hover">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Image Preview */}
                      <div className="relative group overflow-hidden border-2 border-primary/50 hover:border-primary transition-colors">
                        <div className="aspect-[4/3] bg-muted relative">
                          {cert.image ? (
                            <img
                              src={cert.image}
                              alt={`${cert.title} certificate`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              onError={(e) => {
                                // Fallback si la imagen no carga
                                const img = e.currentTarget as HTMLImageElement;
                                img.style.display = 'none';
                                const fallback = img.parentElement?.querySelector('.fallback-icon') as HTMLElement | null;
                                if (fallback) {
                                  fallback.style.display = 'flex';
                                }
                              }}
                            />
                          ) : null}
                          
                          {/* Fallback icon */}
                          <div className="fallback-icon absolute inset-0 flex items-center justify-center bg-primary/10" style={{ display: cert.image ? 'none' : 'flex' }}>
                            <Award className="w-20 h-20 text-primary/50" />
                          </div>
                          
                          {/* Overlay on hover */}
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white font-mono text-sm">View Certificate</span>
                          </div>
                        </div>
                        
                        {cert.credentialUrl && (
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-4 right-4 p-2 bg-primary text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/90"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                      
                      {/* Certificate Info */}
                      <div className="flex flex-col justify-between">
                        <div>
                          <div className="flex items-start gap-3 mb-4">
                            <div className="p-3 bg-primary/20 border-2 border-primary flex-shrink-0">
                              <Award className="w-8 h-8 text-primary" />
                            </div>
                            
                            <div className="flex-1">
                              <h3 className="text-xl lg:text-2xl font-bold text-primary mb-2 glow-text">
                                {cert.title}
                              </h3>
                              <div className="text-secondary font-mono text-xs lg:text-sm mb-1">
                                {cert.issuer}
                              </div>
                            </div>
                          </div>
                          
                          <div className="text-muted-foreground text-sm mb-4 font-mono">
                            <span className="text-secondary">// </span>Issued: {cert.date}
                          </div>
                          
                          <p className="text-foreground/80 leading-relaxed text-sm lg:text-base">
                            {cert.description}
                          </p>
                        </div>
                        
                        {cert.credentialUrl && (
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-2 text-primary hover:text-primary/80 font-mono text-sm transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>View Credential</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-2 border-primary bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="border-2 border-primary bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;