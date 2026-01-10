import People1 from "../../../../assets/images/Recruit/People/people1.png";
import People2 from "../../../../assets/images/Recruit/People/people2.png";

const ItemPeople = ({ explain }: { explain: string }) => {
  return (
    <div className="w-full flex items-start gap-[0.8rem]">
      <picture>
        <source srcSet={People2} media="(max-width: 430px)" />
        <img
          className="w-[2.4rem] max-[430px]:w-[1.8rem]"
          src={People1}
          alt="people"
        />
      </picture>

      <p className="text-[2rem] font-[300] leading-[2.387rem] max-[430px]:text-[1.2rem] max-[430px]:leading-[2rem]">
        {explain}
      </p>
    </div>
  );
};

export default ItemPeople;
