import { useMemo } from "react";
import Title from "@/components/Title/Title";
import { MembersData } from "@/mocks/members";
import { useMembersStore } from "@/stores/members/useMembersStore";
import ListFilter from "./components/Filter/ListFilter";
import ListPart from "./components/Members/ListPart";

const Members = () => {
  const selectedType = useMembersStore((state) => state.selectedType);

  const selectedMembers = useMemo(() => {
    return (
      MembersData.find((item) => item.type === selectedType)?.members ?? []
    );
  }, [selectedType]);

  return (
    <div className="pageContainer flex flex-col gap-y-[clamp(1.62rem,4vw,3.73rem)] pb-[clamp(6rem,8vw,11.3rem)]">
      <Title text="Members" />

      <ListFilter />

      <ListPart partList={selectedMembers} />
    </div>
  );
};

export default Members;
