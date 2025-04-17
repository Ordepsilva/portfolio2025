
type BackgroundEffectProps = {
  mousePosition: { x: number; y: number };
};

const BackgroundEffect = ({ mousePosition }: BackgroundEffectProps) => {
  return (
    <>
      {/* Background gradient */}
      <div
        className="fixed inset-0 opacity-20 bg-gradient-to-br from-blue-500 to-purple-600 pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${
            mousePosition.y * 0.01
          }px)`,
        }}
      />

      <div className="absolute inset-0 opacity-5" />

      {/* Circles for decoration */}
      <div
        className="fixed h-64 w-64 rounded-full bg-blue-500 opacity-10 blur-3xl"
        style={{
          left: `${mousePosition.x * 0.1}px`,
          top: `${mousePosition.y * 0.1}px`,
        }}
      />
      <div
        className="fixed h-96 w-96 rounded-full bg-purple-500 opacity-10 blur-3xl"
        style={{
          right: `${mousePosition.x * 0.05}px`,
          bottom: `${mousePosition.y * 0.05}px`,
        }}
      />
    </>
  );
};

export default BackgroundEffect;
