import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";

const Portfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative z-10"
    >
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      
      <footer className="py-8 text-center text-muted-foreground text-sm">
        <p>© 2024 Gilmar Balbino. Todos os direitos reservados.</p>
      </footer>
    </motion.div>
  );
};

export default Portfolio;
