import type { ContentType } from "@/types/recruit/recruit";
import Title from "../Title/Title";
import ListContent from "./ListContent";

interface ContentProps {
  data: ContentType;
}

const Content = ({ data }: ContentProps) => {
  return (
    <div className="flex w-full flex-col">
      <Title text="활동 내용" />
      <ListContent data={data} />
    </div>
  );
};

export default Content;
