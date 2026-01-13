import type { SNSType } from "@/types/recruit/recruit";
import ItemSNS from "./ItemSNS";

interface ListSNSProps {
  data: SNSType;
}

const ListSNS = ({ data }: ListSNSProps) => {
  return (
    <div
      className="
        w-full
        grid grid-cols-2
        gap-[clamp(1.3rem,2vw,2rem)]
        mb-[clamp(1.2rem,2vw,2rem)]
        max-[430px]:grid-cols-1
      "
    >
      {data.map((item) => (
        <ItemSNS key={item.id} data={item} />
      ))}
    </div>
  );
};

export default ListSNS;
