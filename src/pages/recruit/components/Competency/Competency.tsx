import type { CompetencyType } from "@/types/recruit/recruit";
import Title from "../Title/Title";
import ListCompetency from "./ListCompetency";

interface CompetencyProps {
  data: CompetencyType;
}

const Competency = ({ data }: CompetencyProps) => {
  return (
    <div className="flex w-full flex-col">
      <Title text="파트별 필요한 역량" />
      <ListCompetency data={data} />
    </div>
  );
};

export default Competency;
