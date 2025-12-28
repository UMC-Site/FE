import type { MembersCategory } from "@/types/members/members";
import { createMember } from "../createMember";

export const members8th: MembersCategory = {
  id: 2,
  type: "8기",
  members: [
    createMember({
      id: 1,
      nickname: "이즈",
      name: "양인서",
      part: ["PM", "FE"],
      link: "https://github.com/sheepyis",
    }),

    createMember({
      id: 2,
      nickname: "에리얼",
      name: "임채현",
      part: ["DE"],
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
      nickname: "세인트",
      name: "김준용",
      part: ["BE"],
      link: "https://github.com/ggamnunq",
    }),
  ],
};
