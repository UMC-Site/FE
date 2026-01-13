import ItemRecruitDate from "./ItemRecruitDate";
import type { RecruitDateType } from "@/types/recruit/recruit";

interface ListRecruitDateProps {
  data: RecruitDateType;
}

const ListRecruitDate = ({ data }: ListRecruitDateProps) => {
  return (
    <div className="w-full flex flex-col gap-[clamp(1.2rem,1.5vw,2rem)] px-[clamp(1.4rem,2.5vw,3rem)] py-[clamp(2rem,3vw,3.4rem)] rounded-[clamp(0.4rem,0.5vw,0.68rem)] border-gradient-box">
      {data.map((item) => (
        <ItemRecruitDate key={item.id} data={item} />
      ))}
    </div>
  );
};

export default ListRecruitDate;
