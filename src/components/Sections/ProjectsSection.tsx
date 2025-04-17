import { projects } from "../../data/portfolioData";
import { ProjectType } from "../../types/ProjectType";
import GradientHeading from "../UI/GradientHeading";

type ProjectsSectionProps = {
  projects?: ProjectType[];
};

const ProjectsSection = ({
  projects: projectsProp = projects,
}: ProjectsSectionProps) => (
  <div className="space-y-8">
    <GradientHeading>Meus Projetos</GradientHeading>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projectsProp.map((project) => (
        <div
          key={project.id}
          className="bg-gray-800 bg-opacity-70 rounded-xl p-6 border border-gray-700 transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
        >
          <h3 className="text-xl font-bold mb-3">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-700 rounded-md text-xs text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
          {project.link && (
            <a
              href={project.link}
              className="text-blue-400 hover:text-blue-300 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver projeto <span className="ml-1">→</span>
            </a>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default ProjectsSection;
