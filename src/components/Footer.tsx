import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t-2 border-primary bg-background">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground text-sm font-mono flex items-center justify-center gap-2">
          <span>Built with</span>
          <Heart className="w-4 h-4 text-primary fill-primary" />
            <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
            >
            by Khiara Razzolini
            </a>
            <span className="text-primary">•</span>
            <span>{new Date().getFullYear()}</span>
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2 font-mono">
            {'<Powered by React + TypeScript + Tailwind />'}
          </p>
          </div>
        </footer>
        );
      };

      export default Footer;
