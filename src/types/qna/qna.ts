export const QNA_TYPES = ["기획", "디자인", "개발", "기타"] as const;
export type QnaType = (typeof QNA_TYPES)[number];

export interface QnaItem {
  id: number;
  question: string;
  answer: string;
}

export interface QnaCategory {
  id: number;
  type: QnaType;
  qna: QnaItem[];
}
