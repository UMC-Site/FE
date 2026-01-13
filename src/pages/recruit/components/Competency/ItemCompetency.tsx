import type { CompetencyItemType } from "@/types/recruit/recruit";

interface ItemCompetencyProps {
  data: CompetencyItemType;
}

const ItemCompetency = ({ data }: ItemCompetencyProps) => {
  return (
    <div className="w-full grid grid-cols-[20%_80%] items-center gap-x-[clamp(2.4rem,4vw,6.4rem)]">
      <p className=" text-[clamp(1.4rem,2vw,2.4rem)]">{data.part}</p>

      <div className="flex flex-wrap items-center gap-[clamp(1rem,1.3vw,1.7rem)]">
        {data.stacks.map((stack) => (
          <div
            key={stack.id}
            className="flex items-center gap-[clamp(0.4rem,0.5vw,0.7rem)]"
          >
            <img
              className="w-[clamp(0.8rem,1vw,1.4rem)] object-contain"
              src={stack.img}
              alt={stack.name}
            />
            <p className="text-[clamp(1.2rem,1.5vw,2rem)]">{stack.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemCompetency;
