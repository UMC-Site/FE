import { useEffect, useState } from "react";
import ItemRecruitDate from "./item-recruitdate";

const RecruitDate = ({ data }: any) => {
  const [recruitDate, setRecruitDate] = useState<any[]>([]);

  useEffect(() => {
    setRecruitDate(data?.[0]?.recruitDate ?? []);
  }, [data]);

  return (
    <div className="w-full flex flex-col mt-[7.2rem] gap-[2rem] max-[430px]:mt-[4.4rem] max-[430px]:gap-[1.2rem]">
      <p className="text-[2.6rem] font-bold leading-[3.102rem] text-white max-[430px]:text-[2rem] max-[430px]:leading-[2.387rem]">
        모집 기간
      </p>

      <div className="w-[82.051rem] max-[430px]:w-full">
        <div className="relative w-full rounded-[1.2rem] max-[430px]:rounded-[1.2rem]">
          <div
            className="pointer-events-none absolute inset-0 rounded-[1.2rem] max-[430px]:rounded-[1.2rem]"
            style={{
              padding: "1.7px",
              background: "linear-gradient(90deg, #FF96E5 0%, #995A89 100%)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />

          <div
            className="
              w-full
              rounded-[1.2rem]
              px-[2.4rem] py-[2.8rem]
              max-[430px]:px-[1.2rem] max-[430px]:py-[1.6rem]
            "
          >
            <div className="flex flex-col gap-[2.4rem] max-[430px]:gap-[1.2rem]">
              {recruitDate.map((item: any) => (
                <ItemRecruitDate
                  key={item.id}
                  index={item.id}
                  step={item.step}
                  date={item.date}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitDate;
