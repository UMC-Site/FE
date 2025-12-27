import type { MembersCategory } from "@/types/members/members";
// 추후 loadImage()로 수정하겠습니다. + 영어 닉네임과 사진 파일명 일치 판별로 자동으로 넣기
import Bana from "@/assets/images/members/bana.png";
import Is from "@/assets/images/members/is.png";
import Haki from "@/assets/images/members/haki.png";
import Saint from "@/assets/images/members/saint.png";
import Genie from "@/assets/images/members/genie.png";

export const MembersData: MembersCategory[] = [
  {
    id: 1,
    type: "6기",
    members: [
      {
        id: 1,
        nickname: "하키",
        name: "김경민",
        part: ["PM"],
        link: "https://marshy-substance-339.notion.site/15fe05900d6080fa9973f87cf40b30a9?pvs=143",
        image: Haki,
      },
      {
        id: 2,
        nickname: "이즈",
        name: "양인서",
        part: ["PM", "FE"],
        link: "https://github.com/sheepyis",
        image: Is,
      },
      {
        id: 3,
        nickname: "에리얼",
        name: "임채현",
        part: ["PM", "DE"],
      },
      {
        id: 4,
        nickname: "주디",
        name: "양유진",
        part: ["DE"],
      },
      {
        id: 5,
        nickname: "체리",
        name: "김다현",
        part: ["FE"],
        link: "https://github.com/daahyunk",
      },
      {
        id: 6,
        nickname: "핸",
        name: "윤혜성",
        part: ["FE"],
        link: "https://github.com/hyesngy",
      },
      {
        id: 7,
        nickname: "사이다",
        name: "강다현",
        part: ["BE"],
        link: "https://github.com/hyeonda02",
      },
      {
        id: 8,
        nickname: "빙수",
        name: "장수빈",
        part: ["BE"],
      },
    ],
  },
  {
    id: 2,
    type: "7기",
    members: [
      {
        id: 1,
        nickname: "이즈",
        name: "양인서",
        part: ["PM", "FE"],
        link: "https://github.com/sheepyis",
        image: Is,
      },
      {
        id: 2,
        nickname: "에리얼",
        name: "임채현",
        part: ["PM", "DE"],
      },
      {
        id: 3,
        nickname: "핸",
        name: "윤혜성",
        part: ["FE"],
        link: "https://github.com/hyesngy",
      },
      {
        id: 4,
        nickname: "세인트",
        name: "김준용",
        part: ["BE"],
        link: "https://github.com/ggamnunq",
        image: Saint,
      },
    ],
  },
  {
    id: 3,
    type: "8기",
    members: [
      {
        id: 1,
        nickname: "이즈",
        name: "양인서",
        part: ["PM", "FE"],
        link: "https://github.com/sheepyis",
        image: Is,
      },
      {
        id: 2,
        nickname: "에리얼",
        name: "임채현",
        part: ["PM", "DE"],
      },
      {
        id: 3,
        nickname: "핸",
        name: "윤혜성",
        part: ["FE"],
        link: "https://github.com/hyesngy",
      },
      {
        id: 4,
        nickname: "지니",
        name: "유진",
        part: ["BE"],
        link: "https://github.com/Yujin1219",
        image: Genie,
      },
    ],
  },
  {
    id: 4,
    type: "9기",
    members: [
      {
        id: 1,
        nickname: "이즈",
        name: "양인서",
        part: ["PM", "FE"],
        link: "https://github.com/sheepyis",
        image: Is,
      },
      {
        id: 2,
        nickname: "에리얼",
        name: "임채현",
        part: ["PM", "DE"],
      },
      {
        id: 3,
        nickname: "바나",
        name: "유상완",
        part: ["FE"],
        link: "https://github.com/wantkdd",
        image: Bana,
      },
      {
        id: 4,
        nickname: "앨빈",
        name: "윤상혁",
        part: ["FE"],
        link: "https://github.com/hyeok02",
      },
      {
        id: 5,
        nickname: "핸",
        name: "윤혜성",
        part: ["FE"],
        link: "https://github.com/hyesngy",
      },
    ],
  },
];
