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

export const getImages = (
  img: Record<string, string>,
  projectName: string
) => ({
  projectWeb: img[`${projectName}/${projectName}Web`],
  projectMobile: img[`${projectName}/${projectName}Mobile`],
  projectDetailWeb: img[`${projectName}/${projectName}DetailWeb`],
  projectDetailMobile: img[`${projectName}/${projectName}DetailMobile`],
});
