import conferenceImg from "@/assets/images/home/conference.png";
import demoDayImg from "@/assets/images/home/demoDay.png";
import pmDayImg from "@/assets/images/home/pmDay.png";
import studyImg from "@/assets/images/home/study.png";
import umcHackathonImg from "@/assets/images/home/umcHackathon.png";

export interface Activity {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const ACTIVITIES: Activity[] = [
  {
    id: 1,
    title: "파트별 스터디",
    description:
      "기획, 디자인, 서버, 안드로이드, 웹, iOS 등 6개의 파트로 주 1회 스터디를 진행합니다.",
    image: studyImg,
  },
  {
    id: 2,
    title: "PM Day",
    description:
      "아이디어를 바탕으로 다양한 파트의 팀원이 모여 함께 기획을 발전시킵니다.",
    image: pmDayImg,
  },
  {
    id: 3,
    title: "UMC 해커톤",
    description:
      "주어진 시간에 팀이 모여 새로운 아이디어를 발전시키고, 하나의 프로젝트를 개발합니다.",
    image: umcHackathonImg,
  },
  {
    id: 4,
    title: "파트별 컨퍼런스",
    description:
      "기획 · 디자인 · 안드로이드 · iOS · 웹 · 서버 각 파트별 유익한 강의를 들을 수 있습니다.",
    image: conferenceImg,
  },
  {
    id: 5,
    title: "데모데이 해커톤",
    description:
      "학생들이 기획 · 디자인 · 개발한 서비스를 동료 학생들 앞에서 시연 및 선보입니다.",
    image: demoDayImg,
  },
];
