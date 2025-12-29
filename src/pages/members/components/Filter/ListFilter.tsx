import { MEMBERS_TYPES } from "@/types/members/members";
import { useMembersStore } from "@/stores/members/useMembersStore";
import { getGenerations } from "@/utils/members/getGenerations";
import ItemFilter from "./ItemFilter";

const ListFilter = () => {
  const { selectedType, setSelectedType } = useMembersStore();

  return (
    <div className="mt-[clamp(2.6rem,5vw,7rem)] mb-12 flex items-center gap-[clamp(0.8rem,2vw,2rem)]">
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
