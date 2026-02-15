import type { ProjectPerson } from "@/types/project";

interface ContributionItemProps {
  person: ProjectPerson;
}

const ContributionItem = ({ person }: ContributionItemProps) => {
  return (
    <div className="flex items-baseline">
      <span className="w-[clamp(7rem,12vw,11.3125rem)] shrink-0 font-medium text-[clamp(1rem,2vw,1.5rem)] text-intro">
        {person.part}
      </span>
      <ul className="flex flex-wrap gap-[clamp(1rem,2vw,1.75rem)]">
        {person.name.map((name) => (
          <li
            key={`${person.id}-${name}`}
            className="font-medium text-[clamp(1rem,2vw,1.5rem)] text-intro"
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContributionItem;
