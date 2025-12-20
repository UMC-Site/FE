import type { FilterType } from "@/types/project";
import { GENERATION_TYPES } from "@/utils/Project";
import GenerationButton from "./GenerationButton";

interface GenerationFilterProps {
  selectedFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const FILTER_OPTIONS: FilterType[] = ["ALL", ...GENERATION_TYPES];

const GenerationFilter = ({
  selectedFilter,
  onFilterChange,
}: GenerationFilterProps) => {
  return (
    <div className="flex gap-[clamp(0.5rem,2vw,2rem)]">
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
