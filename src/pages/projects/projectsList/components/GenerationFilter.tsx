import type { FilterType } from "@/types/project";
import { GENERATION_TYPES } from "@/utils/project";
import GenerationButton from "./GenerationButton";

interface GenerationFilterProps {
  selectedFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const FILTER_OPTIONS: FilterType[] = [...GENERATION_TYPES];

const GenerationFilter = ({
  selectedFilter,
  onFilterChange,
}: GenerationFilterProps) => {
  return (
    <div className="flex gap-[clamp(0.75rem,1.5vw,2rem)]">
      {FILTER_OPTIONS.map((filter) => (
        <GenerationButton
          key={filter}
          filter={filter}
          isSelected={selectedFilter === filter}
          onClick={() => onFilterChange(filter)}
        />
      ))}
    </div>
  );
};

export default GenerationFilter;
