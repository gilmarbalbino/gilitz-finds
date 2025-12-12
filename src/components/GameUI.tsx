import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface GameUIProps {
  ship: string;
}

const GameUI = ({ ship }: GameUIProps) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [worldsExplored, setWorldsExplored] = useState(0);
  const [worldsEliminated, setWorldsEliminated] = useState(0);
  const [showScoreboard, setShowScoreboard] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centiseconds = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}.${centiseconds.toString().padStart(2, "0")}`;
  };

  const handleStart = () => {
    setIsRunning(true);
    // Simulate exploring worlds
    const exploreInterval = setInterval(() => {
      setWorldsExplored((prev) => {
        if (prev >= 5) {
          clearInterval(exploreInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex flex-col"
    >
      {/* Top bar - Scoreboard toggle */}
      <div className="absolute top-4 left-4 z-20">
        <button
          onClick={() => setShowScoreboard(!showScoreboard)}
          className="glass px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-display hover:bg-primary/10 transition-colors"
        >
          Scoreboard
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              showScoreboard ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Scoreboard dropdown */}
        {showScoreboard && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-12 left-0 glass rounded-xl p-4 min-w-64 space-y-3"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">🛰️</span>
              <span className="text-sm text-muted-foreground">Worlds explored</span>
              <span className="ml-auto font-display text-cosmic-cyan">
                {worldsExplored}/5
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">💥</span>
              <span className="text-sm text-muted-foreground">Worlds eliminated</span>
              <span className="ml-auto font-display text-destructive">
                {worldsEliminated}/15
              </span>
            </div>
            <div className="border-t border-border pt-3">
              <div className="text-2xl font-display text-center text-glow-cyan">
                {formatTime(time)}
              </div>
            </div>
            <div className="text-xs text-muted-foreground text-center">
              No records yet
            </div>
          </motion.div>
        )}
      </div>

      {/* Center content */}
      <div className="flex-1 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 md:p-12 max-w-md text-center space-y-6"
        >
          <h2 className="font-display text-xl text-cosmic-gold">
            Ready to Start
          </h2>

          <div className="flex gap-4 justify-center">
            <Button
              variant="cosmic"
              size="lg"
              onClick={handleStart}
              disabled={isRunning}
            >
              {isRunning ? "Exploring..." : "Start"}
            </Button>
            <Button variant="outline" size="lg">
              View Scores
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Start timer to begin challenge
          </p>
        </motion.div>
      </div>

      {/* Bottom controls */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex justify-between items-end">
          {/* Keybinds */}
          <div className="glass rounded-xl p-4 space-y-2">
            <h3 className="text-xs text-muted-foreground font-display">Keybinds</h3>
            <div className="flex items-center gap-2">
              <span className="text-xl">🚀</span>
              <span className="text-cosmic-gold font-display text-sm">
                {ship === "ufo" ? "Nebula Cruiser" : "Falcon"}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              Press or hold <kbd className="px-1 py-0.5 bg-muted rounded text-foreground">SPACE</kbd> to accelerate
            </p>
          </div>

          {/* Navigation compass */}
          <div className="glass rounded-xl p-3">
            <div className="grid grid-cols-3 gap-1 text-center font-display text-xs">
              <div></div>
              <div className="text-primary">N</div>
              <div></div>
              <div className="text-primary">W</div>
              <div className="w-2 h-2 bg-primary rounded-full mx-auto"></div>
              <div className="text-primary">E</div>
              <div></div>
              <div className="text-primary">S</div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GameUI;
