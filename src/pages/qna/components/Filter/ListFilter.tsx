import type { QnaType } from "@/types/qna/qna";
import ItemFilter from "./ItemFilter";

interface ListFilterProps {
  types: readonly QnaType[];
  selectedType: QnaType;
  onSelectType: (type: QnaType) => void;
}

const ListFilter = ({ types, selectedType, onSelectType }: ListFilterProps) => {
  return (
    <div className="mt-[clamp(2.6rem,5vw,7rem)] mb-[clamp(2.3rem,5vw,8rem)] flex items-center gap-[clamp(0.8rem,2vw,2rem)]">
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
