import { useEffect, useState } from "react";
import ItemPeople from "./item-people";

const People = ({ data }: any) => {
  const [people, setPeople] = useState<any[]>([]);

  useEffect(() => {
    setPeople(data?.[0]?.people ?? []);
  }, [data]);

  return (
    <div className="w-full flex flex-col mt-[7.2rem] gap-[2rem] max-[430px]:mt-[4.4rem] max-[430px]:gap-[1.2rem]">
      <p className="text-[2.6rem] font-bold leading-[3.102rem] text-white max-[430px]:text-[2rem] max-[430px]:leading-[2.387rem]">
        지원대상
      </p>

      <p className="text-[2.2rem] font-normal leading-[2.626rem] text-white max-[430px]:text-[1.4rem] max-[430px]:leading-[1.671rem]">
        한성대학교 재학생 및 휴학생, 졸업 예정자
      </p>

      <p className="mt-[-1.6rem] text-[#C2C2C2] font-normal text-[1.6rem] leading-[1.909rem] max-[430px]:mt-[-0.4rem] max-[430px]:text-[1.1rem] max-[430px]:leading-[1.313rem]">
        * 졸업생은 신청이 불가합니다.
      </p>

      <div className="w-[82.051rem] max-[430px]:w-full">
        <div className="relative w-full rounded-[1.2rem] max-[430px]:rounded-[1.2rem]">
          <div
            className="pointer-events-none absolute inset-0 rounded-[1.2rem] max-[430px]:rounded-[1.2rem]"
            style={{
              padding: "1.7px", // ✅ 기존 border 두께 그대로
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
            <div className="flex flex-col gap-[1.6rem] max-[430px]:gap-[0.8rem]">
              {people.map((item: any) => (
                <ItemPeople key={item.id} explain={item.explain} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
