const imageModules = import.meta.glob<{ default: string }>(
  "@/assets/**/*.{png,jpg,jpeg,gif,svg,webp}",
  { eager: true }
);

export const loadImage = (path: string): string => {
  const fullPath = `/src/assets/${path}`;
  const module = imageModules[fullPath];

  if (!module) {
    console.warn(`Image not found: ${fullPath}`);
    return "";
  }

  return module.default;
};

export const loadImages = <T extends Record<string, string>>(
  paths: T
): { [K in keyof T]: string } => {
  const result = {} as { [K in keyof T]: string };

  for (const key in paths) {
    result[key] = loadImage(paths[key]);
  }

  return result;
};
