import { Link } from "react-router-dom";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="w-full overflow-hidden rounded-[clamp(0.2rem,0.5vw,0.4rem)]">
      <Link to={`/project/${project.id}`}>
        <img
          src={project.projectWeb}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="aspect-video w-full cursor-pointer object-cover"
        />
      </Link>
      <div className="mt-[clamp(1.6rem,3vw,4rem)] w-full">
        <h3 className="font-semibold text-[clamp(1.6rem,3vw,2.8rem)] text-intro leading-[1.2]">
          {project.title}
        </h3>
        <ul className="mt-[clamp(1rem,1.5vw,1.5rem)] flex flex-wrap gap-[clamp(1rem,1.8vw,1.5rem)]">
          {project.subTitle.map((tag) => (
            <li
              key={tag.id}
              className="rounded-lg border border-banner-bg-4 px-[clamp(1.25rem,2vw,1.75rem)] py-[clamp(0.4rem,0.6vw,0.5rem)] font-semibold text-[clamp(1rem,1.5vw,1.25rem)] text-banner-bg-4"
            >
              {tag.name}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ProjectCard;
