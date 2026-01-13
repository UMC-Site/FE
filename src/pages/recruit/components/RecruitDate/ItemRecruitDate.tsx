import type { RecruitDateItemType } from "@/types/recruit/recruit";

interface ItemRecruitDateProps {
  data: RecruitDateItemType;
}

const ItemRecruitDate = ({ data }: ItemRecruitDateProps) => {
  return (
    <div className="w-full grid grid-cols-[55%_45%] items-center">
      <div className="flex items-center gap-[clamp(0.75rem,1vw,1.2rem)]">
        <div className="w-[clamp(1.4rem,2vw,2.4rem)] h-[clamp(1.4rem,2vw,2.4rem)] rounded-full bg-white flex items-center justify-center text-[clamp(1rem,1.3vw,1.7rem)] font-semibold text-recruit-4 shrink-0">
          {data.id}
        </div>

        <p className="text-[clamp(1.2rem,1.5vw,2rem)] font-semibold">
          {data.step}
        </p>
      </div>

      <p className="text-[clamp(1.2rem,1.5vw,2rem)]">{data.date}</p>
    </div>
  );
};

export default ItemRecruitDate;
