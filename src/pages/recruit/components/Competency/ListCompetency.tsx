import type { CompetencyType } from "@/types/recruit/recruit";
import ItemCompetency from "./ItemCompetency";

interface ListCompetencyProps {
  data: CompetencyType;
}

const ListCompetency = ({ data }: ListCompetencyProps) => {
  return (
    <div className="flex w-full flex-col gap-[clamp(1.8rem,2vw,3rem)]">
      {data.map((item) => (
        <ItemCompetency key={item.id} data={item} />
      ))}
    </div>
  );
};

export default ListCompetency;
