export const MEMBERS_TYPES = ["7기", "8기", "9기", "10기"] as const;
export type MembersType = (typeof MEMBERS_TYPES)[number];

export const PART_TYPES = ["PM", "FE", "BE", "DE"] as const;
export type PartType = (typeof PART_TYPES)[number];

export interface MembersItem {
  id: number;
  nickname: string;
  name: string;
  part: PartType[];
  link?: string;
  image?: string;
}

export interface MembersCategory {
  id: number;
  type: MembersType;
  members: MembersItem[];
}
