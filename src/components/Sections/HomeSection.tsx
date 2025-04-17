import { personalInfo, socialLinks } from "../../data/portfolioData";
import { t } from "../../translations/translator";

const HomeSection = () => (
  <div className="flex flex-col-reverse md:flex-row md:items-center">
    <div className="md:w-1/2 space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          {personalInfo.name}
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-300">
          {personalInfo.title}
        </h2>
      </div>

      <p className="text-gray-300 leading-relaxed">{personalInfo.bio}</p>

      <div className="flex space-x-4 pt-4">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300 flex items-center">
          <span className="mr-2">Ver Projetos</span>
          <span>→</span>
        </button>
        <button className="px-6 py-3 border border-gray-600 hover:border-blue-500 rounded-lg transition-colors duration-300">
          {t("home.cvButton")}
        </button>
      </div>

      <div className="flex space-x-4 text-gray-400 pt-4">
        {socialLinks.slice(0, 3).map((link) => (
          <a
            key={link.name}
            href={link.url}
            className="hover:text-blue-400 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>

    <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
      <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-lg">
        <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
          <img
            src="/api/placeholder/300/300"
            alt="Sua foto de perfil"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
);

export default HomeSection;
