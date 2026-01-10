import type { MembersItem, PartType } from "@/types/members/members";
import ListMembers from "./ListMembers";

interface ItemPartProps {
  part: PartType;
  members: MembersItem[];
}

const ItemPart = ({ part, members }: ItemPartProps) => {
  return (
    <section>
      <h3 className="mb-[0.4rem] font-semibold text-[clamp(1.8rem,2.3vw,2.8rem)] text-banner-bg-4">
        {part}
      </h3>

      <ListMembers membersList={members} />
    </section>
  );
};

export default ItemPart;
