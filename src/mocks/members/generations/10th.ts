import type { MembersCategory } from "@/types/members/members";
import { createMember } from "../createMember";

export const members10th: MembersCategory = {
  id: 4,
  type: "10기",
  members: [
    createMember({
      id: 1,
      name: "이즈/양인서",
      part: ["PM", "DE", "FE"],
    }),

    createMember({
      id: 2,
      name: "에리얼/임채현",
      part: ["PM", "DE"],
    }),

    createMember({
      id: 3,
      name: "핸/윤혜성",
      part: ["FE"],
    }),

    createMember({
      id: 4,
      name: "바나/유상완",
      part: ["FE"],
    }),

    createMember({
      id: 5,
      name: "앨빈/윤상혁",
      part: ["FE"],
    }),
  ],
};
