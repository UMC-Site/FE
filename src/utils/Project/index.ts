import type { Project } from "@/types/project";
import {
  type FilterType,
  type GenerationType,
  GENERATIONS,
  toGenerationType,
} from "./config";

const dataModules = import.meta.glob("./generations/*/data.ts", {
  eager: true,
});

const projectsByGeneration: Record<GenerationType, Project[]> = {} as Record<
  GenerationType,
  Project[]
>;

for (const gen of GENERATIONS) {
  const modulePath = `./generations/${gen}/data.ts`;
  const module = dataModules[modulePath] as { data: Project[] } | undefined;
  if (module) {
    projectsByGeneration[toGenerationType(gen)] = module.data;
  }
}

export const allProjects: Project[] = GENERATIONS.flatMap(
  (gen) => projectsByGeneration[toGenerationType(gen)] || []
);

export const getFilteredProjects = (filter: FilterType): Project[] => {
  if (filter === "ALL") {
    return allProjects;
  }
  return projectsByGeneration[filter] || [];
};

export const getProjectsByGeneration = (
  gen: GenerationType
): Project[] => {
  return projectsByGeneration[gen] || [];
};

export { projectsByGeneration };
export * from "./config";
