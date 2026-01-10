const ItemStudyCourse = ({ item }: any) => {
  return (
    <div className="flex flex-col gap-[1.6rem] max-[430px]:gap-[0.8rem]">
      <p className="text-[2rem] font-[300] leading-[2.6rem] text-[#FFFFFF] max-[430px]:text-[1.2rem] max-[430px]:leading-[1.8rem]">
        {item.explain.split("\n")[0]}
      </p>

      <p className="text-[2rem] font-[300] leading-[2.6rem] text-[#FFFFFF] max-[430px]:text-[1.2rem] max-[430px]:leading-[1.8rem]">
        {item.explain.split("\n")[1]}
      </p>
    </div>
  );
};

export default ItemStudyCourse;
