import type { PeopleType } from "@/types/recruit/recruit";
import ItemPeople from "./ItemPeople";

interface ListpeopleProps {
  data: PeopleType;
}

const ListPeople = ({ data }: ListpeopleProps) => {
  return (
    <div className="w-full flex flex-col gap-[clamp(1.2rem,1.5vw,2rem)] mt-8 px-[clamp(1.4rem,2.5vw,3rem)] py-[clamp(2rem,3vw,3.4rem)] rounded-[clamp(0.4rem,0.5vw,0.68rem)] border-gradient-box">
      {data.map((item) => (
        <ItemPeople key={item.id} data={item} />
      ))}
    </div>
  );
};

export default ListPeople;
