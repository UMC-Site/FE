import type { ContentType } from "@/types/recruit/recruit";
import ItemContent from "./ItemContent";

interface ListContentProps {
  data: ContentType;
}

const ListContent = ({ data }: ListContentProps) => {
  return (
    <div className="w-full flex flex-col gap-[clamp(4.8rem,6vw,7.5rem)]">
      {data.map((section) => (
        <ItemContent key={section.id} data={section} />
      ))}
    </div>
  );
};

export default ListContent;
