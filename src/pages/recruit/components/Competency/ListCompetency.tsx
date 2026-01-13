import ItemCompetency from "./ItemCompetency";
import type { CompetencyType } from "@/types/recruit/recruit";

interface ListCompetencyProps {
  data: CompetencyType;
}

const ListCompetency = ({ data }: ListCompetencyProps) => {
  return (
    <div className="w-full flex flex-col gap-[clamp(1.8rem,2vw,3rem)]">
      {data.map((item) => (
        <ItemCompetency key={item.id} data={item} />
      ))}
    </div>
  );
};

export default ListCompetency;
