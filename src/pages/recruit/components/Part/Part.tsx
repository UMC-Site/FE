import { useEffect, useState } from "react";
import ListPart from "./list-part";

const PART_ORDER = ["Plan", "Design", "Android", "Web", "iOS", "Springboot"];

const TITLE_MAP: Record<string, string> = {
  PM: "Plan",
  Designer: "Design",
  Android: "Android",
  Web: "Web",
  iOS: "iOS",
  Spring: "Springboot",
};

const Part = ({ data }: any) => {
  const [part, setPart] = useState<any[]>([]);

  useEffect(() => {
    const rawPart = data?.[0]?.part ?? [];

    const normalized = rawPart
      .map((item: any) => ({
        ...item,
        title: TITLE_MAP[item.title],
      }))
      .filter((item: any) => item.title);

    const ordered = PART_ORDER.map((title) =>
      normalized.find((item: any) => item.title === title)
    ).filter(Boolean);

    setPart(ordered);
  }, [data]);

  return (
    <div className="w-full flex flex-col mt-[7.2rem] max-[430px]:mt-[4.4rem]">
      <p className="text-[2.6rem] font-bold leading-[3.102rem] text-white max-[430px]:text-[2rem] max-[430px]:leading-[2.387rem]">
        모집 파트
      </p>

      <div
        className="
          flex flex-nowrap
          gap-[1.6rem]
          mt-[2.4rem]
          max-[430px]:flex-wrap
          max-[430px]:gap-[0.8rem]
          max-[430px]:mt-[1.2rem]
        "
      >
        {part.map((item: any) => (
          <ListPart key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Part;
