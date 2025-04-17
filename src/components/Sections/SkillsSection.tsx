import { skills, otherTechnologies } from "../../data/portfolioData";
import { SkillType } from "../../types/SkillType";
import GradientHeading from "../UI/GradientHeading";

type SkillsSectionProps = {
  skills?: SkillType[];
};

const SkillsSection = ({ skills: skillsProp = skills }: SkillsSectionProps) => (
  <div className="space-y-8">
    <GradientHeading>Minhas Habilidades</GradientHeading>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {skillsProp.map((skill) => (
        <div key={skill.name} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-medium">{skill.name}</span>
            <span className="text-gray-400">{skill.level}%</span>
          </div>
          <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>

    <div className="bg-gray-800 bg-opacity-70 rounded-xl p-6 mt-8 border border-gray-700">
      <h3 className="text-xl font-bold mb-4">Outras tecnologias</h3>
      <div className="flex flex-wrap gap-3">
        {otherTechnologies.map((tech) => (
          <span key={tech} className="px-3 py-2 bg-gray-700 rounded-lg text-sm">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default SkillsSection;
