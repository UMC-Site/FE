import type { ContentItemType } from "@/types/recruit/recruit";
import ListTerm from "./Term/ListTerm";
import ListVacation from "./Vacation/ListVacation";

interface ItemContentProps {
  data: ContentItemType;
}

const ItemContent = ({ data }: ItemContentProps) => {
  return (
    <div className="flex w-full flex-col gap-[clamp(1.8rem,2.5vw,3.4rem)]">
      <h3 className="font-semibold text-[clamp(1.6rem,2vw,2.4rem)]">
        {data.season}
      </h3>

      {data.season === "학기 중" ? (
        <ListTerm data={data.items} />
      ) : (
        <ListVacation data={data.items} />
      )}
    </div>
  );
};

export default ItemContent;
