const NavItem = ({
  icon,
  label,
  isActive,
  onClick,
}: {
  icon: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}) => (
  <div
    className={`flex flex-col items-center mb-8 cursor-pointer transition-all duration-300 group ${
      isActive ? "text-blue-400" : "text-gray-400"
    }`}
    onClick={onClick}
  >
    <div
      className={`text-2xl mb-2 ${
        isActive ? "scale-125" : ""
      } transition-transform duration-300`}
    >
      {icon}
    </div>
    <span className="text-xs opacity-80 group-hover:text-blue-400">
      {label}
    </span>
    <div
      className={`h-1 w-6 rounded-full mt-1 transition-all duration-300 ${
        isActive ? "bg-blue-500" : "bg-transparent"
      }`}
    ></div>
  </div>
);
export default NavItem