import type { RecruitDateType } from "@/types/recruit/recruit";
import Title from "../Title/Title";
import ListRecruitDate from "./ListRecruitDate";

interface RecruitDateProps {
  data: RecruitDateType;
}

const RecruitDate = ({ data }: RecruitDateProps) => {
  return (
    <div className="flex w-full flex-col">
      <Title text="모집 기간" />
      <ListRecruitDate data={data} />
    </div>
  );
};

export default RecruitDate;
