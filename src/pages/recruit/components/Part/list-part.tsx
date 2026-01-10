const ListPart = ({ item }: any) => {
  return (
    <div
      className="
        px-[2.4rem] py-[1rem]
        rounded-full
        border-[1.4px] border-[#FF96E5]
        text-[#FF96E5]
        text-[1.8rem] font-medium
        leading-[2.148rem]
        whitespace-nowrap
        cursor-pointer
        transition-all
        hover:bg-[#FF96E5]/10
        max-[430px]:px-[1.6rem]
        max-[430px]:py-[0.6rem]
        max-[430px]:text-[1.2rem]
      "
    >
      {item.title}
    </div>
  );
};

export default ListPart;
