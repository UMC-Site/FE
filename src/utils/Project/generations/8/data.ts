import type { Project } from "@/types/project";
import { getImages, loadImages } from "../../loadImages";

const imageImport = import.meta.glob(
  "@/assets/images/project/project_8/**/*.png",
  {
    eager: true,
  }
);
const img = loadImages(
  imageImport as Record<string, { default: string }>,
  "/src/assets/images/project/project_8/"
);

export const data: Project[] = [
  {
    id: 19,
    type: "8기",
    ...getImages(img, "linku"),
    project: "https://github.com/LinkYou-2025",
    title: "링큐",
    detailExplain:
      "사용자의 라이프스타일에 맞춰 AI가 링크를 요약·분류·추천하고, 맞춤형 큐레이션을 제공하는 앱 서비스입니다.",
    people: [{ id: 1, part: "서버", name: ["김하진"] }],
    subTitle: [
      { id: 1, name: "링크" },
      { id: 2, name: "큐레이션" },
      { id: 3, name: "Android" },
    ],
  },
  {
    id: 20,
    type: "8기",
    ...getImages(img, "teumteum"),
    title: "틈틈",
    detailExplain:
      "바쁜 일상 속 짧은 시간을 활용해 자기 계발할 수 있는 마이크로 러닝 서비스입니다.",
    people: [{ id: 1, part: "안드로이드", name: ["이승현"] }],
    subTitle: [
      { id: 1, name: "학습" },
      { id: 2, name: "자기계발" },
      { id: 3, name: "Android" },
    ],
  },
  {
    id: 21,
    type: "8기",
    ...getImages(img, "eatPic"),
    title: "잇픽",
    detailExplain:
      "음식 사진을 촬영하면 AI가 분석하여 칼로리와 영양 정보를 제공하는 식단 관리 서비스입니다.",
    people: [{ id: 1, part: "iOS", name: ["박지원"] }],
    subTitle: [
      { id: 1, name: "건강" },
      { id: 2, name: "식단" },
      { id: 3, name: "iOS" },
    ],
  },
  {
    id: 22,
    type: "8기",
    ...getImages(img, "dontTouch"),
    title: "돈터치",
    detailExplain:
      "스마트폰 사용을 줄이고 집중력을 높이기 위한 디지털 디톡스 앱 서비스입니다.",
    people: [{ id: 1, part: "안드로이드", name: ["김민수"] }],
    subTitle: [
      { id: 1, name: "집중" },
      { id: 2, name: "습관" },
      { id: 3, name: "Android" },
    ],
  },
  {
    id: 23,
    type: "8기",
    ...getImages(img, "commit"),
    title: "커밋",
    detailExplain:
      "개발자들의 깃허브 활동을 시각화하고 동기 부여를 제공하는 서비스입니다.",
    people: [{ id: 1, part: "웹", name: ["이태현"] }],
    subTitle: [
      { id: 1, name: "개발" },
      { id: 2, name: "깃허브" },
      { id: 3, name: "Web" },
    ],
  },
  {
    id: 24,
    type: "8기",
    ...getImages(img, "nook"),
    title: "눅",
    detailExplain:
      "나만의 아늑한 공간에서 독서와 기록을 함께하는 독서 기록 서비스입니다.",
    people: [{ id: 1, part: "iOS", name: ["정수현"] }],
    subTitle: [
      { id: 1, name: "독서" },
      { id: 2, name: "기록" },
      { id: 3, name: "iOS" },
    ],
  },
  {
    id: 25,
    type: "8기",
    ...getImages(img, "kkukmoa"),
    title: "꿈모아",
    detailExplain:
      "꿈을 기록하고 분석하여 자기 이해를 돕는 드림 다이어리 서비스입니다.",
    people: [{ id: 1, part: "안드로이드", name: ["박서연"] }],
    subTitle: [
      { id: 1, name: "꿈" },
      { id: 2, name: "기록" },
      { id: 3, name: "Android" },
    ],
  },
  {
    id: 26,
    type: "8기",
    ...getImages(img, "myFit"),
    title: "마이핏",
    detailExplain:
      "개인 맞춤형 운동 루틴을 제공하고 운동 기록을 관리하는 피트니스 서비스입니다.",
    people: [{ id: 1, part: "안드로이드", name: ["최영준"] }],
    subTitle: [
      { id: 1, name: "운동" },
      { id: 2, name: "건강" },
      { id: 3, name: "Android" },
    ],
  },
  {
    id: 27,
    type: "8기",
    ...getImages(img, "myMedi"),
    project: "https://github.com/My-Medi",
    title: "마이메디",
    detailExplain:
      "20~30세대가 건강검진 수치를 쉽게 이해하고, 질환을 예방하도록 돕는 헬스케어 웹 서비스입니다.",
    people: [{ id: 1, part: "웹", name: ["원준영"] }],
    subTitle: [
      { id: 1, name: "건강" },
      { id: 2, name: "공공데이터" },
      { id: 3, name: "Web" },
    ],
  },
  {
    id: 28,
    type: "8기",
    ...getImages(img, "ekec"),
    project: "https://github.com/EKEC-crew",
    title: "EKEC",
    detailExplain:
      "성향 맞춤 모임 매칭 웹 서비스로, 누구나 쉽게 시작하고 활발한 커뮤니티를 만들어가는 곳입니다.",
    people: [{ id: 1, part: "웹", name: ["유상완", "임혜미", "정동열"] }],
    subTitle: [
      { id: 1, name: "커뮤니티" },
      { id: 2, name: "매칭" },
      { id: 3, name: "Web" },
    ],
  },
  {
    id: 29,
    type: "8기",
    ...getImages(img, "banddy"),
    title: "밴디",
    detailExplain:
      "밴드 멤버를 찾고 음악 활동을 함께할 수 있는 뮤지션 매칭 서비스입니다.",
    people: [{ id: 1, part: "웹", name: ["김예진"] }],
    subTitle: [
      { id: 1, name: "음악" },
      { id: 2, name: "매칭" },
      { id: 3, name: "Web" },
    ],
  },
  {
    id: 30,
    type: "8기",
    ...getImages(img, "photoRy"),
    title: "포토리",
    detailExplain:
      "사진으로 추억을 기록하고 공유하는 포토 다이어리 서비스입니다.",
    people: [{ id: 1, part: "iOS", name: ["이수민"] }],
    subTitle: [
      { id: 1, name: "사진" },
      { id: 2, name: "추억" },
      { id: 3, name: "iOS" },
    ],
  },
];
