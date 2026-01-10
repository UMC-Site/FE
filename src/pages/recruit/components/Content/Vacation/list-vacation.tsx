import ItemVacation from "./item-vacation";

const ListVacation = ({ item }: any) => {
  return (
    <div className="relative w-[82.051rem] max-[430px]:w-full">
      <div
        className="
          absolute
          bg-[#EC77C6]
          text-white
          text-[1.6rem]
          font-semibold
          px-[1.6rem]
          py-[0.6rem]
          rounded-[0.8rem]
          z-10
          max-[430px]:text-[1.2rem]
          max-[430px]:px-[1.2rem]
          max-[430px]:py-[0.4rem]
        "
      >
        {item.title}
      </div>

      <div className="relative w-full rounded-[1.2rem] max-[430px]:rounded-[1.2rem]">
        <div
          className="pointer-events-none absolute inset-0 rounded-[1.2rem]"
          style={{
            padding: "1.7px",
            background: "linear-gradient(90deg, #FF96E5 0%, #995A89 100%)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />

        <div
          className="
            w-full
            rounded-[1.2rem]
            px-[2.4rem]
            pt-[5.2rem]   
            pb-[2.8rem]
            max-[430px]:px-[1.6rem]
            max-[430px]:pt-[4.2rem]
            max-[430px]:pb-[1.6rem]
          "
        >
          <div className="flex flex-col gap-[0.6rem] max-[430px]:gap-[0.2rem]">
            {item.detail.map((detailItem: any) => (
              <ItemVacation key={detailItem.id} explain={detailItem.explain} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListVacation;
