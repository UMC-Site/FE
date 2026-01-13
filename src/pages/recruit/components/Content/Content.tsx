import Title from "../Title/Title";
import ListContent from "./ListContent";
import type { ContentType } from "@/types/recruit/recruit";

interface ContentProps {
  data: ContentType;
}

const Content = ({ data }: ContentProps) => {
  return (
    <div className="w-full flex flex-col">
      <Title text="활동 내용" />
      <ListContent data={data} />
    </div>
  );
};

export default Content;
