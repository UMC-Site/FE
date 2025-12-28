export const MEMBERS_IMAGE = {
  하키: "haki",
  이즈: "is",
  세인트: "saint",
  지니: "genie",
  바나: "bana",
} as const;

export type MemberNickname = keyof typeof MEMBERS_IMAGE;
