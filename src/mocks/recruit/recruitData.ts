import { images } from "@/utils/Recruit/loadImages";

const RecruitData = {
  formUrl: "https://forms.gle/RswnDJJTfjD6LtcZ9",
  activeDate: { id: 1, title: "2026.03 ~ 2026.08 [약 6개월]" },
  part: [
    { id: 1, title: "PM" },
    { id: 2, title: "Design" },
    { id: 3, title: "Android" },
    // { id: 4, title: "iOS" },
    { id: 5, title: "Web" },
    { id: 6, title: "Springboot" },
    { id: 7, title: "Node.js" },
  ],

  people: [
    { id: 1, explain: "다른 학교 친구도 만나고 협업해보고 싶은" },
    { id: 2, explain: "넘치는 열정으로 새로운 것에 도전해보고 싶은" },
    {
      id: 3,
      explain: "서비스 기획, UX/UI 디자인, IT 개발 프로젝트를 해보고 싶은",
    },
  ],

  recruitDate: [
    {
      id: 1,
      step: "추가모집 서류 지원",
      date: "2026.03.02(월) ~ 2026.03.05(목)",
    },
    {
      id: 2,
      step: "서류 합격 발표 및 면접 일정 조율",
      date: "2026.03.02(월) ~ 2026.03.05(목)",
    },
    {
      id: 3,
      step: "면접 일자",
      date: "2026.03.03(화) ~ 2026.03.06(금)",
    },
    {
      id: 4,
      step: "최종 합격자 발표",
      date: "2026.03.08(일)",
    },
    {
      id: 5,
      step: "전체 OT",
      date: "2026.03.13(금) 18시",
    },
  ],

  content: [
    {
      id: 1,
      season: "학기 중",
      items: [
        {
          id: 1,
          title: "워크북",
          explain:
            "3월부터 6월까지 각 파트 별로 제공되는 문제들을 스스로 해결해나갑니다.",
        },
        {
          id: 2,
          title: "스터디",
          explain:
            "대면으로 만나 파트 별로 상호 피드백 등의 스터디 활동을 진행합니다.",
        },
      ],
    },
    {
      id: 2,
      season: "방중",
      items: [
        {
          id: 1,
          title: "프로젝트",
          explain:
            "스터디 수료자에 한해 26.06 ~ 26.08까지 팀을 구성하여 프로젝트를 진행합니다.\n클라이언트 / 서버 / 디자이너 / 기획자로 팀이 구성됩니다.",
        },
        {
          id: 2,
          title: "데모데이",
          explain:
            '프로젝트 후 "UMC 데모데이"를 통해 발표 및 교류를 진행합니다.\n데모데이까지 무사히 완수하시면 UMC 10기를 수료하시게 됩니다!',
        },
      ],
    },
  ],

  competency: [
    {
      id: 1,
      part: "Plan",
      stacks: [{ id: 1, name: "Figma", img: images.figma }],
    },
    {
      id: 2,
      part: "Design",
      stacks: [{ id: 1, name: "Figma", img: images.figma }],
    },
    {
      id: 3,
      part: "Android",
      stacks: [{ id: 1, name: "Kotlin", img: images.kotlin }],
    },
    {
      id: 4,
      part: "iOS",
      stacks: [{ id: 1, name: "Swift", img: images.swift }],
    },
    {
      id: 5,
      part: "Web",
      stacks: [
        { id: 1, name: "HTML", img: images.html },
        { id: 2, name: "CSS", img: images.css },
        { id: 3, name: "JavaScript", img: images.javascript },
      ],
    },
    {
      id: 6,
      part: "SpringBoot",
      stacks: [{ id: 1, name: "Java", img: images.java }],
    },
    {
      id: 7,
      part: "Node.js",
      stacks: [{ id: 1, name: "JavaScript", img: images.javascript }],
    },
  ],

  information: [
    {
      id: 1,
      explain: "회비는 5만원입니다(프로젝트비 3만원이 별도로 발생합니다).",
    },
    { id: 2, explain: "3월 13일(18:00 예정) OT 필수로 참여하셔야 합니다." },
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
      explain: "https://open.kakao.com/o/sfXEDigi",
      url: "https://open.kakao.com/o/sfXEDigi",
    },
  ],
};

export default RecruitData;
