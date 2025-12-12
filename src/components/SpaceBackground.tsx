import spaceBackground from "@/assets/space-background.jpg";
import planetOrange from "@/assets/planet-orange.png";
import planetBlue from "@/assets/planet-blue.png";

const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${spaceBackground})` }}
      />
      <div className="absolute inset-0 bg-background/30" />
      
      <img
        src={planetOrange}
        alt="Planet"
        className="absolute top-[10%] left-[8%] w-24 opacity-50 animate-float-slow object-contain"
      />
      <img
        src={planetBlue}
        alt="Planet"
        className="absolute bottom-[15%] right-[10%] w-28 opacity-40 animate-float object-contain"
      />
    </div>
  );
};

export default SpaceBackground;
