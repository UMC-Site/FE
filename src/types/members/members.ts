import type { MemberName } from "@/constants/members/membersMeta";
export const MEMBERS_TYPES = ["7기", "8기", "9기", "10기"] as const;

export const PART_TYPES = ["PM", "FE", "BE", "DE"] as const;
export type PartType = (typeof PART_TYPES)[number];

export type MembersType = (typeof MEMBERS_TYPES)[number];
export type MemberMeta = {
  image?: string;
  link?: string;
};

export interface MembersItem {
  id: number;
  name: MemberName;
  part: PartType[];
  link?: string;
  image?: string;
}

export interface MembersCategory {
  id: number;
  type: MembersType;
  members: MembersItem[];
}
