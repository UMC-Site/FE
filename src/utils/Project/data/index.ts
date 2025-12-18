import type { FilterType, GenerationType, Project } from "@/types/project";
import { generation6Data } from "./generation6Data";
import { generation7Data } from "./generation7Data";
import { generation8Data } from "./generation8Data";

export const allProjects: Project[] = [
  ...generation6Data,
  ...generation7Data,
  ...generation8Data,
];

export const projectsByGeneration: Record<GenerationType, Project[]> = {
  "6기": generation6Data,
  "7기": generation7Data,
  "8기": generation8Data,
};

export const getFilteredProjects = (filter: FilterType): Project[] => {
  if (filter === "ALL") {
    return allProjects;
  }
  return projectsByGeneration[filter] || [];
};

export { generation6Data, generation7Data, generation8Data };
