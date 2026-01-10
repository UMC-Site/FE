import ItemCompetency from "./item-competency";

const ListCompetency = ({ item }: any) => {
  return (
    <div className="w-[82.051rem] max-[430px]:w-full">
      <ItemCompetency item={item} />
    </div>
  );
};

export default ListCompetency;
