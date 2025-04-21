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
        className={`fixed top-4 right-4 z-50 p-2 rounded-full md:hidden ${
          isMenuOpen ? "bg-gray-800" : ""
        }`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="w-6 h-0.5 bg-white mb-1.5" />
        <div className="w-6 h-0.5 bg-white mb-1.5" />
        <div className="w-6 h-0.5 bg-white" />
      </button>

      <nav
        className={`fixed z-40 transition-all duration-300 ${
          isMenuOpen
            ? "top-0 right-0 h-screen w-full bg-gray-800"
            : "top-0 right-0 h-screen  md:w-16 lg:w-20 bg-gray-800"
        } md:top-0 md:right-0 md:h-screen md:block`}
      >
        <div
          className={`text-white text-center mt-4 flex justify-center space-x-4 ${
            isMenuOpen ? "block" : "hidden md:block"
          }`}
        >
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang as "en" | "pt")}
              className={`relative ${
          language === lang
            ? "text-white after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:bottom-0 after:left-0"
            : "text-gray-400 hover:text-white"
              }`}
            >
              {lang.toLocaleUpperCase()}
            </button>
          ))}
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
