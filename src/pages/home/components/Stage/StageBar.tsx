import clsx from "clsx";
import StageDot from "@/assets/images/icons/stageDot.svg";
import { STAGE_DATA } from "../../data";
import { getFadeInUpClass, getStaggerDelay } from "../../utils";
import StageItem from "./StageItem";

interface StageBarProps {
  isVisible: boolean;
}

const StageBar = ({ isVisible }: StageBarProps) => {
  return (
    <>
      {/* 데스크탑 */}
      <div className="flex w-full flex-col items-center max-sm:hidden">
        <div
          className={clsx(
            "relative mt-16 flex w-full max-w-360 items-center justify-center",
            isVisible
              ? "animate-reveal-from-left"
              : "opacity-0 [clip-path:inset(0_100%_0_0)]"
          )}
        >
          <div className="-translate-y-1/2 absolute top-1/2 right-[7.2rem] left-[7.2rem] h-[0.2rem] bg-gray-200" />

          <div className="relative z-2 mx-[5.4rem] flex w-[calc(100%-10.8rem)] items-center justify-between">
            {STAGE_DATA.map((stage) => (
              <div
                key={`dot-${stage.date}-${stage.title}`}
                className="relative z-2 flex h-[3.9rem] w-[3.6rem] items-center justify-center"
              >
                <img src={StageDot} alt="stage dot" className="h-full w-full" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[1.8rem] flex w-full max-w-360 items-end justify-between">
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

      {/* 모바일 */}
      <div className="mt-12 hidden w-full flex-wrap items-center justify-center gap-3 px-8 max-sm:flex">
        {STAGE_DATA.map((stage, index) => (
          <div
            key={`chip-${stage.date}-${stage.title}`}
            className={clsx(
              "flex items-center gap-2 rounded-full border border-gray-700 bg-gray-900/60 px-4 py-2 backdrop-blur-sm transition-all duration-300",
              getFadeInUpClass(isVisible)
            )}
            style={{ animationDelay: getStaggerDelay(index, 0.1, 0.1) }}
          >
            <span className="font-semibold text-[1.2rem] text-white">
              {stage.title}
            </span>
            <span className="text-[1rem] text-gray-400">{stage.date}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default StageBar;
