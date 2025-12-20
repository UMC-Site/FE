import type { Project } from "@/types/project";
import { loadImages } from "../../loadImages";

const imageImport = import.meta.glob("@/assets/images/project/project_7/**/*.png", {
  eager: true,
});
const img = loadImages(
  imageImport as Record<string, { default: string }>,
  "/src/assets/images/project/project_7/"
);

export const data: Project[] = [
  {
    id: 8,
    type: "7기",
    projectWeb: img["daengnyang/daengnyangWeb"],
    projectMobile: img["daengnyang/daengnyangMobile"],
    projectDetailWeb: img["daengnyang/daengnyangDetailWeb"],
    projectDetailMobile: img["daengnyang/daengnyangDetailMobile"],
    title: "댕냥스퀘어",
    detailExplain:
      "한 눈에 접하는 우리동네 반려동물 지도 앱 서비스입니다. 날씨, 디데이 등 사용자에게 필요한 정보와 반려동물을 위한 정보를 제공합니다.",
    people: [{ id: 1, part: "서버", name: ["임차민"] }],
    subTitle: [
      { id: 1, name: "반려동물" },
      { id: 2, name: "지도" },
      { id: 3, name: "Android" },
    ],
  },
  {
    id: 9,
    type: "7기",
    projectWeb: img["ttt/tttWeb"],
    projectMobile: img["ttt/tttMobile"],
    projectDetailWeb: img["ttt/tttDetailWeb"],
    projectDetailMobile: img["ttt/tttDetailMobile"],
    title: "Ttt",
    detailExplain:
      "독서를 하고 싶지만 꾸준히 하기 어려운 MZ 세대들이 가벼운 마음으로 독서를 시작할 수 있도록 책&장소, 큐레이션, 북클럽 등을 제공하는 앱 서비스입니다.",
    people: [{ id: 1, part: "안드로이드", name: ["백상준"] }],
    subTitle: [
      { id: 1, name: "독서" },
      { id: 2, name: "스크랩" },
      { id: 3, name: "Android" },
    ],
  },
  {
    id: 10,
    type: "7기",
    projectWeb: img["digin/diginWeb"],
    projectMobile: img["digin/diginMobile"],
    projectDetailWeb: img["digin/diginDetailWeb"],
    projectDetailMobile: img["digin/diginDetailMobile"],
    project: "https://github.com/UMC-7th",
    title: "이거 먹자",
    detailExplain:
      "하루하루 나만의 건강한 식단을 추천해주는 서비스로, AI 영양사가 개인 맞춤 식단을 제공합니다.",
    people: [
      { id: 1, part: "디자인", name: ["양유진"] },
      { id: 2, part: "안드로이드", name: ["성규현", "손주완", "최희원"] },
    ],
    subTitle: [
      { id: 1, name: "식단" },
      { id: 2, name: "추천" },
      { id: 3, name: "Android" },
    ],
  },
  {
    id: 11,
    type: "7기",
    projectWeb: img["ggs/ggsWeb"],
    projectMobile: img["ggs/ggsMobile"],
    projectDetailWeb: img["ggs/ggsDetailWeb"],
    projectDetailMobile: img["ggs/ggsDetailMobile"],
    title: "공각심",
    detailExplain:
      "20~30대 대학생 및 구직자를 대상으로 맞춤 자격/시험 일정 관리와 학습 동기를 부여하는 앱 서비스입니다.",
    people: [{ id: 1, part: "서버", name: ["박세웅", "원준영"] }],
    subTitle: [
      { id: 1, name: "알림" },
      { id: 2, name: "학습" },
      { id: 3, name: "Android" },
    ],
  },
  {
    id: 12,
    type: "7기",
    projectWeb: img["growit/growitWeb"],
    projectMobile: img["growit/growitMobile"],
    projectDetailWeb: img["growit/growitDetailWeb"],
    projectDetailMobile: img["growit/growitDetailMobile"],
    project: "https://github.com/7-umc-GrowIT",
    title: "그로우잇",
    detailExplain:
      "음성 기반 AI로 대화하며, 일기와 마음 챙김 챌린지를 통해 정신 건강을 관리하는 앱 서비스입니다.",
    people: [
      { id: 1, part: "디자인", name: ["고하늘"] },
      { id: 2, part: "서버", name: ["박진성", "송진우", "장우진"] },
    ],
    subTitle: [
      { id: 1, name: "일상" },
      { id: 2, name: "기록" },
      { id: 3, name: "iOS" },
    ],
  },
  {
    id: 13,
    type: "7기",
    projectWeb: img["wegg/weggWeb"],
    projectMobile: img["wegg/weggMobile"],
    projectDetailWeb: img["wegg/weggDetailWeb"],
    projectDetailMobile: img["wegg/weggDetailMobile"],
    project: "https://github.com/UMCWegg",
    title: "위그",
    detailExplain:
      "자기 주도적 학습이 어려운 MZ 세대를 위한 공부 관리 서비스입니다.",
    people: [
      { id: 1, part: "iOS", name: ["김경민", "송승윤", "이재원"] },
      { id: 2, part: "서버", name: ["최승재", "홍해담"] },
    ],
    subTitle: [
      { id: 1, name: "스터디" },
      { id: 2, name: "습관" },
      { id: 3, name: "iOS" },
    ],
  },
  {
    id: 14,
    type: "7기",
    projectWeb: img["partnerd/partnerdWeb"],
    projectMobile: img["partnerd/partnerdMobile"],
    projectDetailWeb: img["partnerd/partnerdDetailWeb"],
    projectDetailMobile: img["partnerd/partnerdDetailMobile"],
    project: "https://github.com/UMC-partNerd",
    title: "partNerd",
    detailExplain:
      "우리의 동아리를 홍보하고, 콜라보레이션 기능을 통해 타 IT 동아리와의 협업 및 프로젝트 인원을 모집할 수 있는 플랫폼입니다.",
    people: [
      { id: 1, part: "디자인", name: ["임서현"] },
      { id: 2, part: "웹", name: ["조희연"] },
    ],
    subTitle: [
      { id: 1, name: "동아리" },
      { id: 2, name: "커뮤니티" },
      { id: 3, name: "Web" },
    ],
  },
  {
    id: 15,
    type: "7기",
    projectWeb: img["wheredrug/wheredrugWeb"],
    projectMobile: img["wheredrug/wheredrugMobile"],
    projectDetailWeb: img["wheredrug/wheredrugDetailWeb"],
    projectDetailMobile: img["wheredrug/wheredrugDetailMobile"],
    project: "https://github.com/PharmQuest",
    title: "어디약?",
    detailExplain:
      "해외에서 어떤 상비약을 사야할 지 막막한 사람들을 위해, 상비약 정보와 약국 위치를 한 곳에서 제공하는 서비스입니다.",
    people: [
      { id: 1, part: "웹", name: ["윤혜성"] },
      { id: 2, part: "서버", name: ["김준용"] },
    ],
    subTitle: [
      { id: 1, name: "약국" },
      { id: 2, name: "예방" },
      { id: 3, name: "Web" },
    ],
  },
  {
    id: 16,
    type: "7기",
    projectWeb: img["travelstar/travelstarWeb"],
    projectMobile: img["travelstar/travelstarMobile"],
    projectDetailWeb: img["travelstar/travelstarDetailWeb"],
    projectDetailMobile: img["travelstar/travelstarDetailMobile"],
    project: "https://github.com/UMC-TravelStar",
    title: "여행별",
    detailExplain:
      "여행 일지를 간편하게 작성하며 추억과 감정을 기억하고 공유하는 서비스입니다.",
    people: [{ id: 1, part: "웹", name: ["양인서", "우정혁", "윤상혁"] }],
    subTitle: [
      { id: 1, name: "여행" },
      { id: 2, name: "별자리" },
      { id: 3, name: "Web" },
    ],
  },
  {
    id: 17,
    type: "7기",
    projectWeb: img["a1/a1Web"],
    projectMobile: img["a1/a1Mobile"],
    projectDetailWeb: img["a1/a1DetailWeb"],
    projectDetailMobile: img["a1/a1DetailMobile"],
    project: "https://github.com/UMC-7th-A1Grade",
    title: "A1등급",
    detailExplain:
      "막막했던 수학 오답을 조금 더 친숙하게 만들고 효율적으로 제공해주는 학생들의 수학 공부 도우미 서비스입니다.",
    people: [
      { id: 1, part: "디자인", name: ["임채현"] },
      { id: 2, part: "웹", name: ["송효재"] },
      { id: 3, part: "서버", name: ["강다현"] },
    ],
    subTitle: [
      { id: 1, name: "공부" },
      { id: 2, name: "수학" },
      { id: 3, name: "Web" },
    ],
  },
  {
    id: 18,
    type: "7기",
    projectWeb: img["farmon/farmonWeb"],
    projectMobile: img["farmon/farmonMobile"],
    projectDetailWeb: img["farmon/farmonDetailWeb"],
    projectDetailMobile: img["farmon/farmonDetailMobile"],
    project: "https://github.com/Farm-On",
    title: "FarmON",
    detailExplain:
      "농업을 변화시키는 새로운 연결고리인 디지털 솔루션입니다. 농업 데이터 기반으로 맞춤형 컨설팅을 제공합니다.",
    people: [
      { id: 1, part: "기획", name: ["이경록"] },
      { id: 2, part: "웹", name: ["양정우", "장수희"] },
      { id: 3, part: "서버", name: ["박미정"] },
    ],
    subTitle: [
      { id: 1, name: "농산물" },
      { id: 2, name: "컨설팅" },
      { id: 3, name: "Web" },
    ],
  },
];
