import { useState } from "react";
import SpaceBackground from "@/components/SpaceBackground";
import WelcomeModal from "@/components/WelcomeModal";
import GameUI from "@/components/GameUI";

const Index = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedShip, setSelectedShip] = useState<string | null>(null);

  const handleStart = (ship: string) => {
    setSelectedShip(ship);
    setGameStarted(true);
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      <SpaceBackground />
      
      {!gameStarted ? (
        <WelcomeModal onStart={handleStart} />
      ) : (
        <GameUI ship={selectedShip!} />
      )}
    </main>
  );
};

export default Index;
