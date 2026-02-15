## 📁 새 기수 프로젝트 추가 가이드

새로운 기수의 프로젝트를 추가할 때 아래 3단계만 따르면 됩니다.

### 1. 이미지 추가

`src/assets/images/project/project_10/` 폴더 생성 후 프로젝트별 이미지 추가

> **중요**: 폴더명과 이미지 파일명 prefix가 반드시 일치해야 합니다!

```
project_10/
├── 프로젝트명1/                    # 프로젝트명1
│   ├── 프로젝트명1Web.png          # 프로젝트명1 + Web
│   ├── 프로젝트명1Mobile.png       # 프로젝트명1 + Mobile
│   ├── 프로젝트명1DetailWeb.png    # 프로젝트명1 + DetailWeb
│   └── 프로젝트명1DetailMobile.png # 프로젝트명1 + DetailMobile
├── 프로젝트명2/
└── ...
```

### 2. 데이터 파일 생성

`src/utils/project/generations/10/data.ts` 파일 생성 (8기 형식 참고)

```typescript
import type { Project } from "@/types/project";
import { getImages, loadImages } from "../../loadImages";

const imageImport = import.meta.glob(
  "@/assets/images/project/project_10/**/*.png",
  { eager: true },
);
const img = loadImages(
  imageImport as Record<string, { default: string }>,
  "/src/assets/images/project/project_10/",
);

export const data: Project[] = [
  {
    id: 41,
    type: "10기",
    ...getImages(img, "프로젝트명1"), // 프로젝트명1 입력하면 4개 이미지 자동 매핑
    title: "프로젝트 제목",
    // ... 나머지 데이터
  },
];
```

### 3. config 수정

`src/utils/project/config.ts`에서 기수 번호 추가 (최신 기수가 앞에 오도록)

```typescript
// 변경 전
export const GENERATIONS = ["9", "8", "7", "6"] as const;

// 변경 후
export const GENERATIONS = ["10", "9", "8", "7", "6"] as const;
```

> 타입, 필터 버튼, 프로젝트 목록 등 모든 것이 자동으로 반영됩니다!
