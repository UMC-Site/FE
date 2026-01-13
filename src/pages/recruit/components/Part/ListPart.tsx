import type { PartType } from "@/types/recruit/recruit";
import ItemPart from "./ItemPart";

interface ListPartProps {
  data: PartType;
}

const ListPart = ({ data }: ListPartProps) => {
  const chunked = [];
  for (let i = 0; i < data.length; i += 4) {
    chunked.push(data.slice(i, i + 4));
  }

  return (
    <>
      <div className="w-full hidden min-[769px]:flex flex-wrap items-center gap-[clamp(1rem,2vw,3.2rem)]">
        {data.map((item) => (
          <ItemPart key={item.id} data={item} />
        ))}
      </div>

      <div className="w-full flex flex-col gap-[clamp(1rem,2vw,2rem)] min-[769px]:hidden">
        {chunked.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="w-full flex items-center gap-[clamp(1rem,2vw,3.2rem)]"
          >
            {row.map((item) => (
              <ItemPart key={item.id} data={item} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default ListPart;
