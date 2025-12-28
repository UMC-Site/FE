import type { MembersItem } from "@/types/members/members";
import { loadImages } from "@/utils/members/loadImages";

export const createMember = (
  member: Omit<MembersItem, "image">
): MembersItem => ({
  ...member,
  image: loadImages(member.name),
});
