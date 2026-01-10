import { useEffect, useState } from "react";
import ListTerm from "./Term/list-term";
import ListVacation from "./Vacation/list-vacation";

const Content = ({ data }: any) => {
  const [content, setContent] = useState<any[]>([]);

  useEffect(() => {
    setContent(data?.[0]?.content ?? []);
  }, [data]);

  return (
    <div className="w-full flex flex-col mt-[7.2rem] max-[430px]:mt-[4.4rem]">
      <p className="text-[2.6rem] font-bold leading-[3.102rem] text-[#FFFFFF] max-[430px]:text-[2rem] max-[430px]:leading-[2.387rem]">
        학기중
      </p>

      <div className="w-full flex flex-col gap-[1.6rem] mt-[2.4rem] max-[430px]:gap-[1.2rem] max-[430px]:mt-[1.2rem]">
        {content.map((item: any) =>
          item.title === "학기 중" ? (
            <ListTerm key={item.id} item={item} />
          ) : (
            <ListVacation key={item.id} item={item} />
          )
        )}
      </div>

      <div className="mt-[1.6rem] flex flex-col gap-[0.8rem] max-[430px]:mt-[1.2rem]">
        <p className="text-[#C2C2C2] font-normal text-[1.6rem] leading-[1.909rem] max-[430px]:text-[1.1rem] max-[430px]:leading-[1.313rem]">
          *스스로 작업해서 체득하는 시간이 꼭 필요합니다!
        </p>

        <p className="text-[#C2C2C2] font-normal text-[1.6rem] leading-[1.909rem] max-[430px]:text-[1.1rem] max-[430px]:leading-[1.313rem]">
          *스스로의 학습이 필요하기 때문에, 파트 별 기초 지식이 필요합니다!
        </p>
      </div>
    </div>
  );
};

export default Content;
