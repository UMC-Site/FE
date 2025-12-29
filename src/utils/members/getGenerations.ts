import type { MembersType } from "@/types/members/members";

export const getGenerations = (type: MembersType): number => {
  return Number(type.replace("기", ""));
};
