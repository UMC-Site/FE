import { MEMBERS_IMAGE } from "@/constants/members/membersImage";

const imageModules = import.meta.glob("@/assets/images/members/*.png", {
  eager: true,
}) as Record<string, { default: string }>;

export const loadImages = (nickname: string): string | undefined => {
  const fileName = MEMBERS_IMAGE[nickname as keyof typeof MEMBERS_IMAGE];
  if (!fileName) return undefined;

  const imagePath = Object.keys(imageModules).find((path) =>
    path.includes(`/${fileName}.png`)
  );

  return imagePath ? imageModules[imagePath].default : undefined;
};
