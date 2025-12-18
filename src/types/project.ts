export type GenerationType = "6기" | "7기" | "8기";

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
  type: GenerationType;
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

export type FilterType = "ALL" | GenerationType;
