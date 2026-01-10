const ItemCompetency = ({ item }: any) => {
  return (
    <div
      className="
        w-full
        grid
        grid-cols-[12rem_1fr]
        gap-x-[6.4rem]
        items-center
        max-[430px]:grid-cols-[12rem_1fr]
        max-[430px]:gap-x-[2.4rem]
      "
    >
      <p className="text-white font-normal text-[2.4rem] leading-[2.9rem] max-[430px]:text-[1.8rem] max-[430px]:leading-[2.2rem]">
        {item.part}
      </p>

      <div className="flex items-center gap-[2.4rem] justify-self-start max-[430px]:gap-[1.6rem]">
        {item.stacks?.map((s: any) => (
          <div key={s.id} className="flex items-center gap-[0.6rem]">
            <img
              className="w-[2.8rem] h-[2.8rem] object-contain max-[430px]:w-[2.2rem] max-[430px]:h-[2.2rem]"
              src={s.img}
              alt={s.name}
            />
            <p className="text-white font-normal text-[2.1rem] leading-[2.5rem] max-[430px]:text-[1.5rem] max-[430px]:leading-[1.8rem]">
              {s.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemCompetency;
