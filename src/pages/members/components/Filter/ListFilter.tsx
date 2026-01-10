import { useMembersStore } from "@/stores/members/useMembersStore";
import { MEMBERS_TYPES } from "@/types/members/members";
import { getGenerations } from "@/utils/members/getGenerations";
import ItemFilter from "./ItemFilter";

const ListFilter = () => {
  const { selectedType, setSelectedType } = useMembersStore();

  return (
    <div className="flex items-center gap-[clamp(0.8rem,1.5vw,2rem)]">
      {[...MEMBERS_TYPES]
        .sort((a, b) => getGenerations(b) - getGenerations(a))

        .map((type) => (
          <ItemFilter
            key={type}
            type={type}
            isSelected={selectedType === type}
            onClick={() => setSelectedType(type)}
          />
        ))}
    </div>
  );
};

export default ListFilter;
