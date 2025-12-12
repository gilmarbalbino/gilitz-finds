import { motion } from "framer-motion";
import { Code, Rocket, Star } from "lucide-react";

const AboutSection = () => {
  const skills = [
    { icon: Code, title: "Desenvolvimento", desc: "React, TypeScript, Node.js" },
    { icon: Rocket, title: "Performance", desc: "Otimização e boas práticas" },
    { icon: Star, title: "Design", desc: "UI/UX moderno e responsivo" },
  ];

  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Sobre <span className="text-primary">Mim</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sou um desenvolvedor apaixonado por criar soluções web inovadoras 
            e experiências de usuário memoráveis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 text-center group hover:border-primary/50 transition-colors"
            >
              <skill.icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display font-semibold text-foreground mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
