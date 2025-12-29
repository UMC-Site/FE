import type { MembersItem } from "@/types/members/members";
import ItemMembers from "./ItemMembers";

interface ListMembersProps {
  membersList: MembersItem[];
}

const ListMembers = ({ membersList }: ListMembersProps) => {
  return (
    <ul className="grid grid-cols-3 gap-[clamp(0.4rem,1.5vw,1rem)]">
      {membersList.map((member) => (
        <ItemMembers
          key={`${member.id}-${member.part.join("-")}`}
          member={member}
        />
      ))}
    </ul>
  );
};

export default ListMembers;
