import Title from "@/components/Title/Title";
import ListFilter from "./components/Filter/ListFilter";
import { useState } from "react";
import type { MembersType } from "@/types/members/members";
import { MEMBERS_TYPES } from "@/types/members/members";
import { MembersData } from "@/mocks/members/membersData";
import ListMembers from "./components/Members/ListMembers";

const Members = () => {
  const [selectedType, setSelectedType] = useState<MembersType>("9기");

  const selectedMembers =
    MembersData.find((item) => item.type === selectedType)?.members ?? [];

  return (
    <div className="pageContainer">
      <Title text="Members" />

      <ListFilter
        types={MEMBERS_TYPES}
        selectedType={selectedType}
        onSelectType={setSelectedType}
      />

      <ListMembers membersList={selectedMembers} />
    </div>
  );
};

export default Members;
