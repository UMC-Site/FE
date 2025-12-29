import useNavigation from "@/hooks/useNavigation";

interface ProjectLinkProps {
  url: string;
}

const ProjectLink = ({ url }: ProjectLinkProps) => {
  const { navigateTo } = useNavigation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigateTo(url);
  };

  return (
    <section className="project-section-gap mt-[clamp(5rem,10vw,7.5rem)]">
      <h2 className="project-section-title">프로젝트</h2>
      <a
        href={url}
        onClick={handleClick}
        className="project-body-text hover:underline"
      >
        {url}
      </a>
    </section>
  );
};

export default ProjectLink;
