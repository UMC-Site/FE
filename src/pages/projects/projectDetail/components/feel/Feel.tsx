import type { ProjectFeel } from "@/types/project";
import FeelCard from "./FeelCard";

interface FeelProps {
  feels: ProjectFeel[];
}

const Feel = ({ feels }: FeelProps) => {
  if (!feels || feels.length === 0) return null;

  return (
    <section className="mt-[clamp(5rem,10vw,8.75rem)] project-section-gap">
      <h2 className="project-section-title">소감</h2>
      <ul className="flex flex-col gap-[clamp(2rem,5vw,3.5rem)]">
        {feels.map((feel) => (
          <li key={feel.id}>
            <FeelCard feel={feel} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Feel;
