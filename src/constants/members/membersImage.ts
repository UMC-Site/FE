export const MEMBERS_IMAGE = {
  "하키/김경민": "haki-kyungmin",
  "이즈/양인서": "is-inseo",
  "세인트/김준용": "saint-junyong",
  "지니/유진": "genie-jin",
  "바나/유상완": "bana-sangwan",
} as const;

export type MembeName = keyof typeof MEMBERS_IMAGE;
