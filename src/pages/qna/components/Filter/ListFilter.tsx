import ItemFilter from "./ItemFilter";
import type { QnaType } from "@/types/qna/qna";

interface ListFilterProps {
  types: readonly QnaType[];
  selectedType: QnaType;
  onSelectType: (type: QnaType) => void;
}

const ListFilter = ({ types, selectedType, onSelectType }: ListFilterProps) => {
  return (
    <div className="flex items-center gap-[clamp(0.8rem,2vw,2rem)] mt-[clamp(2.6rem,5vw,7rem)] mb-[clamp(2.3rem,5vw,8rem)]">
      {types.map((type) => (
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
