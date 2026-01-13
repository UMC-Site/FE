import type { ContentItemsItemType } from "@/types/recruit/recruit";

interface ItemVacationProps {
  data: ContentItemsItemType;
}

const ItemVacation = ({ data }: ItemVacationProps) => {
  return (
    <div
      className="
        relative w-full
        flex flex-col items-start
        px-[clamp(1.4rem,2vw,2.4rem)]
        pt-[clamp(3.4rem,4.6vw,5.7rem)]
        pb-[clamp(1.4rem,2vw,2.5rem)]
        rounded-[clamp(0.4rem,0.5vw,0.68rem)]
        border-gradient-box
      "
    >
      <div
        className="
          absolute top-0 left-0
          w-fit
          px-[clamp(1rem,2vw,2.7rem)]
          py-[clamp(0.4rem,0.5vw,0.7rem)]
          bg-recruit-7
          rounded-[clamp(0.4rem,0.5vw,0.68rem)]
          text-[clamp(1.2rem,1.5vw,2rem)]
          font-medium
        "
      >
        {data.title}
      </div>

      <p className="text-[clamp(1.1rem,1.4vw,1.8rem)] break-keep whitespace-pre-line">
        {data.explain}
      </p>
    </div>
  );
};

export default ItemVacation;
