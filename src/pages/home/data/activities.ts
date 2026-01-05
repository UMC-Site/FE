import { loadImages } from "@/utils/loadImage";

export interface Activity {
  id: number;
  title: string;
  description: string;
  image: string;
  imageRotate?: boolean;
}

const images = loadImages({
  study: "images/home/study.png",
  pmDay: "images/home/pmDay.png",
  springReview: "images/home/sprintReviewDay.png",
  umcHackathon: "images/home/umcHackathon.png",
  umcon: "images/home/conference.png",
  demoDay: "images/home/demoDay.png",
});

export const ACTIVITIES: Activity[] = [
  {
    id: 1,
    title: "파트별 스터디",
    description:
      "기획, 디자인, 안드로이드, iOS, 웹, 서버 등 6개의 파트로 주 1회 스터디를 진행합니다.",
    image: images.study,
    imageRotate: true,
  },
  {
    id: 2,
    title: "PM Day",
    description:
      "아이디어를 바탕으로 다양한 파트의 팀원이 모여 함께 기획을 발전시킵니다.",
    image: images.pmDay,
  },
  {
    id: 3,
    title: "Spring Review Day",
    description:
      "한 학기 동안의 스터디 성과를 공유하고, 서로의 성장을 축하하는 시간입니다.",
    image: images.springReview,
  },
  {
    id: 4,
    title: "UMC 해커톤",
    description:
      "주어진 시간에 팀이 모여 새로운 아이디어를 발전시키고, 하나의 프로젝트를 개발합니다.",
    image: images.umcHackathon,
  },
  {
    id: 5,
    title: "UMCON",
    description:
      "기획 · 디자인 · 안드로이드 · iOS · 웹 · 서버 각 파트별 유익한 강의를 들을 수 있습니다.",
    image: images.umcon,
  },
  {
    id: 6,
    title: "데모데이 해커톤",
    description:
      "학생들이 기획 · 디자인 · 개발한 서비스를 동료 학생들 앞에서 시연 및 선보입니다.",
    image: images.demoDay,
  },
];
