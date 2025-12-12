import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const GameUI = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 flex items-center justify-center"
    >
      <div className="glass-card p-8 text-center space-y-4">
        <h2 className="font-display text-xl text-primary text-glow-cyan">
          Ready to Explore
        </h2>
        <p className="text-muted-foreground text-sm">
          Press SPACE to accelerate
        </p>
        <Button variant="cosmic">Begin</Button>
      </div>
    </motion.div>
  );
};

export default GameUI;
