import type { InformationItemType } from "@/types/recruit/recruit";
import InfromationIcon from "@/assets/images/recruit/information/informationIcon.svg";

interface ItemInformationProps {
  data: InformationItemType;
}

const ItemInformation = ({ data }: ItemInformationProps) => {
  return (
    <div className="w-full flex items-start gap-[clamp(0.8rem,1vw,1.36rem)]">
      <img
        src={InfromationIcon}
        alt="informationIcon"
        className="w-[clamp(1.4rem,2vw,2.4rem)]"
      />

      <h3 className="text-[clamp(1.2rem,2vw,2rem)] -mt-1">{data.explain}</h3>
    </div>
  );
};

export default ItemInformation;
