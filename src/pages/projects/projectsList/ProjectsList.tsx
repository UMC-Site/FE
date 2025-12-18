import Title from "@/components/Title/Title";
import { useProjectFilter } from "@/hooks/project";
import { GenerationFilter, ProjectGrid } from "./components";

const ProjectsList = () => {
  const { selectedFilter, filteredProjects, handleFilterChange } =
    useProjectFilter();

  return (
    <div className="w-[68vw] pb-35 max-[430px]:w-full max-[430px]:px-[1.8rem]">
      <div className="flex flex-col gap-y-[clamp(2rem,4vw,3.73rem)]">
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
