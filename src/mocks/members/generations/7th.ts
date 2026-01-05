import type { MembersCategory } from "@/types/members/members";
import { createMember } from "../createMember";

export const members7th: MembersCategory = {
  id: 1,
  type: "7기",
  members: [
    createMember({
      id: 1,
      name: "하키/김경민",
      part: ["PM"],
    }),

    createMember({
      id: 2,
      name: "이즈/양인서",
      part: ["PM", "FE"],
    }),

    createMember({
      id: 3,
      name: "에리얼/임채현",
      part: ["PM", "DE"],
    }),

    createMember({
      id: 4,
      name: "주디/양유진",
      part: ["DE"],
    }),

    createMember({
      id: 5,
      name: "체리/김다현",
      part: ["FE"],
    }),

    createMember({
      id: 6,
      name: "핸/윤혜성",
      part: ["FE"],
    }),

    createMember({
      id: 7,
      name: "사이다/강다현",
      part: ["BE"],
    }),

    createMember({
      id: 8,
      name: "빙수/장수빈",
      part: ["BE"],
    }),
  ],
};
