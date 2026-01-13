import type { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  if (projects.length === 0) {
    return (
      <p className="mt-[10vh] flex items-center justify-center font-medium text-[clamp(1.75rem,4vw,3.6rem)]">
        데모데이 기간 종료 후 업로드 될 예정입니다.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-x-[clamp(0.5rem,3vw,2rem)] gap-y-[clamp(4.5rem,5vw,6.87rem)]">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
