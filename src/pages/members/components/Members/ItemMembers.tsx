import type { MembersItem } from "@/types/members/members";
import useNavigation from "@/hooks/useNavigation";

interface ItemMembersProps {
  member: MembersItem;
}

const ItemMembers = ({ member }: ItemMembersProps) => {
  const { navigateTo } = useNavigation();

  return (
    <li
      className="
    flex flex-col items-center w-full cursor-pointer
    transition-all duration-200 ease-out
    hover:scale-[1.03] hover:shadow-lg
  "
      onClick={() => member.link && navigateTo(member.link)}
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
  );
};

export default ItemMembers;
