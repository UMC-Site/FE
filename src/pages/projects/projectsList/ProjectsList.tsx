import Title from "@/components/Title/Title";
import { useProjectFilter } from "@/hooks/project";
import { GenerationFilter, ProjectGrid } from "./components";

const ProjectsList = () => {
  const { selectedFilter, filteredProjects, handleFilterChange } =
    useProjectFilter();

  return (
    <div className="pageContainer">
      <div className="flex flex-col gap-y-[clamp(1.62rem,4vw,3.73rem)] pb-[clamp(5rem,10vw,8.75rem)]">
        <Title text="Project" />
        <GenerationFilter
          selectedFilter={selectedFilter}
          onFilterChange={handleFilterChange}
        />
        <ProjectGrid projects={filteredProjects} />
      </div>
    </div>
  );
};

export default ProjectsList;
