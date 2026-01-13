import { Navigate, useParams } from "react-router-dom";
import { allProjects } from "@/utils/project";
import { Contribution, Feel, Info, ProjectLink } from "./components";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = allProjects.find((p) => p.id === Number(id));

  if (!project) {
    return <Navigate to="/project" replace />;
  }

  return (
    <div className="flex w-full flex-col pb-[clamp(5rem,10vw,8.75rem)]">
      <Info
        imageUrl={
          window.innerWidth <= 430
            ? project.projectDetailMobile
            : project.projectDetailWeb
        }
        title={project.title}
        description={project.detailExplain}
      />

      <article className="pageContainer mx-auto flex flex-col">
        {project.project && <ProjectLink url={project.project} />}

        <Contribution
          people={project.people}
          hasProjectLink={!!project.project}
        />

        {project.feel && <Feel feels={project.feel} />}
      </article>
    </div>
  );
};

export default ProjectDetail;
