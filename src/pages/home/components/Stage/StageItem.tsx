import clsx from "clsx";
// import PeopleIcon from "@/assets/images/icons/people.svg?react";
import type { StageData } from "../../data";
import { getFadeInUpClass } from "../../utils";

interface StageItemProps {
  stage: StageData;
  isVisible: boolean;
  delay: string;
}

const StageItem = ({ stage, isVisible, delay }: StageItemProps) => (
  <div
    className={clsx(
      "flex w-[14.4rem] flex-col items-center text-center max-sm:w-28",
      getFadeInUpClass(isVisible)
    )}
    style={{ animationDelay: delay }}
  >
    <p className="font-normal text-[2rem] text-white leading-[2.4rem] max-sm:text-[1rem] max-sm:leading-[1.2rem]">
      {stage.date}
    </p>
    <p className="mt-[0.6rem] whitespace-nowrap font-semibold text-[2.4rem] text-white leading-[2.4rem] max-sm:mt-[0.588rem] max-sm:text-[1.4rem] max-sm:leading-[1.7rem]">
      {stage.title}
    </p>
    {/* 인원수 표시
    <div className="mt-[2.4rem] flex h-[4.6rem] w-44 items-center justify-center rounded-lg border border-primary-900 transition-all duration-300 max-sm:mt-[1.4rem] max-sm:h-[2.8rem] max-sm:w-24 max-sm:rounded-sm">
      <div className="flex w-[6.4rem] items-center justify-between max-sm:w-[3.8rem]">
        <PeopleIcon className="h-8 w-8 max-sm:h-[1.2rem] max-sm:w-[1.2rem]" />
        <p className="font-medium text-[1.8rem] text-white leading-8 max-sm:text-[1rem] max-sm:leading-[1.2rem]">
          {stage.count}
        </p>
      </div>
    </div>
    */}
  </div>
);

export default StageItem;
