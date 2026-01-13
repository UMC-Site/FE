type GlobImport = Record<string, { default: string }>;

const imageImport = import.meta.glob(
  "../../assets/images/recruit/competency/*.svg",
  { eager: true }
) as GlobImport;

export const images = Object.keys(imageImport).reduce<Record<string, string>>(
  (acc, key) => {
    const path = key
      .replace("../../assets/images/recruit/competency/", "")
      .replace(".svg", "");
    acc[path] = imageImport[key].default;
    return acc;
  },
  {}
);
