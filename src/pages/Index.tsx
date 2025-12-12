import { useState } from "react";
import SpaceBackground from "@/components/SpaceBackground";
import WelcomeModal from "@/components/WelcomeModal";
import Portfolio from "@/components/portfolio/Portfolio";

const Index = () => {
  const [started, setStarted] = useState(false);

  return (
    <main className="min-h-screen">
      <SpaceBackground />
      {!started ? (
        <WelcomeModal onStart={() => setStarted(true)} />
      ) : (
        <Portfolio />
      )}
    </main>
  );
};

export default Index;
