import clsx from "clsx";
import type { MembersType } from "@/types/members/members";

interface ItemFilterProps {
  type: MembersType;
  isSelected: boolean;
  onClick: () => void;
}

const ItemFilter = ({ type, isSelected, onClick }: ItemFilterProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isSelected}
      className={clsx(
        `rounded-[clamp(25rem,60vw,50rem)] border-[clamp(0.05rem,0.3vw,0.1rem)] border-banner-bg-4 px-[clamp(1rem,2vw,2rem)] py-[clamp(0.4rem,0.5vw,0.8rem)] font-medium text-[clamp(1.4rem,2vw,2.8rem)] text-banner-bg-4`,
        isSelected && "bg-banner-bg-4 font-semibold text-footer"
      )}
    >
      {type}
    </button>
  );
};

export default ItemFilter;
