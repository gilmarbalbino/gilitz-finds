import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6 max-w-3xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/50 shadow-lg shadow-primary/20">
              <img
                src={profilePhoto}
                alt="Gilmar Balbino"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-pulse" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-display tracking-widest"
        >
          DESENVOLVEDOR WEB
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-5xl md:text-7xl font-display font-bold text-foreground"
        >
          Gilmar <span className="text-primary text-glow-cyan">Balbino</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-muted-foreground max-w-xl mx-auto"
        >
          Criando experiências digitais incríveis através do código. 
          Transformando ideias em realidade, uma linha de cada vez.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex gap-4 justify-center pt-4"
        >
          <a
            href="#projetos"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Ver Projetos
          </a>
          <a
            href="#contato"
            className="px-6 py-3 border border-primary/50 text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
          >
            Contato
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
