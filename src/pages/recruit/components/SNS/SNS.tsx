import Title from "../Title/Title";
import ListSNS from "./ListSNS";
import type { SNSType } from "@/types/recruit/recruit";

interface SNSProps {
  data: SNSType;
}

const SNS = ({ data }: SNSProps) => {
  return (
    <div className="w-full flex flex-col">
      <Title text="문의처" />
      <ListSNS data={data} />

      <p className="pl-[clamp(1.2rem,1.4vw,1.6rem)] text-[clamp(1.1rem,1.4vw,1.6rem)] text-recruit">
        *각 파트에 대한 소개는 UMC 한성대 인스타그램 카드뉴스를 통해 알 수
        있습니다!
      </p>
    </div>
  );
};

export default SNS;
