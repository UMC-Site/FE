import type { MembersCategory } from "@/types/members/members";
import { createMember } from "../createMember";

export const members10th: MembersCategory = {
  id: 4,
  type: "10기",
  members: [
    createMember({
      id: 1,
      nickname: "이즈",
      name: "양인서",
      part: ["PM", "DE", "FE"],
      link: "https://github.com/sheepyis",
    }),

    createMember({
      id: 2,
      nickname: "에리얼",
      name: "임채현",
      part: ["PM", "DE"],
    }),

    createMember({
      id: 3,
      nickname: "핸",
      name: "윤혜성",
      part: ["FE"],
      link: "https://github.com/hyesngy",
    }),

    createMember({
      id: 4,
      nickname: "바나",
      name: "유상완",
      part: ["FE"],
      link: "https://github.com/wantkdd",
    }),

    createMember({
      id: 5,
      nickname: "앨빈",
      name: "윤상혁",
      part: ["FE"],
      link: "https://github.com/hyeok02",
    }),
  ],
};
