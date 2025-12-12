import { useState } from "react";
import SpaceBackground from "@/components/SpaceBackground";
import WelcomeModal from "@/components/WelcomeModal";

const Index = () => {
  const [started, setStarted] = useState(false);

  return (
    <main className="min-h-screen">
      <SpaceBackground />
      {!started ? (
        <WelcomeModal onStart={() => setStarted(true)} />
      ) : (
        <div className="fixed inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-display text-primary text-glow-cyan">
            Welcome aboard, Explorer!
          </h1>
        </div>
      )}
    </main>
  );
};

export default Index;
