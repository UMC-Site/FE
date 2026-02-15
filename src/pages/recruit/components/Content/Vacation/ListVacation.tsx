import type { ContentItemsType } from "@/types/recruit/recruit";
import ItemVacation from "./ItemVacation";

interface ListVacationProps {
  data: ContentItemsType;
}

const ListVacation = ({ data }: ListVacationProps) => {
  return (
    <div className="flex w-full flex-col gap-[clamp(1.2rem,1.5vw,2rem)]">
      {data.map((item) => (
        <ItemVacation key={item.id} data={item} />
      ))}
    </div>
  );
};

export default ListVacation;
