import { useEffect, useState } from "react";
import ItemActiveDate from "./item-activedate";

const ActiveDate = ({ data }: any) => {
  const [activeDate, setActiveDate] = useState<any[]>([]);

  useEffect(() => {
    setActiveDate(data?.[0]?.activeDate ?? []);
  }, [data]);

  return (
    <div className="w-full flex flex-col mt-[4.4rem] max-[430px]:mt-[3.2rem]">
      <p className="text-[2.6rem] font-bold leading-[3.102rem] text-[#FFFFFF] max-[430px]:text-[2rem] max-[430px]:leading-[2.387rem]">
        활동기간
      </p>

      <div className="w-full flex flex-col gap-[1.8rem] mt-[1.8rem] max-[430px]:gap-[1.2rem] max-[430px]:mt-[1.2rem]">
        {activeDate.map((item: any) => (
          <ItemActiveDate key={item.id} title={item.title} date={item.date} />
        ))}
      </div>
    </div>
  );
};

export default ActiveDate;
