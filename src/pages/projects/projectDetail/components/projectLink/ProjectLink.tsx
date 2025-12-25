interface ProjectLinkProps {
  url: string;
}

const ProjectLink = ({ url }: ProjectLinkProps) => {
  return (
    <section className="project-section-gap mt-[clamp(5rem,10vw,7.5rem)]">
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
