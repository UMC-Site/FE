import { useState } from "react";
import Title from "@/components/Title/Title";
import useNavigation from "@/hooks/useNavigation";
import type { RecruitDataType } from "@/types/recruit/recruit";
import RecruitData from "../../mocks/recruit/recruitData";
import ActiveDate from "./components/ActiveDate/ActiveData";
import Banner from "./components/Banner/Banner";
import Competency from "./components/Competency/Competency";
import Content from "./components/Content/Content";
import Information from "./components/Information/Information";
import Part from "./components/Part/Part";
import People from "./components/People/People";
import RecruitDate from "./components/RecruitDate/RecruitDate";
import SNS from "./components/SNS/SNS";

const Recruit = () => {
  const [recruitData] = useState<RecruitDataType>(RecruitData);
  const { navigateTo } = useNavigation();

  const handleButtonClick = () => {
    navigateTo(recruitData.formUrl, { newTab: true });
  };

  return (
    <div className="flex w-full flex-col items-center">
      <div className="pageContainer">
        <Title text="Recruit" />
      </div>

      <Banner />

      <div className="pageContainer my-[clamp(3.1rem,4vw,5.3rem)] flex flex-col gap-[clamp(6rem,8vw,9.2rem)]">
        <ActiveDate data={recruitData.activeDate} />
        <Part data={recruitData.part} />
        <People data={recruitData.people} />
        <RecruitDate data={recruitData.recruitDate} />
        <Content data={recruitData.content} />
        <Competency data={recruitData.competency} />
        <Information data={recruitData.information} />
        <SNS data={recruitData.sns} />

        <div className="flex justify-center">
          <button
            type="button"
            className="cursor-pointer rounded-[0.8rem] bg-white px-[clamp(6.8rem,15vw,24.4rem)] py-[clamp(1.1rem,2vw,3.1rem)] font-extrabold text-[clamp(1.8rem,1.5vw,3.2rem)] text-footer"
            onClick={handleButtonClick}
          >
            지원하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recruit;
