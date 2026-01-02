import { create } from "zustand";
import type { MembersType } from "@/types/members/members";
import { MEMBERS_TYPES } from "@/types/members/members";

const DEFAULT_MEMBER_TYPE = MEMBERS_TYPES[MEMBERS_TYPES.length - 1];

interface MembersState {
  selectedType: MembersType;
  setSelectedType: (type: MembersType) => void;
}

export const useMembersStore = create<MembersState>((set) => ({
  selectedType: DEFAULT_MEMBER_TYPE,
  setSelectedType: (type) => set({ selectedType: type }),
}));
