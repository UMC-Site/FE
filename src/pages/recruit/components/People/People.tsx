import type { PeopleType } from "@/types/recruit/recruit";
import Title from "../Title/Title";
import ListPeople from "./ListPeople";

interface PeopleProps {
  data: PeopleType;
}

const People = ({ data }: PeopleProps) => {
  return (
    <div className="flex w-full flex-col">
      <Title text="지원 대상" />

      <div className="flex flex-col gap-[clamp(0.4rem,0.6vw,0.8rem)]">
        <p className="text-[clamp(1.4rem,2vw,2.2rem)]">
          한성대학교 재학생 및 휴학생, 졸업 예정자
        </p>
        <p className="text-[clamp(1.1rem,1.5vw,1.9rem)] text-recruit">
          * 졸업생은 신청이 불가합니다.
        </p>
      </div>

      <ListPeople data={data} />
    </div>
  );
};

export default People;
