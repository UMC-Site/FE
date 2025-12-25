interface InfoProps {
  imageUrl: string;
  title: string;
  description: string;
}

const Info = ({ imageUrl, title, description }: InfoProps) => {
  return (
    <>
      <img
        src={imageUrl}
        alt={title}
        loading="lazy"
        decoding="async"
        className="aspect-[120/49.25] w-full object-cover"
      />

      <header className="pageContainer mx-auto mt-[clamp(1.5rem,3vw,2.5rem)] flex flex-col gap-[clamp(0.6rem,1.5vw,1rem)]">
        <h1 className="project-section-title">{title}</h1>
        <p className="project-body-text">{description}</p>
      </header>
    </>
  );
};

export default Info;
