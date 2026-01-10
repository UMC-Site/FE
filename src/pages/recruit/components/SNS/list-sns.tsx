import ItemSNS from "./item-sns";

const ListSNS = ({ item }: any) => {
  const handleClick = () => {
    window.open(item.url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative w-full cursor-pointer" onClick={handleClick}>
      <div
        className="
          absolute left-0 top-0
          bg-[#EC77C6]
          text-white
          text-[1.6rem]
          font-semibold
          px-[1.6rem]
          py-[0.6rem]
          rounded-[1.2rem]
          max-[430px]:text-[1.2rem]
          max-[430px]:px-[1.2rem]
          max-[430px]:py-[0.4rem]
          max-[430px]:rounded-[0.9rem]
        "
      >
        {item.title}
      </div>

      <div className="relative w-full rounded-[1.6rem] max-[430px]:rounded-[1rem]">
        <div
          className="pointer-events-none absolute inset-0 rounded-[1.6rem] max-[430px]:rounded-[1rem]"
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
            rounded-[1.6rem]
            max-[430px]:rounded-[1rem]
            px-[3rem]
            pt-[5.2rem]
            pb-[3.2rem]
            max-[430px]:px-[1.6rem]
            max-[430px]:pt-[4.2rem]
            max-[430px]:pb-[2.4rem]
          "
        >
          <ItemSNS item={item} />
        </div>
      </div>
    </div>
  );
};

export default ListSNS;
