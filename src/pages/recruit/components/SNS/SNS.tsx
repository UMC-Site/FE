import { useEffect, useState } from "react";
import ListSNS from "./list-sns";

const SNS = ({ data }: any) => {
  const [sns, setSns] = useState<any[]>([]);

  useEffect(() => {
    setSns(data?.[0]?.sns ?? []);
  }, [data]);

  return (
    <div className="w-full flex flex-col mt-[7.2rem] mb-[8rem] max-[430px]:mt-[4.4rem] max-[430px]:mb-[4.7rem]">
      <p className="text-[2.6rem] font-bold leading-[3.102rem] text-[#FFFFFF] max-[430px]:text-[2rem] max-[430px]:leading-[2.387rem]">
        문의처
      </p>

      <div className="w-[82.051rem] max-[430px]:w-full grid grid-cols-2 gap-[2.4rem] mt-[2.4rem] max-[430px]:grid-cols-1 max-[430px]:gap-[1.2rem] max-[430px]:mt-[1.2rem]">
        {sns.map((item: any) => (
          <ListSNS key={item.id} item={item} />
        ))}
      </div>
      <div className="mt-[1.6rem] flex flex-col gap-[0.8rem] max-[430px]:mt-[1.2rem]">
        <p className="text-[#C2C2C2] font-normal text-[1.6rem] leading-[1.909rem] max-[430px]:text-[1.1rem] max-[430px]:leading-[1.313rem]">
          *각 파트에 대한 소개는 UMC 한성대 인스타그램 카드뉴스를 통해 알 수
          있습니다!
        </p>
      </div>
    </div>
  );
};

export default SNS;
