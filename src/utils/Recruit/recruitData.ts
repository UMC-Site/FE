import { images } from "./loadImages";

const RecruitData = [
  {
    activeDate: [{ id: 1, title: "2026.03 ~ 2026.08 [약 6개월]" }],
    part: [
      { id: 1, title: "PM", explain: "프로젝트 일정 관리 및 기획" },
      { id: 2, title: "Designer", explain: "프로젝트 UI/UX 디자인" },
      { id: 3, title: "Web", explain: "웹 개발(React)" },
      { id: 4, title: "Spring", explain: "서버 개발(Spring)" },
      { id: 5, title: "Node", explain: "서버 개발(Node.js)" },
      { id: 6, title: "Android", explain: "앱 개발(Android)" },
      { id: 7, title: "iOS", explain: "앱 개발(iOS)" },
    ],
    people: [
      { id: 1, explain: "대학교 재학생/휴학생/졸업생" },
      { id: 2, explain: "프로젝트 참여 및 열정적으로 활동 가능한 사람" },
      { id: 3, explain: "열심히 배우고, 성장하고 싶은 사람" },
    ],
    recruitDate: [
      {
        id: 1,
        step: "서류 모집",
        date: "2024.09.02(월) ~ 09.08(일)",
      },
      {
        id: 2,
        step: "서류 합격 및 면접 일정 발표",
        date: "2024.09.09(월)",
      },
      {
        id: 3,
        step: "면접 일자",
        date: "2024.09.10(화) ~ 09.12(목)",
      },
      {
        id: 4,
        step: "최종 합격자 발표",
        date: "2024.09.15(일)",
      },
      {
        id: 5,
        step: "전체 OT",
        date: "2024.09.20(금) 18시",
      },
    ],

    content: [
      {
        id: 1,
        title: "워크북",
        detail: [
          {
            id: 1,
            explain:
              "3월부터 6월까지 각 파트 별로 제공되는 문제들을 스스로 해결해나갑니다.",
          },
        ],
      },
      {
        id: 2,
        title: "스터디",
        detail: [
          {
            id: 1,
            explain:
              "대면으로 만나 파트 별로 상호 피드백 등의 스터디 활동을 진행합니다.",
          },
        ],
      },
    ],
    studyCourse: [
      {
        id: 1,
        title: "프로젝트",
        explain:
          "스터디 수료자에 한해 25.07 ~ 25.08까지 팀을 구성하여 프로젝트를 진행합니다.\n클라이언트/서버/디자이너/기획자로 팀이 구성됩니다.",
      },
      {
        id: 2,
        title: "데모데이",
        explain:
          '프로젝트 후 "UMC 데모데이"를 통해 발표 및 교류를 진행합니다.\n데모데이까지 무사히 완수하시면 UMC 10기를 수료하시게 됩니다!',
      },
    ],

    competency: [
      {
        id: 1,
        part: "Plan",
        stacks: [{ id: 1, name: "Figma", img: images.MobileFigma }],
      },
      {
        id: 2,
        part: "Design",
        stacks: [{ id: 1, name: "Figma", img: images.MobileFigma }],
      },
      {
        id: 3,
        part: "Android",
        stacks: [{ id: 1, name: "Kotlin", img: images.MobileKotlin }],
      },
      {
        id: 4,
        part: "iOS",
        stacks: [{ id: 1, name: "Swift", img: images.MobileSwift }],
      },
      {
        id: 5,
        part: "Web",
        stacks: [
          { id: 1, name: "HTML", img: images.MobileHtml },
          { id: 2, name: "CSS", img: images.MobileCss },
          { id: 3, name: "JavaScript", img: images.MobileJavaScript },
        ],
      },
      {
        id: 6,
        part: "SpringBoot",
        stacks: [{ id: 1, name: "Java", img: images.MobileJava }],
      },
      {
        id: 7,
        part: "Node.js",
        stacks: [{ id: 1, name: "JavaScript", img: images.MobileJavaScript }],
      },
    ],
    information: [
      {
        id: 1,
        explain: "회비는 5만원입니다(프로젝트비 3만원이 별도로 발생합니다).",
      },
      { id: 2, explain: "3월 14일(18:00 예정) OT 필수로 참여하셔야 합니다." },
      { id: 3, explain: "12주간 교육 기간에 각 파트별로 스터디가 진행됩니다." },
      { id: 4, explain: "방중 데모데이는 반드시 참여하셔야 합니다!" },
    ],
    sns: [
      {
        id: 1,
        title: "UMC 한성대 인스타그램",
        explain: "hsu_makeus_challenge",
        url: "https://www.instagram.com/hsu_makeus_challenge?igsh=ZndwYzFyODlyZzI5",
      },
      {
        id: 2,
        title: "기타 문의는 카카오톡 오픈채팅방",
        explain: "https://open.kakao.com/o/soEpBOCf",
        url: "https://open.kakao.com/o/soEpBOCf",
      },
    ],
  },
];

export type RecruitDataType = typeof RecruitData;
export type RecruitDataItem = RecruitDataType[number];

export default RecruitData;
