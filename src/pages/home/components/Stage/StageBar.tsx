import clsx from "clsx";
import { STAGE_DATA } from "../../data";
import { getStaggerDelay } from "../../utils";
import StageItem from "./StageItem";

interface StageBarProps {
  isVisible: boolean;
}

const StageBar = ({ isVisible }: StageBarProps) => (
  <div className="flex flex-col items-center">
    <div
      className={clsx(
        "relative mt-[5.1rem] flex w-448 items-center justify-center max-sm:mt-[3.457rem] max-sm:w-160",
        isVisible
          ? "animate-reveal-from-left"
          : "opacity-0 [clip-path:inset(0_100%_0_0)]"
      )}
    >
      <div className="-translate-y-1/2 absolute top-1/2 right-[7.2rem] left-[7.2rem] h-[0.2rem] bg-gray-200 max-sm:right-14 max-sm:left-14 max-sm:h-[0.1rem]" />

      <div className="relative z-2 mx-[5.4rem] flex w-[calc(100%-10.8rem)] items-center justify-between max-sm:mx-[2.6rem] max-sm:w-[calc(100%-5.2rem)]">
        {STAGE_DATA.map((stage) => (
          <div
            key={`dot-${stage.date}-${stage.title}`}
            className="relative z-2 flex h-[3.9rem] w-[3.6rem] items-center justify-center max-sm:h-[1.95rem] max-sm:w-[1.8rem]"
          >
            <div className="h-[1.6rem] w-[1.6rem] rounded-full bg-linear-to-br from-primary-500 to-secondary max-sm:h-[0.8rem] max-sm:w-[0.8rem]" />
          </div>
        ))}
      </div>
    </div>

    <div className="mt-[2.1rem] flex w-448 items-end justify-between max-sm:mt-[1.642rem] max-sm:w-160 max-sm:gap-[0.3rem]">
      {STAGE_DATA.map((stage, index) => (
        <StageItem
          key={`${stage.date}-${stage.title}`}
          stage={stage}
          isVisible={isVisible}
          delay={getStaggerDelay(index, 0.4, 0.4)}
        />
      ))}
    </div>
  </div>
);

export default StageBar;
