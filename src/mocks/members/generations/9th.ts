import type { MembersCategory } from "@/types/members/members";
import { createMember } from "../createMember";

export const members9th: MembersCategory = {
  id: 3,
  type: "9기",
  members: [
    createMember({
      id: 1,
      name: "이즈/양인서",
      part: ["FE"],
      link: "https://github.com/sheepyis",
    }),

    createMember({
      id: 2,
      name: "에리얼/임채현",
      part: ["DE"],
    }),

    createMember({
      id: 3,
      name: "핸/윤혜성",
      part: ["DE", "FE"],
      link: "https://github.com/hyesngy",
    }),

    createMember({
      id: 4,
      name: "지니/유진",
      part: ["BE"],
      link: "https://github.com/Yujin1219",
    }),
  ],
};
