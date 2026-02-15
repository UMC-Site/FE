import type { ActiveDateType } from "@/types/recruit/recruit";
import Title from "../Title/Title";

interface activeDateProps {
  data: ActiveDateType;
}

const ActiveDate = ({ data }: activeDateProps) => {
  return (
    <div className="flex w-full flex-col">
      <Title text="활동 기간" />
      <p className="text-[clamp(1.4rem,2vw,2.2rem)]">{data.title}</p>
    </div>
  );
};

export default ActiveDate;
