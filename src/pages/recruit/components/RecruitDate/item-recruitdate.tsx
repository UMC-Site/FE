const ItemRecruitDate = ({
  index,
  step,
  date,
}: {
  index: number;
  step: string;
  date: string;
}) => {
  return (
    <div className="w-full grid grid-cols-[auto_26rem] items-center">
      <div className="flex items-start gap-[0.8rem]">
        <div
          className="
            w-[2.4rem] h-[2.4rem]
            rounded-full
            border border-white
            flex items-center justify-center
            text-[1.4rem] font-semibold text-white
            max-[430px]:w-[1.8rem] max-[430px]:h-[1.8rem]
            max-[430px]:text-[1rem]
          "
        >
          {index}
        </div>

        <p className="text-[2rem] font-[300] leading-[2.387rem] text-white max-[430px]:text-[1.2rem] max-[430px]:leading-[2rem]">
          {step}
        </p>
      </div>

      <p className="text-[2rem] font-medium text-white text-left ml-[-6rem] max-[430px]:text-[1.2rem]">
        {date}
      </p>
    </div>
  );
};

export default ItemRecruitDate;
