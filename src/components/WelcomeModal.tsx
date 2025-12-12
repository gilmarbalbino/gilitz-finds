import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface WelcomeModalProps {
  onStart: () => void;
}

const WelcomeModal = ({ onStart }: WelcomeModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 flex items-center justify-center p-4"
    >
      <div className="glass-card p-8 text-center space-y-4 max-w-md">
        <h1 className="text-2xl font-display text-primary text-glow-cyan">
          Welcome, Space Explorer!
        </h1>
        <Button variant="cosmic" onClick={onStart}>START</Button>
      </div>
    </motion.div>
  );
};

export default WelcomeModal;
