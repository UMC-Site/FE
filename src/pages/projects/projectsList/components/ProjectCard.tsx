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
          src={
            window.innerWidth <= 430
              ? project.projectMobile
              : project.projectWeb
          }
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="aspect-video w-full cursor-pointer object-cover"
        />
      </Link>
      <div className="mt-[clamp(1rem,3vw,4rem)] w-full">
        <h3 className="font-normal text-[clamp(1rem,3vw,2.8rem)] leading-[1.2]">
          {project.title}
        </h3>
        <ul className="mt-[clamp(0.61rem,1.5vw,1.5rem)] flex flex-wrap gap-[clamp(0.44rem,1.2vw,1.5rem)]">
          {project.subTitle.map((tag) => (
            <li
              key={tag.id}
              className="rounded-lg border border-banner-bg-4 px-[clamp(0.84rem,1.5vw,1.75rem)] py-[clamp(0.24rem,0.4vw,0.5rem)] font-semibold text-[clamp(0.625rem,1.2vw,1.25rem)] text-banner-bg-4"
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
