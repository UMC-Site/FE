const ItemSNS = ({ item }: any) => {
  return (
    <p className="text-[2rem] font-normal leading-[2.387rem] text-[#FFFFFF] max-[430px]:text-[1.2rem] max-[430px]:leading-[1.432rem]">
      {item.explain}
    </p>
  );
};

export default ItemSNS;
