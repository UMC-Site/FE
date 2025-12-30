export const GOALS = ["CHALLENGE", "EQUALITY", "CONFIDENCE"] as const;

export type Goal = (typeof GOALS)[number];
