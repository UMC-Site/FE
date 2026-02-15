import type { ContentItemsItemType } from "@/types/recruit/recruit";

interface ItemTermProps {
  data: ContentItemsItemType;
}

const ItemTerm = ({ data }: ItemTermProps) => {
  return (
    <div className="relative flex w-full flex-col items-start rounded-[clamp(0.4rem,0.5vw,0.68rem)] border-gradient-box px-[clamp(1.4rem,2vw,2.4rem)] pt-[clamp(3.4rem,4.6vw,5.7rem)] pb-[clamp(1.4rem,2vw,2.5rem)]">
      <div className="absolute top-0 left-0 w-fit rounded-[clamp(0.4rem,0.5vw,0.68rem)] bg-recruit-7 px-[clamp(1rem,2vw,2.7rem)] py-[clamp(0.4rem,0.5vw,0.7rem)] font-medium text-[clamp(1.2rem,1.5vw,2rem)]">
        {data.title}
      </div>

      <p className="whitespace-pre-line break-keep text-[clamp(1.1rem,1.4vw,1.8rem)]">
        {data.explain}
      </p>
    </div>
  );
};

export default ItemTerm;
