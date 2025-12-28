import { create } from "zustand";
import type { MembersType } from "@/types/members/members";

interface MembersState {
  selectedType: MembersType;
  setSelectedType: (type: MembersType) => void;
}

export const useMembersStore = create<MembersState>((set) => ({
  selectedType: "10기",
  setSelectedType: (type) => set({ selectedType: type }),
}));
