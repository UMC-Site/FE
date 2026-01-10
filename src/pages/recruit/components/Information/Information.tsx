import { useEffect, useState } from "react";
import ItemInformation from "./item-information";

const Information = ({ data }: any) => {
  const [information, setInformation] = useState<any[]>([]);

  useEffect(() => {
    setInformation(data?.[0]?.information ?? []);
  }, [data]);

  return (
    <div className="w-full flex flex-col mt-[7.2rem] max-[430px]:mt-[4.4rem]">
      <p className="text-[2.6rem] font-bold leading-[3.102rem] text-[#FFFFFF] max-[430px]:text-[2rem] max-[430px]:leading-[2.387rem]">
        활동 안내
      </p>

      <div className="w-[82.051rem] max-[430px]:w-full mt-[2.4rem] max-[430px]:mt-[1.2rem]">
        <div className="relative w-full rounded-[1.6rem] max-[430px]:rounded-[1rem]">
          <div
            className="pointer-events-none absolute inset-0 rounded-[1.6rem] max-[430px]:rounded-[1rem]"
            style={{
              padding: "0.17rem",
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
              rounded-[1.6rem]
              px-[3rem]
              py-[2.4rem]
              max-[430px]:rounded-[1rem]
              max-[430px]:px-[1.8rem]
              max-[430px]:py-[1.6rem]
            "
          >
            <div className="w-full flex flex-col gap-[2.4rem] max-[430px]:gap-[1.2rem]">
              {information.map((item: any) => (
                <ItemInformation key={item.id} explain={item.explain} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[1.6rem] flex flex-col gap-[0.8rem] max-[430px]:mt-[1.2rem]">
        <p className="text-[#C2C2C2] font-normal text-[1.6rem] leading-[1.909rem] max-[430px]:text-[1.1rem] max-[430px]:leading-[1.313rem]">
          *학기 중에 시험 기간을 제외하고 대면으로 매주 진행되며 모두 참여하셔야
          합니다.
        </p>
      </div>
    </div>
  );
};

export default Information;
