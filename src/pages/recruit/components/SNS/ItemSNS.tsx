import type { SNSItemType } from "@/types/recruit/recruit";
import useNavigation from "@/hooks/useNavigation";

interface ItemSNSProps {
  data: SNSItemType;
}

const ItemSNS = ({ data }: ItemSNSProps) => {
  const { navigateTo } = useNavigation();

  const handleClick = () => {
    navigateTo(data.url, { newTab: true });
  };

  return (
    <div className="relative w-full flex flex-col px-[clamp(1.4rem,2vw,2.3rem)] pt-[clamp(3.4rem,4.5vw,5.7rem)] pb-[clamp(1.4rem,1.8vw,2.1rem)] rounded-[clamp(0.4rem,0.5vw,0.68rem)] border-gradient-box">
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

      <p
        className="text-[clamp(1.1rem,2vw,2rem)] truncate cursor-pointer"
        onClick={handleClick}
      >
        {data.explain}
      </p>
    </div>
  );
};

export default ItemSNS;
