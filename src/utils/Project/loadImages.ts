type ImageImport = Record<string, { default: string }>;

export const loadImages = (imageImport: ImageImport, basePath: string) => {
  return Object.keys(imageImport).reduce(
    (acc, key) => {
      const path = key.replace(basePath, "").replace(".png", "");
      acc[path] = imageImport[key].default;
      return acc;
    },
    {} as Record<string, string>
  );
};
