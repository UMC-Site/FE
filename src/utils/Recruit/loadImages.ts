type GlobImport = Record<string, { default: string }>;

const imageImport = import.meta.glob(
  "../../assets/images/Recruit/Competency/*.png",
  { eager: true }
) as GlobImport;

export const images = Object.keys(imageImport).reduce<Record<string, string>>(
  (acc, key) => {
    const path = key
      .replace("../../assets/images/Recruit/Competency/", "")
      .replace(".png", "");
    acc[path] = imageImport[key].default;
    return acc;
  },
  {}
);
