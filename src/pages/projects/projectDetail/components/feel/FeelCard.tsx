import type { ProjectFeel } from "@/types/project";

interface FeelCardProps {
  feel: ProjectFeel;
}

const FeelCard = ({ feel }: FeelCardProps) => {
  return (
    <article className="flex flex-col gap-[clamp(1.2rem,2.5vw,1.88rem)]">
      
      <div className="flex items-center gap-[clamp(0.8rem,1.5vw,1.25rem)]">
        <span className="text-[clamp(1.2rem,2.5vw,1.75rem)] font-semibold text-intro">
          {feel.nickname}/{feel.name}
        </span>
        <span className="rounded-full border border-white px-[clamp(0.8rem,1.5vw,1.25rem)] py-[clamp(0.3rem,0.6vw,0.5rem)] text-[clamp(1rem,2vw,1.5rem)] font-semibold text-intro">
          {feel.part}
        </span>
      </div>

      
      <p className="whitespace-pre-line text-[clamp(0.9rem,1.8vw,1.25rem)] leading-[1.8] text-intro">
        {feel.explain}
      </p>
    </article>
  );
};

export default FeelCard;
