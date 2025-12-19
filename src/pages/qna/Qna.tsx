import { useState } from "react";
import Title from "@/components/Title/Title";
import { QnaData } from "@/mocks/qna/qnaData";
import ListFilter from "./components/Filter/ListFilter";
import ListQna from "./components/Qna/ListQna";
import type { QnaType } from "@/types/qna/qna";
import { QNA_TYPES } from "@/types/qna/qna";

const Qna = () => {
  const [selectedType, setSelectedType] = useState<QnaType>("기획");

  const selectedQna =
    QnaData.find((item) => item.type === selectedType)?.qna ?? [];

  return (
    <div className="pageContainer">
      <Title text="FAQ" />

      <ListFilter
        types={QNA_TYPES}
        selectedType={selectedType}
        onSelectType={setSelectedType}
      />

      <ListQna qnaList={selectedQna} />
    </div>
  );
};

export default Qna;
