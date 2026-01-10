import { useEffect, useState } from "react";
import ListStudyCourse from "./list-studycourse";

const StudyCourse = ({ data }: any) => {
  const [studyCourse, setStudyCourse] = useState<any[]>([]);

  useEffect(() => {
    setStudyCourse(data?.[0]?.studyCourse ?? []);
  }, [data]);

  return (
    <div className="w-full flex flex-col mt-[7.2rem] max-[430px]:mt-[4.4rem]">
      <p className="text-[2.6rem] font-bold leading-[3.102rem] text-[#FFFFFF] max-[430px]:text-[2rem] max-[430px]:leading-[2.387rem]">
        방중
      </p>

      <div className="w-full flex flex-col gap-[1.6rem] mt-[2.4rem] max-[430px]:gap-[1.2rem] max-[430px]:mt-[1.2rem]">
        {studyCourse.map((item: any) => (
          <ListStudyCourse key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default StudyCourse;
