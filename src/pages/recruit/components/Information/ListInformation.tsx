import type { InformationType } from "@/types/recruit/recruit";
import ItemInformation from "./ItemInformation";

interface ListInformationProps {
  data: InformationType;
}

const ListInformation = ({ data }: ListInformationProps) => {
  return (
    <div className="mb-[clamp(1.2rem,2vw,2rem)] flex w-full flex-col gap-[clamp(1.2rem,1.5vw,2rem)] rounded-[clamp(0.4rem,0.5vw,0.68rem)] border-gradient-box px-[clamp(1.4rem,2.5vw,2.9rem)] py-[clamp(1.4rem,2vw,2.3rem)]">
      {data.map((item) => (
        <ItemInformation key={item.id} data={item} />
      ))}
    </div>
  );
};

export default ListInformation;
