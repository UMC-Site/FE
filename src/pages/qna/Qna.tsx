import { useState } from "react";
import Title from "@/components/Title/Title";
import { QnaData } from "@/mocks/qna/qnaData";
import type { QnaType } from "@/types/qna/qna";
import { QNA_TYPES } from "@/types/qna/qna";
import ListFilter from "./components/Filter/ListFilter";
import ListQna from "./components/Qna/ListQna";

const Qna = () => {
  const [selectedType, setSelectedType] = useState<QnaType>("기획");

  const selectedQna =
    QnaData.find((item) => item.type === selectedType)?.qna ?? [];

  return (
    <div className="pageContainer flex flex-col gap-y-[clamp(1.62rem,4vw,3.73rem)] pb-[clamp(25.8rem,6vw,27.9rem)]">
      <Title text="QnA" />

      <ListFilter
        types={QNA_TYPES}
        selectedType={selectedType}
        onSelectType={setSelectedType}
      />

      <ListQna key={selectedType} qnaList={selectedQna} />
    </div>
  );
};

export default Qna;
