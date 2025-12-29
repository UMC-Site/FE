import { useMemo } from "react";
import Title from "@/components/Title/Title";
import ListFilter from "./components/Filter/ListFilter";
import ListPart from "./components/Members/ListPart";
import { MembersData } from "@/mocks/members";
import { useMembersStore } from "@/stores/members/useMembersStore";

const Members = () => {
  const selectedType = useMembersStore((state) => state.selectedType);

  const selectedMembers = useMemo(() => {
    return (
      MembersData.find((item) => item.type === selectedType)?.members ?? []
    );
  }, [selectedType]);

  return (
    <div className="pageContainer">
      <Title text="Members" />

      <ListFilter />

      <ListPart partList={selectedMembers} />
    </div>
  );
};

export default Members;
