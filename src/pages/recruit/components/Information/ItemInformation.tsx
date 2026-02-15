import InfromationIcon from "@/assets/images/recruit/information/informationIcon.svg";
import type { InformationItemType } from "@/types/recruit/recruit";

interface ItemInformationProps {
  data: InformationItemType;
}

const ItemInformation = ({ data }: ItemInformationProps) => {
  return (
    <div className="flex w-full items-start gap-[clamp(0.8rem,1vw,1.36rem)]">
      <img
        src={InfromationIcon}
        alt="informationIcon"
        className="w-[clamp(1.4rem,2vw,2.4rem)]"
      />

      <h3 className="-mt-1 text-[clamp(1.2rem,2vw,2rem)]">{data.explain}</h3>
    </div>
  );
};

export default ItemInformation;
