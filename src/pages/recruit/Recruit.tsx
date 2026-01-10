import { useEffect, useState } from "react";
import RecruitData, {
  type RecruitDataType,
} from "../../utils/Recruit/recruitData";

import Banner from "./components/Banner/Banner";
import People from "./components/People/People";
import Part from "./components/Part/Part";
import ActiveDate from "./components/ActiveDate/ActiveData";
import RecruitDate from "./components/RecruitDate/RecruitDate";
import Content from "./components/Content/Content";
import StudyCourse from "./components/StudyCourse/StudyCourse";
import Competency from "./components/Competency/Competency";
import Information from "./components/Information/Information";
import SNS from "./components/SNS/SNS";

const Recruit = () => {
  const [recruitData, setRecruitData] = useState<RecruitDataType>(RecruitData);

  useEffect(() => {
    setRecruitData(RecruitData);
  }, []);

  const handleButtonClick = () => {
    window.open(
      "https://forms.gle/xmwvr6PgY3hjdTJ88",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="pageContainerRecruit flex flex-col items-center">
      <p className="w-[60%] text-[3.6rem] font-medium leading-[4.296rem] text-[#FFFFFF] mt-[3rem] max-[430px]:text-[2.8rem] max-[430px]:leading-[3.341rem] max-[430px]:mt-[2.441rem] max-[430px]:w-[92%]">
        Recruit
      </p>

      <Banner />

      <div className="w-[60%] max-[430px]:w-[92%]">
        <ActiveDate data={recruitData} />
        <Part data={recruitData} />
        <People data={recruitData} />
        <RecruitDate data={recruitData} />
      </div>

      <div className="w-[60%] max-[430px]:w-[92%]">
        <Content data={recruitData} />
        <StudyCourse data={recruitData} />
        <Competency data={recruitData} />
        <Information data={recruitData} />
        <SNS data={recruitData} />
      </div>

      <div
        className="w-[60rem] h-[10rem] border-0 rounded-[0.8rem] flex justify-center items-center text-center font-[Pretendard] text-[3.2rem] font-extrabold leading-[3.819rem] text-[#0A0A0A] bg-[#eeeeff] m-[13.898rem_0_8rem_0] cursor-pointer transition-colors duration-[300ms] ease-in-out hover:bg-[#e0e1ff] max-[430px]:w-[20rem] max-[430px]:h-[4.4rem] max-[430px]:rounded-[0.4rem] max-[430px]:text-[1.8rem] max-[430px]:leading-[2.148rem] max-[430px]:m-[6rem_0_4.7rem_0]"
        onClick={handleButtonClick}
      >
        지원하기
      </div>
    </div>
  );
};

export default Recruit;
