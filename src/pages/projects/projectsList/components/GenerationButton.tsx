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
        "rounded-[clamp(25rem,60vw,50rem)] border-[clamp(0.05rem,0.3vw,0.1rem)] border-banner-bg-4 border-solid px-[clamp(1rem,3vw,2.5rem)] py-[clamp(0.3rem,1vw,0.5rem)] font-semibold text-[clamp(1.4rem,3vw,2.8rem)] text-banner-bg-4",
        isSelected && "bg-banner-bg-4 text-footer"
      )}
    >
      {filter}
    </button>
  );
};

export default GenerationButton;
