const ItemActiveDate = ({ title, date }: any) => {
  return (
    <div className="w-full flex justify-between items-center">
      <p className="text-[2.2rem] font-normal leading-[2.626rem] text-[#FFFFFF] max-[430px]:text-[1.6rem] max-[430px]:leading-[1.909rem]">
        {title}
      </p>

      <p className="text-[2.2rem] font-semibold leading-[2.626rem] text-[#FFFFFF] max-[430px]:text-[1.6rem] max-[430px]:leading-[1.909rem]">
        {date}
      </p>
    </div>
  );
};

export default ItemActiveDate;
