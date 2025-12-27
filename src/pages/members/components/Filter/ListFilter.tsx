import type { MembersType } from "@/types/members/members";
import ItemFilter from "./ItemFilter";

interface ListFilterProps {
  types: readonly MembersType[];
  selectedType: MembersType;
  onSelectType: (type: MembersType) => void;
}

const ListFilter = ({ types, selectedType, onSelectType }: ListFilterProps) => {
  return (
    <div className="mt-[clamp(2.6rem,5vw,7rem)] mb-12 flex items-center gap-[clamp(0.8rem,2vw,2rem)]">
      {[...types]
        .sort((a, b) => b.localeCompare(a, "ko"))
        .map((type) => (
          <ItemFilter
            key={type}
            type={type}
            isSelected={selectedType === type}
            onClick={() => onSelectType(type)}
          />
        ))}
    </div>
  );
};

export default ListFilter;
