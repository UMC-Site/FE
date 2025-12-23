import type { QnaItem } from "@/types/qna/qna";
import ItemQna from "./ItemQna";

interface ListQnaProps {
  qnaList: QnaItem[];
}

const ListQna = ({ qnaList }: ListQnaProps) => {
  return (
    <div className="mb-[clamp(25.8rem,6vw,27.9rem)] flex w-full flex-col gap-[clamp(2rem,4vw,3.7rem)]">
      {qnaList.map((qna) => (
        <ItemQna key={qna.id} question={qna.question} answer={qna.answer} />
      ))}
    </div>
  );
};

export default ListQna;
