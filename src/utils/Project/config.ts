export const GENERATIONS = ["6", "7", "8"] as const;

export type GenerationNumber = (typeof GENERATIONS)[number];
export type GenerationType = `${GenerationNumber}기`;
export type FilterType = "ALL" | GenerationType;

export const toGenerationType = (num: GenerationNumber): GenerationType =>
  `${num}기`;

export const GENERATION_TYPES = GENERATIONS.map(toGenerationType);
