import Default from "@/assets/images/members/default.png";
import useNavigation from "@/hooks/useNavigation";
import type { MembersItem } from "@/types/members/members";

interface ItemMembersProps {
  member: MembersItem;
}

const ItemMembers = ({ member }: ItemMembersProps) => {
  const { navigateTo } = useNavigation();

  return (
    <li
      className="flex w-full cursor-pointer flex-col items-center transition-all duration-200 ease-out hover:scale-[1.03] hover:shadow-lg"
      onClick={() => member.link && navigateTo(member.link)}
    >
      <div className="mb-[clamp(0.4rem,1.5vw,1rem)] aspect-square w-full overflow-hidden rounded-[0.4rem]">
        <img
          src={member.image || Default}
          alt={member.name}
          className="h-full w-full object-cover"
        />
      </div>

      <p className="w-full text-left font-semibold text-[clamp(1.2rem,2vw,2.4rem)]">
        {member.name}
      </p>
    </li>
  );
};

export default ItemMembers;
