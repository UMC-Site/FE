import type { InformationType } from "@/types/recruit/recruit";
import Title from "../Title/Title";
import ListInformation from "./ListInformation";

interface InformationProps {
  data: InformationType;
}

const Information = ({ data }: InformationProps) => {
  return (
    <div className="flex w-full flex-col">
      <Title text="활동 안내" />

      <ListInformation data={data} />

      <p className="pl-[clamp(1.2rem,1.4vw,1.6rem)] text-[clamp(1.1rem,1.4vw,1.6rem)] text-recruit">
        *학기 중에 시험 기간을 제외하고 대면으로 매주 진행되며 모두 참여하셔야
        합니다.
      </p>
    </div>
  );
};

export default Information;
