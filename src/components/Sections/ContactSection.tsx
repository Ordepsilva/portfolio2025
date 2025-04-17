import { personalInfo, socialLinks } from "../../data/portfolioData";
import { t } from "../../translations/translator";
import GradientHeading from "../UI/GradientHeading";

const ContactSection = () => (
  <div className="space-y-8">
    <GradientHeading>{t("contactSection.getInContact")}</GradientHeading>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <p className="text-gray-300">{t("contactSection.description")}</p>

        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-4">
              <span>📧</span>
            </div>
            <span>{personalInfo.email}</span>
          </div>

          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-4">
              <span>📍</span>
            </div>
            <span>{personalInfo.location}</span>
          </div>
        </div>

        <div className="flex space-x-4 text-gray-400 pt-4">
          {socialLinks.map((link) => (
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

      <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-gray-700">
        <form className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-2" htmlFor="name">
             {t("contactSection.name")}
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder={t("contactSection.namePlaceholder")}
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2" htmlFor="email">
              {t("contactSection.email")}
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder={t("contactSection.emailPlaceholder")}
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2" htmlFor="message">
              {t("contactSection.message")}
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder={t("contactSection.messagePlaceholder")}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-colors duration-300"
          >
            {t("contactSection.sendMessage")}
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default ContactSection;
