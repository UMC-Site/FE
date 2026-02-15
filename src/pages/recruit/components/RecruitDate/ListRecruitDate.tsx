import type { RecruitDateType } from "@/types/recruit/recruit";
import ItemRecruitDate from "./ItemRecruitDate";

interface ListRecruitDateProps {
  data: RecruitDateType;
}

const ListRecruitDate = ({ data }: ListRecruitDateProps) => {
  return (
    <div className="flex w-full flex-col gap-[clamp(1.2rem,1.5vw,2rem)] rounded-[clamp(0.4rem,0.5vw,0.68rem)] border-gradient-box px-[clamp(1.4rem,2.5vw,3rem)] py-[clamp(2rem,3vw,3.4rem)]">
      {data.map((item) => (
        <ItemRecruitDate key={item.id} data={item} />
      ))}
    </div>
  );
};

export default ListRecruitDate;
