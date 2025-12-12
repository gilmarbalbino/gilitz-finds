import { useState } from "react";
import SpaceBackground from "@/components/SpaceBackground";
import WelcomeModal from "@/components/WelcomeModal";
import GameUI from "@/components/GameUI";

const Index = () => {
  const [started, setStarted] = useState(false);

  return (
    <main className="min-h-screen">
      <SpaceBackground />
      {!started ? <WelcomeModal onStart={() => setStarted(true)} /> : <GameUI />}
    </main>
  );
};

export default Index;
