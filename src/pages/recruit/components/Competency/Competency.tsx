import { useEffect, useState } from "react";
import ListCompetency from "./list-competency";

const Competency = ({ data }: any) => {
  const [competency, setCompetency] = useState<any[]>([]);

  useEffect(() => {
    setCompetency(data?.[0]?.competency ?? []);
  }, [data]);

  return (
    <div className="w-full flex flex-col mt-[7.2rem] max-[430px]:mt-[4.4rem]">
      <p className="text-[2.6rem] font-bold leading-[3.102rem] text-[#FFFFFF] max-[430px]:text-[2rem] max-[430px]:leading-[2.387rem]">
        파트별 필요한 역량
      </p>

      <div className="w-full flex flex-col gap-[2.4rem] mt-[2.4rem] max-[430px]:gap-[1.6rem] max-[430px]:mt-[1.2rem]">
        {competency.map((item: any) => (
          <ListCompetency key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Competency;
