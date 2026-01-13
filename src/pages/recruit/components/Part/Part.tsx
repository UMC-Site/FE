import type { PartType } from "@/types/recruit/recruit";
import Title from "../Title/Title";
import ListPart from "./ListPart";

interface PartProps {
  data: PartType;
}

const Part = ({ data }: PartProps) => {
  return (
    <div className="w-full flex flex-col">
      <Title text="모집 파트" />
      <ListPart data={data} />
    </div>
  );
};

export default Part;
