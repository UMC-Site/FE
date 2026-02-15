import PeopleIcon from "@/assets/images/recruit/people/peopleIcon.svg";
import type { PeopleItemType } from "@/types/recruit/recruit";

interface ItemPeopleProps {
  data: PeopleItemType;
}

const ItemPeople = ({ data }: ItemPeopleProps) => {
  return (
    <div className="flex w-full items-start gap-[clamp(0.8rem,1vw,1.3rem)]">
      <img
        src={PeopleIcon}
        alt="peopleIcon"
        className="w-[clamp(1.4rem,2vw,2.4rem)]"
      />

      <p className="-mt-[0.1rem] text-[clamp(1.2rem,1.5vw,2rem)]">
        {data.explain}
      </p>
    </div>
  );
};

export default ItemPeople;
