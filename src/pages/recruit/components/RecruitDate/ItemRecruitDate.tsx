import type { RecruitDateItemType } from "@/types/recruit/recruit";

interface ItemRecruitDateProps {
  data: RecruitDateItemType;
}

const ItemRecruitDate = ({ data }: ItemRecruitDateProps) => {
  return (
    <div className="grid w-full grid-cols-[55%_45%] items-center">
      <div className="flex items-center gap-[clamp(0.75rem,1vw,1.2rem)]">
        <div className="flex h-[clamp(1.4rem,2vw,2.4rem)] w-[clamp(1.4rem,2vw,2.4rem)] shrink-0 items-center justify-center rounded-full bg-white font-semibold text-[clamp(1rem,1.3vw,1.7rem)] text-recruit-4">
          {data.id}
        </div>

        <p className="font-semibold text-[clamp(1.2rem,1.5vw,2rem)]">
          {data.step}
        </p>
      </div>

      <p className="text-[clamp(1.2rem,1.5vw,2rem)]">{data.date}</p>
    </div>
  );
};

export default ItemRecruitDate;
