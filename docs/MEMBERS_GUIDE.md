## 📁 기수별 웹사이트 프로젝트 참여자 추가 가이드

새로운 기수의 웹사이트 프로젝트 참여자를 추가할 때 아래 5단계만 따르면 됩니다.

### 1. 이미지 추가

`src/assets/images/members/` 에 멤버 이미지 추가

> **중요**: 이미지 파일명이 반드시 일치해야 합니다!

```
members/
├── 닉네임-이름.png(is-inseo)
└── ...
```

### 2. 멤버 메타 정보 추가

`src/constants/members/membersMeta.ts` 에 멤버 추가

```typescript
"닉네임/이름": {
  image: "nickname-name",
  link: "https://github.com/...",
},
```

### 3. 타입 목록 추가

`src/types/members/members.ts`에 기수 번호 추가(최신 기수가 뒤에 오도록)

```typescript
export const MEMBERS_TYPES = ["7기", "8기", "9기", "10기", "11기"] as const;
```

### 4. mock 파일 생성

`src/mocks/members/generations/11th.ts` 생성하여 참여자 데이터를 넣습니다.

> ⚠️ 참여 기수는 “해당 기수가 사이트를 사용하기 시작한 시점”을 기준으로 작성합니다.
> (예: 11기 사용을 위해 개발했다면 11th.ts에 추가)

```
import type { MembersCategory } from "@/types/members/members";
import { createMember } from "../createMember";

export const members11th: MembersCategory = {
  id: 5, // 기존 id 다음 숫자
  type: "11기",
  members: [
    createMember({
      id: 1,
      name: "이즈/양인서", // 반드시 membersMeta에 존재해야 함
      part: ["FE"],
    }),
  ],
};
```

### 5. index.ts에 추가

`src/mocks/members/generations/index.ts`에 추가한 기수 데이터 파일을 추가합니다.

```
import { members11th } from "./11th";

export const generationMembers = [
  members7th,
  members8th,
  members9th,
  members10th,
  members11th,
];
```

> 타입, 필터 버튼, 프로젝트 목록 등 모든 것이 자동으로 반영됩니다!
