import React from "react";
import NavItem from "./NavItem";
import { setLanguage, useLanguage } from "../../translations/translator";

type NavigationProps = {
  activeSection: string;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navigateTo: (section: string) => void;
};

const Navigation = ({
  activeSection,
  isMenuOpen,
  setIsMenuOpen,
  navigateTo,
}: NavigationProps) => {
  const language = useLanguage();
  const languages = ["en", "pt"];
  return (
    <>
      <button
        className="fixed top-4 right-4 z-50 p-2 bg-gray-800 rounded-full md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="w-6 h-0.5 bg-white mb-1.5" />
        <div className="w-6 h-0.5 bg-white mb-1.5" />
        <div className="w-6 h-0.5 bg-white" />
      </button>

      <nav
        className={`fixed z-40 transition-all duration-300 ${
          isMenuOpen
            ? "top-0 right-0 h-screen w-64 bg-gray-800"
            : "top-0 right-0 h-screen w-16 md:w-16 lg:w-20 bg-gray-800"
        } md:top-0 md:right-0 md:h-screen md:block`}
      >
        <div className="text-white text-center mt-4">
          <select
            className="appearance-none bg-transparent text-white cursor-pointer hover:text-gray-300 focus:outline-none"
            onChange={(e) => setLanguage(e.target.value as "en" | "pt")}
            value={language}
          >
            {languages.map((lang) => (
              <option
                key={lang}
                value={lang}
                className="bg-gray-800 text-white hover:bg-gray-700"
              >
                {lang.toLocaleUpperCase()}
              </option>
            ))}
          </select>
        </div>
        <div
          className={`flex flex-col items-center h-full py-16 ${
            isMenuOpen ? "block" : "hidden md:block"
          }`}
        >
          <NavItem
            icon="👤"
            label={isMenuOpen ? "Home" : ""}
            isActive={activeSection === "home"}
            onClick={() => navigateTo("home")}
          />
          <NavItem
            icon="📚"
            label={isMenuOpen ? "Projetos" : ""}
            isActive={activeSection === "projects"}
            onClick={() => navigateTo("projects")}
          />
          <NavItem
            icon="🛠️"
            label={isMenuOpen ? "Habilidades" : ""}
            isActive={activeSection === "skills"}
            onClick={() => navigateTo("skills")}
          />
          <NavItem
            icon="📞"
            label={isMenuOpen ? "Contacto" : ""}
            isActive={activeSection === "contact"}
            onClick={() => navigateTo("contact")}
          />
        </div>
      </nav>
    </>
  );
};

export default Navigation;
