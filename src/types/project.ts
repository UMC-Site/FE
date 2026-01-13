export type {
  FilterType,
  GenerationNumber,
  GenerationType,
} from "@/utils/project/config";

export interface ProjectPerson {
  id: number;
  part: string;
  name: string[];
}

export interface ProjectFeel {
  id: number;
  nickname: string;
  name: string;
  part: string;
  explain: string;
}

export interface ProjectSubTitle {
  id: number;
  name: string;
}

export interface Project {
  id: number;
  type: import("@/utils/project/config").GenerationType;
  projectWeb: string;
  projectMobile: string;
  projectDetailWeb: string;
  projectDetailMobile: string;
  title: string;
  detailExplain: string;
  project?: string;
  people: ProjectPerson[];
  feel?: ProjectFeel[];
  subTitle: ProjectSubTitle[];
}
