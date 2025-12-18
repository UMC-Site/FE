import ItemQna from "./ItemQna";
import type { QnaItem } from "@/types/qna/qna";

interface ListQnaProps {
  qnaList: QnaItem[];
}

const ListQna = ({ qnaList }: ListQnaProps) => {
  return (
    <div className="w-full flex flex-col gap-[clamp(2rem,4vw,3.7rem)] mb-[clamp(25.8rem,6vw,27.9rem)]">
      {qnaList.map((qna) => (
        <ItemQna key={qna.id} question={qna.question} answer={qna.answer} />
      ))}
    </div>
  );
};

export default ListQna;
