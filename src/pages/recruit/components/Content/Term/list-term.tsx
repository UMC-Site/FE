import ItemTerm from "./item-term";

const ListTerm = ({ item }: any) => {
  return (
    <div className="relative w-[82.051rem] max-[430px]:w-full">
      <div
        className="
          absolute
          top-[-1.4rem]
          left-[2.4rem]
          bg-[#F27ACB]
          px-[1.6rem]
          py-[0.6rem]
          rounded-[0.8rem]
          text-[1.6rem]
          font-semibold
          text-white
          max-[430px]:text-[1.2rem]
          max-[430px]:px-[1.2rem]
          max-[430px]:py-[0.4rem]
        "
      >
        {item.title}
      </div>

      <div
        className="
          w-full
          rounded-[1.2rem]
          border-[1.7px]
          px-[2.4rem]
          pt-[5.2rem]
          pb-[2.8rem]
          max-[430px]:px-[1.6rem]
          max-[430px]:pt-[4.2rem]
          max-[430px]:pb-[1.6rem]
        "
        style={{
          borderImage: "linear-gradient(90deg, #FF96E5 0%, #995A89 100%) 1",
        }}
      >
        <div className="flex flex-col gap-[0.6rem] max-[430px]:gap-[0.2rem]">
          {item.detail.map((detailItem: any) => (
            <ItemTerm key={detailItem.id} explain={detailItem.explain} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListTerm;
