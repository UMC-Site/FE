export const getFadeInUpClass = (isVisible: boolean): string =>
  isVisible ? "animate-fade-in-up opacity-0" : "translate-y-5 opacity-0";

export const getStaggerDelay = (
  index: number,
  base: number = 0.2,
  step: number = 0.15
): string => `${base + index * step}s`;
