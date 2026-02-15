import useNavigation from "@/hooks/useNavigation";
import type { SNSItemType } from "@/types/recruit/recruit";

interface ItemSNSProps {
  data: SNSItemType;
}

const ItemSNS = ({ data }: ItemSNSProps) => {
  const { navigateTo } = useNavigation();

  const handleClick = () => {
    navigateTo(data.url, { newTab: true });
  };

  return (
    <div className="relative flex w-full flex-col rounded-[clamp(0.4rem,0.5vw,0.68rem)] border-gradient-box px-[clamp(1.4rem,2vw,2.3rem)] pt-[clamp(3.4rem,4.5vw,5.7rem)] pb-[clamp(1.4rem,1.8vw,2.1rem)]">
      <div className="absolute top-0 left-0 w-fit rounded-[clamp(0.4rem,0.5vw,0.68rem)] bg-recruit-7 px-[clamp(1rem,2vw,2.7rem)] py-[clamp(0.4rem,0.5vw,0.7rem)] font-medium text-[clamp(1.2rem,1.5vw,2rem)]">
        {data.title}
      </div>

      <button
        type="button"
        className="truncate text-left text-[clamp(1.1rem,2vw,2rem)]"
        onClick={handleClick}
      >
        {data.explain}
      </button>
    </div>
  );
};

export default ItemSNS;
