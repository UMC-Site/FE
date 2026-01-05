import type { QnaType } from "@/types/qna/qna";
import ItemFilter from "./ItemFilter";

interface ListFilterProps {
  types: readonly QnaType[];
  selectedType: QnaType;
  onSelectType: (type: QnaType) => void;
}

const ListFilter = ({ types, selectedType, onSelectType }: ListFilterProps) => {
  return (
    <div className="flex items-center gap-[clamp(0.8rem,1.5vw,2rem)]">
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
