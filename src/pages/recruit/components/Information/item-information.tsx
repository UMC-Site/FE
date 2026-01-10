import Information1 from "../../../../assets/images/Recruit/Information/information1.png";
import Information2 from "../../../../assets/images/Recruit/Information/information2.png";

const ItemInformation = ({ explain }: { explain: string }) => {
  return (
    <div className="w-full flex gap-[1.36rem] items-center max-[430px]:gap-[0.8rem]">
      <picture>
        <source srcSet={Information2} media="(max-width: 430px)" />
        <img
          className="w-[2.4rem] h-[2.4rem] max-[430px]:w-[1.4rem] max-[430px]:h-[1.4rem]"
          src={Information1}
          alt="information"
        />
      </picture>

      <p className="text-[2rem] font-normal leading-[2.387rem] text-[#FFFFFF] max-[430px]:text-[1.2rem] max-[430px]:leading-[1.432rem]">
        {explain}
      </p>
    </div>
  );
};

export default ItemInformation;
