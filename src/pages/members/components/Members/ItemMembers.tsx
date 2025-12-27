import type { MembersItem, PartType } from "@/types/members/members";
import useNavigation from "@/hooks/useNavigation";

interface ItemMembersProps {
  part: PartType;
  members: MembersItem[];
}

const ItemMembers = ({ part, members }: ItemMembersProps) => {
  const { navigateTo } = useNavigation();

  const handleLink = (link?: string) => {
    if (!link) return;
    navigateTo(link);
  };

  return (
    <section>
      <h3 className="mb-[0.4rem] text-[clamp(1.8rem,3vw,2.8rem)] font-semibold text-banner-bg-4">
        {part}
      </h3>

      <ul className="grid grid-cols-3 gap-[clamp(0.4rem,1.5vw,1rem)]">
        {members.map((member) => (
          <li
            key={`${member.id}-${part}`}
            className="flex flex-col items-center w-full cursor-pointer"
            onClick={() => handleLink(member.link)}
          >
            <div className="rounded-[0.4rem] w-full aspect-square bg-gray-200 overflow-hidden mb-[clamp(0.4rem,1.5vw,1rem)]">
              {member.image && (
                <img
                  src={member.image}
                  alt={member.nickname}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <p className="w-full text-left font-semibold text-[clamp(1.6rem,2vw,2.8rem)]">
              {member.nickname}/{member.name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ItemMembers;
