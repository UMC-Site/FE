import type { MembersItem } from "@/types/members/members";
import { MEMBERS_META } from "@/constants/members/membersMeta";
import { loadImages } from "@/utils/members/loadImages";

export const createMember = (
  member: Omit<MembersItem, "image" | "link">
): MembersItem => {
  const meta = MEMBERS_META[member.name];

  return {
    ...member,
    image: loadImages(meta?.image),
    link: meta?.link,
  };
};
