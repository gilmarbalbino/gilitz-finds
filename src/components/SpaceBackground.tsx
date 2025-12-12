import spaceBackground from "@/assets/space-background.jpg";
import planetOrange from "@/assets/planet-orange.png";
import planetBlue from "@/assets/planet-blue.png";
import planetGreen from "@/assets/planet-green.png";

const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      {/* Main background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${spaceBackground})` }}
      />
      
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-background/40" />
      
      {/* Stars layer */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-foreground rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.3 + Math.random() * 0.7,
            }}
          />
        ))}
      </div>
      
      {/* Floating planets */}
      <img
        src={planetOrange}
        alt="Orange gas giant planet"
        className="absolute top-[5%] left-[5%] w-24 h-24 md:w-32 md:h-32 opacity-60 animate-float-slow object-contain"
      />
      <img
        src={planetBlue}
        alt="Blue ice planet with rings"
        className="absolute top-[10%] right-[8%] w-20 h-20 md:w-28 md:h-28 opacity-50 animate-float delay-2 object-contain"
      />
      <img
        src={planetGreen}
        alt="Green forest planet"
        className="absolute bottom-[15%] left-[10%] w-16 h-16 md:w-24 md:h-24 opacity-40 animate-float-slow delay-3 object-contain"
      />
      <img
        src={planetOrange}
        alt="Distant orange planet"
        className="absolute bottom-[20%] right-[5%] w-28 h-28 md:w-36 md:h-36 opacity-50 animate-float delay-1 object-contain"
      />
      <img
        src={planetBlue}
        alt="Small blue planet"
        className="absolute top-[40%] left-[3%] w-12 h-12 opacity-30 animate-float-slow delay-4 object-contain"
      />
      <img
        src={planetGreen}
        alt="Distant green world"
        className="absolute top-[30%] right-[3%] w-14 h-14 opacity-35 animate-float delay-5 object-contain"
      />
    </div>
  );
};

export default SpaceBackground;
