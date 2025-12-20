import type { Project } from "@/types/project";
import { getImages, loadImages } from "../../loadImages";

const imageImport = import.meta.glob(
  "@/assets/images/project/project_6/**/*.png",
  {
    eager: true,
  }
);
const img = loadImages(
  imageImport as Record<string, { default: string }>,
  "/src/assets/images/project/project_6/"
);

export const data: Project[] = [
  {
    id: 1,
    type: "6기",
    ...getImages(img, "stepper"),
    project: "https://github.com/UMC-Stepper/Stepper_FE",
    title: "STEPPER",
    detailExplain:
      "딱 맞는 운동 루틴을 만들어 빠르게 회복할 수 있으며, AI를 활용한 통증 부위에 맞는 운동 추천 서비스부터 운동 컨디션 평가까지 만능 재활 맞춤 서비스입니다.",
    people: [
      { id: 1, part: "디자인", name: ["전세원"] },
      { id: 2, part: "안드로이드", name: ["김성민", "박지원"] },
      { id: 3, part: "서버", name: ["민경빈"] },
    ],
    subTitle: [
      { id: 1, name: "일상" },
      { id: 2, name: "재활" },
      { id: 3, name: "Android" },
    ],
  },
  {
    id: 2,
    type: "6기",
    ...getImages(img, "wesave"),
    title: "WE SAVE",
    detailExplain:
      "우리 주변에 발생하는 사건, 사고들을 직접 제보하고 공유하여 우리 주변의 이웃들을 구하는 서비스입니다.",
    people: [
      { id: 1, part: "기획", name: ["김지은"] },
      { id: 2, part: "안드로이드", name: ["임창수"] },
    ],
    subTitle: [
      { id: 1, name: "재난" },
      { id: 2, name: "예방" },
      { id: 3, name: "Android" },
    ],
  },
  {
    id: 3,
    type: "6기",
    ...getImages(img, "kioki"),
    title: "키오키",
    detailExplain:
      "키오스크 이용의 어려움을 해결하기 위해 실제 브랜드의 키오스크 화면을 제공하고 언제든지 이용법을 볼 수 있는 서비스입니다.",
    people: [
      { id: 1, part: "기획", name: ["박세은"] },
      { id: 2, part: "안드로이드", name: ["정예빈"] },
      { id: 3, part: "서버", name: ["이지연"] },
    ],
    subTitle: [
      { id: 1, name: "키오스크" },
      { id: 2, name: "도움" },
      { id: 3, name: "Android" },
    ],
  },
  {
    id: 4,
    type: "6기",
    ...getImages(img, "plancapsule"),
    title: "플랜캡슐",
    detailExplain:
      "흐지부지 잊어버리게 되는 목표를 지속적으로 리마인드 해 이를 이룰 수 있도록 하며, 목표 관리의 빈틈을 채워줄 수 있는 서비스입니다.",
    people: [{ id: 1, part: "디자인", name: ["양유진"] }],
    subTitle: [
      { id: 1, name: "계획" },
      { id: 2, name: "일상" },
      { id: 3, name: "Android" },
    ],
  },
  {
    id: 5,
    type: "6기",
    ...getImages(img, "veganing"),
    title: "비거닝",
    detailExplain:
      "비건의 진입 장벽을 낮추고자 기획되었으며, 비건 레시피/식당 정보 및 레시피 공모기능, 개인맞춤 비건 영양 정보 그래프 분석 제공 서비스입니다.",
    people: [
      { id: 1, part: "디자인", name: ["임채현"] },
      { id: 2, part: "iOS", name: ["김민솔"] },
      { id: 3, part: "서버", name: ["공수민", "송진우"] },
    ],
    subTitle: [
      { id: 1, name: "건강" },
      { id: 2, name: "웰빙" },
      { id: 3, name: "iOS" },
    ],
  },
  {
    id: 6,
    type: "6기",
    ...getImages(img, "seokbakji"),
    project: "https://github.com/SukBakJi/SukBakJi-iOS",
    title: "석박지",
    detailExplain:
      "대학원 진학 희망자, 대학원생, 졸업생을 모두 아울러 정보를 효과적으로 공유할 수 있는 커뮤니티 및 멘토링 서비스입니다.",
    people: [
      { id: 1, part: "디자인", name: ["고하늘"] },
      { id: 2, part: "iOS", name: ["김경민"] },
      { id: 3, part: "서버", name: ["임수진"] },
    ],
    subTitle: [
      { id: 1, name: "취업" },
      { id: 2, name: "커뮤니티" },
      { id: 3, name: "iOS" },
    ],
  },
  {
    id: 7,
    type: "6기",
    ...getImages(img, "routeporter"),
    title: "루트포터",
    detailExplain:
      "AI와 간단한 질문들에 문답을 하며, 취향 기반으로 다양한 여행지를 추천하는 기능을 가지고 있습니다.",
    people: [
      { id: 1, part: "디자인", name: ["송의진"] },
      { id: 2, part: "웹", name: ["윤상혁"] },
    ],
    subTitle: [
      { id: 1, name: "여행" },
      { id: 2, name: "채팅" },
      { id: 3, name: "Web" },
    ],
  },
];
