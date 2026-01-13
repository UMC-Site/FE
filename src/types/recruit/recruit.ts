import RecruitData from "@/mocks/recruit/recruitData";

export type RecruitDataType = typeof RecruitData;

export type ActiveDateType = RecruitDataType["activeDate"];

export type PartType = RecruitDataType["part"];
export type PartItemType = PartType[number];

export type PeopleType = RecruitDataType["people"];
export type PeopleItemType = PeopleType[number];

export type RecruitDateType = RecruitDataType["recruitDate"];
export type RecruitDateItemType = RecruitDateType[number];

export type ContentType = RecruitDataType["content"];
export type ContentItemType = ContentType[number];
export type ContentItemsType = ContentItemType["items"];
export type ContentItemsItemType = ContentItemsType[number];

export type CompetencyType = RecruitDataType["competency"];
export type CompetencyItemType = CompetencyType[number];
export type StackType = CompetencyItemType["stacks"];
export type StackItemType = StackType[number];

export type InformationType = RecruitDataType["information"];
export type InformationItemType = InformationType[number];

export type SNSType = RecruitDataType["sns"];
export type SNSItemType = SNSType[number];
