import Title from "../Title/Title";
import ListRecruitDate from "./ListRecruitDate";
import type { RecruitDateType } from "@/types/recruit/recruit";

interface RecruitDateProps {
  data: RecruitDateType;
}

const RecruitDate = ({ data }: RecruitDateProps) => {
  return (
    <div className="w-full flex flex-col">
      <Title text="모집 기간" />
      <ListRecruitDate data={data} />
    </div>
  );
};

export default RecruitDate;
