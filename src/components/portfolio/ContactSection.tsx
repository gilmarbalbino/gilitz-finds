import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const socials = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/gilmarbalbino" },
    { icon: Mail, label: "Email", href: "mailto:gilmarbalbino800@gmail.com" },
  ];

  return (
    <section id="contato" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Vamos <span className="text-primary">Conversar</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Interessado em trabalhar juntos? Entre em contato!
          </p>

          <Button variant="cosmic" size="lg" asChild>
            <a href="mailto:seuemail@exemplo.com">
              Enviar Mensagem
            </a>
          </Button>

          <div className="flex justify-center gap-6 mt-12">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
