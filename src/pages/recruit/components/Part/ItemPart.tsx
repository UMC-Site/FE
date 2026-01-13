import type { PartItemType } from "@/types/recruit/recruit";

interface ItemPartProps {
  data: PartItemType;
}

const ItemPart = ({ data }: ItemPartProps) => {
  return (
    <div className="w-fit px-[clamp(1.3rem,1.5vw,1.5rem)] py-[clamp(0.6rem,0.8vw,0.8rem)] rounded-full border-[0.1rem] border-banner-bg-4 text-banner-bg-4 text-[clamp(1.4rem,2vw,2.4rem)] font-medium">
      {data.title}
    </div>
  );
};

export default ItemPart;
