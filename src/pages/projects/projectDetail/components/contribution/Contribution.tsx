import type { ProjectPerson } from "@/types/project";
import ContributionItem from "./ContributionItem";

interface ContributionProps {
  people: ProjectPerson[];
  hasProjectLink?: boolean;
}

const Contribution = ({ people, hasProjectLink = false }: ContributionProps) => {
  const marginClass = hasProjectLink
    ? "mt-[clamp(3rem,6vw,8rem)]"
    : "mt-[clamp(5rem,10vw,12rem)]";

  return (
    <section className={`${marginClass} project-section-gap`}>
      <h2 className="project-section-title">참여</h2>
      <ul className="flex flex-col gap-[clamp(1.2rem,2.5vw,1.88rem)]">
        {people.map((person) => (
          <li key={person.id}>
            <ContributionItem person={person} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contribution;
