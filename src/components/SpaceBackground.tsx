import spaceBackground from "@/assets/space-background.jpg";

const SpaceBackground = () => (
  <div
    className="fixed inset-0 -z-10 bg-cover bg-center"
    style={{ backgroundImage: `url(${spaceBackground})` }}
  />
);

export default SpaceBackground;
