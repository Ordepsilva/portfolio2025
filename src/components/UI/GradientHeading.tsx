type GradientHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

const GradientHeading = ({
  children,
  className = "",
}: GradientHeadingProps) => {
  return (
    <h2
      className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 ${className}`}
    >
      {children}
    </h2>
  );
};

export default GradientHeading;
