import { useState } from "react";
import { motion } from "framer-motion";
import shipUfo from "@/assets/ship-ufo.png";
import shipFalcon from "@/assets/ship-falcon.png";
import { Button } from "@/components/ui/button";

interface WelcomeModalProps {
  onStart: (ship: string) => void;
}

const WelcomeModal = ({ onStart }: WelcomeModalProps) => {
  const [selectedShip, setSelectedShip] = useState<string | null>(null);

  const ships = [
    { id: "ufo", name: "Nebula", image: shipUfo },
    { id: "falcon", name: "Falcon", image: shipFalcon },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 flex items-center justify-center p-4 z-50"
    >
      <div className="absolute inset-0 bg-background/50 backdrop-blur-sm" />

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="relative glass-card p-8 max-w-xl w-full"
      >
        <div className="text-center space-y-6">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-primary text-glow-cyan">
            Welcome, Space Explorer!
          </h1>

          <p className="text-foreground/80">
            Choose your ship to begin the journey.
          </p>

          <div className="flex gap-4 justify-center">
            {ships.map((ship) => (
              <button
                key={ship.id}
                onClick={() => setSelectedShip(ship.id)}
                className={`ship-card p-4 w-36 h-36 flex flex-col items-center justify-center gap-2 ${
                  selectedShip === ship.id ? "selected" : ""
                }`}
              >
                <img src={ship.image} alt={ship.name} className="w-20 h-20 object-contain" />
                <span className="text-cosmic-gold font-display text-xs">{ship.name}</span>
              </button>
            ))}
          </div>

          <Button
            variant="cosmic"
            size="lg"
            onClick={() => selectedShip && onStart(selectedShip)}
            disabled={!selectedShip}
          >
            START
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeModal;
