import { useState } from "react";
import RecruitData from "../../mocks/recruit/recruitData";
import type { RecruitDataType } from "@/types/recruit/recruit";
import Title from "@/components/Title/Title";
import Banner from "./components/Banner/Banner";
import People from "./components/People/People";
import Part from "./components/Part/Part";
import ActiveDate from "./components/ActiveDate/ActiveData";
import RecruitDate from "./components/RecruitDate/RecruitDate";
import Content from "./components/Content/Content";
import Competency from "./components/Competency/Competency";
import Information from "./components/Information/Information";
import SNS from "./components/SNS/SNS";
import useNavigation from "@/hooks/useNavigation";

const Recruit = () => {
  const [recruitData, setRecruitData] = useState<RecruitDataType>(RecruitData);
  const { navigateTo } = useNavigation();

  const handleButtonClick = () => {
    navigateTo(recruitData.formUrl, { newTab: true });
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="pageContainer">
        <Title text="Recruit" />
      </div>

      <Banner />

      <div className="pageContainer flex flex-col gap-[clamp(6rem,8vw,9.2rem)] my-[clamp(3.1rem,4vw,5.3rem)]">
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
            className="px-[clamp(6.8rem,15vw,24.4rem)] py-[clamp(1.1rem,2vw,3.1rem)] bg-white rounded-[0.8rem] font-extrabold text-footer text-[clamp(1.8rem,1.5vw,3.2rem)] cursor-pointer"
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
