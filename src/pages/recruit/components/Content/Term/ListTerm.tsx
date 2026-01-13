import type { ContentItemsType } from "@/types/recruit/recruit";
import ItemTerm from "./ItemTerm";

interface ListTermProps {
  data: ContentItemsType;
}

const ListTerm = ({ data }: ListTermProps) => {
  return (
    <div className="w-full flex flex-col gap-[clamp(1.2rem,1.5vw,2rem)]">
      {data.map((item) => (
        <ItemTerm key={item.id} data={item} />
      ))}

      <div className="flex flex-col pl-[clamp(1.2rem,1.4vw,1.6rem)] text-[clamp(1.1rem,1.4vw,1.6rem)] text-recruit break-keep">
        <p>*스스로 작업해서 체득하는 시간이 꼭 필요합니다!</p>
        <p>*스스로의 학습이 필요하기 때문에, 파트 별 기초 지식이 필요합니다!</p>
      </div>
    </div>
  );
};

export default ListTerm;
