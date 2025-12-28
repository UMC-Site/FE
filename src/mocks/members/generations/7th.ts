import type { MembersCategory } from "@/types/members/members";
import { createMember } from "../createMember";

export const members7th: MembersCategory = {
  id: 1,
  type: "7기",
  members: [
    createMember({
      id: 1,
      nickname: "하키",
      name: "김경민",
      part: ["PM"],
      link: "https://marshy-substance-339.notion.site/15fe05900d6080fa9973f87cf40b30a9?pvs=143",
    }),

    createMember({
      id: 2,
      nickname: "이즈",
      name: "양인서",
      part: ["PM", "FE"],
      link: "https://github.com/sheepyis",
    }),

    createMember({
      id: 3,
      nickname: "에리얼",
      name: "임채현",
      part: ["PM", "DE"],
    }),

    createMember({
      id: 4,
      nickname: "주디",
      name: "양유진",
      part: ["DE"],
    }),

    createMember({
      id: 5,
      nickname: "체리",
      name: "김다현",
      part: ["FE"],
      link: "https://github.com/daahyunk",
    }),

    createMember({
      id: 6,
      nickname: "핸",
      name: "윤혜성",
      part: ["FE"],
      link: "https://github.com/hyesngy",
    }),

    createMember({
      id: 7,
      nickname: "사이다",
      name: "강다현",
      part: ["BE"],
      link: "https://github.com/hyeonda02",
    }),

    createMember({
      id: 8,
      nickname: "빙수",
      name: "장수빈",
      part: ["BE"],
    }),
  ],
};
