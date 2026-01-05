import type { MembersItem, PartType } from "@/types/members/members";
import ItemPart from "./ItemPart";

interface ListPartProps {
  partList: MembersItem[];
}

const PART_ORDER: PartType[] = ["PM", "DE", "FE", "BE"];

const ListPart = ({ partList }: ListPartProps) => {
  return (
    <div className="flex flex-col gap-[clamp(2.4rem,3.7vw,4.5rem)]">
      {PART_ORDER.map((part) => {
        const membersByPart = partList
          .filter((member) => member.part.includes(part))
          .sort((a, b) => a.name.localeCompare(b.name, "ko"));

        if (membersByPart.length === 0) return null;

        return <ItemPart key={part} part={part} members={membersByPart} />;
      })}
    </div>
  );
};

export default ListPart;
