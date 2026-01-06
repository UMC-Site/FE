import type { MembersCategory } from "@/types/members/members";
import { createMember } from "../createMember";

export const members8th: MembersCategory = {
  id: 2,
  type: "8기",
  members: [
    createMember({
      id: 1,
      name: "이즈/양인서",
      part: ["PM", "FE"],
    }),

    createMember({
      id: 2,
      name: "에리얼/임채현",
      part: ["DE"],
    }),

    createMember({
      id: 3,
      name: "핸/윤혜성",
      part: ["FE"],
    }),

    createMember({
      id: 4,
      name: "세인트/김준용",
      part: ["BE"],
    }),
  ],
};
