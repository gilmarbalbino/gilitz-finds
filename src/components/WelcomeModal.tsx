import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import shipUfo from "@/assets/ship-ufo.png";
import shipFalcon from "@/assets/ship-falcon.png";
import { Button } from "@/components/ui/button";

interface WelcomeModalProps {
  onStart: (ship: string) => void;
}

const WelcomeModal = ({ onStart }: WelcomeModalProps) => {
  const [selectedShip, setSelectedShip] = useState<string | null>(null);

  const ships = [
    { id: "ufo", name: "Nebula Cruiser", image: shipUfo },
    { id: "falcon", name: "Falcon", image: shipFalcon },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 flex items-center justify-center p-4 z-50"
      >
        {/* Backdrop blur */}
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />

        {/* Modal */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
          className="relative glass-card p-8 md:p-12 max-w-3xl w-full mx-auto"
        >
          {/* Glowing border effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 -z-10 blur-xl" />

          {/* Content */}
          <div className="text-center space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-5xl font-display font-bold text-primary text-glow-cyan"
            >
              Welcome, Space Explorer!
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <p className="text-foreground/90 text-lg">
                Embark on a magical journey through my cosmic resume.
              </p>
              <p className="text-cosmic-gold text-sm">
                Each world is a part of my cosmos.
              </p>
              <p className="text-sm">
                <span className="text-cosmic-green">Explore the real.</span>{" "}
                <span className="text-foreground/80">Destroy the fake.</span>{" "}
                <span className="text-secondary">Discover the universe within.</span>
              </p>
            </motion.div>

            {/* Ship selection */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4"
            >
              {ships.map((ship) => (
                <button
                  key={ship.id}
                  onClick={() => setSelectedShip(ship.id)}
                  className={`ship-card p-4 w-48 h-48 flex flex-col items-center justify-center gap-3 ${
                    selectedShip === ship.id ? "selected" : ""
                  }`}
                >
                  <img
                    src={ship.image}
                    alt={ship.name}
                    className="w-32 h-32 object-contain"
                  />
                  <span className="text-cosmic-gold font-display text-sm">
                    {ship.name}
                  </span>
                </button>
              ))}
            </motion.div>

            {/* Next button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-end pt-4"
            >
              <Button
                variant="cosmic"
                size="lg"
                onClick={() => selectedShip && onStart(selectedShip)}
                disabled={!selectedShip}
                className="min-w-32"
              >
                NEXT
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WelcomeModal;
