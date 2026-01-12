import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Projeto Alpha",
      description: "Aplicação web moderna com React e TypeScript",
      tags: ["React", "TypeScript", "Tailwind"],
    },
    {
      title: "Projeto Beta",
      description: "Sistema de gerenciamento com dashboard interativo",
      tags: ["Node.js", "PostgreSQL", "API"],
    },
    {
      title: "Projeto Gamma",
      description: "E-commerce responsivo com pagamentos integrados",
      tags: ["Next.js", "Stripe", "Prisma"],
    },
  ];

  return (
    <section id="projetos" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Meus <span className="text-primary">Projetos</span>
          </h2>
          <p className="text-muted-foreground">
            Alguns dos projetos que desenvolvi recentemente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 group hover:border-primary/50 transition-all"
            >
              <div className="aspect-video bg-primary/10 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-primary/50 text-sm">Preview</span>
              </div>
              
              <h3 className="font-display font-semibold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-primary/20 text-primary rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <button className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                </button>
                <button className="text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
