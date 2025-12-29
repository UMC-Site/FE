import clsx from "clsx";
import type { FilterType } from "@/types/project";

interface GenerationButtonProps {
  filter: FilterType;
  isSelected: boolean;
  onClick: () => void;
}

const GenerationButton = ({
  filter,
  isSelected,
  onClick,
}: GenerationButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isSelected}
      className={clsx(
        "flex items-center justify-center rounded-[clamp(25rem,60vw,50rem)] border-[clamp(0.05rem,0.3vw,0.1rem)] border-banner-bg-4 border-solid px-[clamp(1.12rem,2vw,2.5rem)] py-[clamp(0.25rem,0.5vw,0.5rem)] font-normal text-[clamp(0.875rem,2vw,2.8rem)] text-banner-bg-4",
        isSelected && "bg-banner-bg-4 text-footer"
      )}
    >
      {filter}
    </button>
  );
};

export default GenerationButton;
