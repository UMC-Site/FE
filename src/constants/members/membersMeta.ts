import type { MemberMeta } from "@/types/members/members";

export const MEMBERS_META: Record<string, MemberMeta> = {
  "바나/유상완": {
    image: "bana-sangwan",
    link: "https://github.com/wantkdd",
  },

  "사이다/강다현": {
    link: "https://github.com/hyeonda02",
  },

  "세인트/김준용": {
    image: "saint-junyong",
    link: "https://github.com/ggamnunq",
  },

  "앨빈/윤상혁": {
    link: "https://github.com/hyeok02",
  },

  "에리얼/임채현": {
    image: "ariel-chaehyun",
    link: "https://drive.google.com/file/d/1D0FneoA4PPPLyVrmCnDptVDibGrafKTT/view",
  },

  "이즈/양인서": {
    image: "is-inseo",
    link: "https://github.com/sheepyis",
  },

  "지니/유진": {
    image: "genie-jin",
    link: "https://github.com/Yujin1219",
  },

  "주디/양유진": {
    image: "judy-yujin",
    link: "https://drive.google.com/file/d/16BYH4hN7nSInbp6SlA6xw0Hbhf4BalN3/view",
  },

  "체리/김다현": {
    link: "https://github.com/daahyunk",
  },

  "하키/김경민": {
    image: "haki-kyungmin",
    link: "https://marshy-substance-339.notion.site/15fe05900d6080fa9973f87cf40b30a9?pvs=143",
  },

  "핸/윤혜성": {
    link: "https://github.com/hyesngy",
  },
};

export type MemberName = keyof typeof MEMBERS_META;
