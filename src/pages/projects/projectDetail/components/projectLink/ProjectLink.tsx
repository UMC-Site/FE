interface ProjectLinkProps {
  url: string;
}

const ProjectLink = ({ url }: ProjectLinkProps) => {
  return (
    <section className="mt-[clamp(5rem,10vw,12rem)] project-section-gap">
      <h2 className="project-section-title">프로젝트</h2>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="project-body-text hover:underline"
      >
        {url}
      </a>
    </section>
  );
};

export default ProjectLink;
