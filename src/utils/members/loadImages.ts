const imageModules = import.meta.glob("@/assets/images/members/*.png", {
  eager: true,
}) as Record<string, { default: string }>;

export const loadImages = (fileName?: string): string | undefined => {
  if (!fileName) return undefined;

  const imagePath = Object.keys(imageModules).find((path) =>
    path.endsWith(`/${fileName}.png`)
  );

  return imagePath ? imageModules[imagePath].default : undefined;
};
