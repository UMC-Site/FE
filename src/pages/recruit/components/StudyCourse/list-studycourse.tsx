import ItemStudyCourse from "./item-studycourse";

const ListStudyCourse = ({ item }: any) => {
  return (
    <div className="relative w-[82.051rem] max-[430px]:w-full">
      <div
        className="
          absolute
          bg-[#F27ACB]
          px-[1.6rem]
          py-[0.6rem]
          text-[1.6rem]
          font-semibold
          text-white
          rounded-[0.8rem]
          z-10
          max-[430px]:text-[1.2rem]
          max-[430px]:px-[1.2rem]
          max-[430px]:py-[0.4rem]
        "
      >
        {item.title}
      </div>

      <div className="relative w-full rounded-[1.2rem]">
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
            px-[3rem]
            pt-[5.2rem]
            pb-[3.2rem]
            max-[430px]:px-[1.6rem]
            max-[430px]:pt-[3.2rem]
            max-[430px]:pb-[2.4rem]
          "
        >
          <ItemStudyCourse item={item} />
        </div>
      </div>
    </div>
  );
};

export default ListStudyCourse;
