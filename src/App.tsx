import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation/Navigation";
import HomeSection from "./components/Sections/HomeSection";
import SkillsSection from "./components/Sections/SkillsSection";
import { projects, skills } from "./data/portfolioData";
import ProjectsSection from "./components/Sections/ProjectsSection";
import ContactSection from "./components/Sections/ContactSection";
import BackgroundEffect from "./components/UI/BackgroundEffect";
import { t } from "./translations/translator";

const App = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Navegação entre seções
  const navigateTo = (section: string) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <BackgroundEffect mousePosition={mousePosition} />

      <Navigation
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navigateTo={navigateTo}
      />

      <div className="container mx-auto py-16 px-6 md:pl-24 min-h-screen flex items-center">
        <main className="w-full backdrop-blur-sm bg-gray-900 bg-opacity-40 rounded-2xl p-6 md:p-10 shadow-2xl border border-gray-800">
          <div className="max-w-xl mx-auto  p-8 bg-white text-gray-800 rounded-2xl shadow-lg text-center text-xl font-semibold font-mono">
            🚧 <span className="block text-2xl mb-2">{t("app.inDevelopment")}...</span>
          </div>
          {/*  {activeSection === "home" && <HomeSection />}
          {activeSection === "projects" && (
            <ProjectsSection projects={projects} />
          )}
          {activeSection === "skills" && <SkillsSection skills={skills} />}
          {activeSection === "contact" && <ContactSection />} */}
        </main>
      </div>
    </div>
  );
};

export default App;
