import clsx from "clsx";
import StageDot from "@/assets/images/icons/stageDot.svg";
import { STAGE_DATA } from "../../data";
import { getStaggerDelay } from "../../utils";
import StageItem from "./StageItem";

interface StageBarProps {
  isVisible: boolean;
}

const ITEMS_PER_ROW = 5;

const chunkArray = <T,>(array: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

const StageBar = ({ isVisible }: StageBarProps) => {
  const rows = chunkArray(STAGE_DATA, ITEMS_PER_ROW);

  return (
    <div className="flex w-full max-w-360 flex-col items-center gap-16 px-8 max-sm:max-w-full max-sm:gap-12">
      {rows.map((row, rowIndex) => (
        <div key={`row-${row[0].date}`} className="flex w-full flex-col items-center">
          <div
            className={clsx(
              "relative mt-16 flex w-full max-w-360 items-center justify-center max-sm:mt-[3.457rem] max-sm:max-w-160",
              isVisible
                ? "animate-reveal-from-left"
                : "opacity-0 [clip-path:inset(0_100%_0_0)]"
            )}
            style={{ animationDelay: `${rowIndex * 0.3}s` }}
          >
            <div className="-translate-y-1/2 absolute top-1/2 right-[7.2rem] left-[7.2rem] h-[0.2rem] bg-gray-200 max-sm:right-14 max-sm:left-14 max-sm:h-[0.1rem]" />

            <div className="relative z-2 mx-[5.4rem] flex w-[calc(100%-10.8rem)] items-center justify-between max-sm:mx-[2.6rem] max-sm:w-[calc(100%-5.2rem)]">
              {row.map((stage) => (
                <div
                  key={`dot-${stage.date}-${stage.title}`}
                  className="relative z-2 flex h-[3.9rem] w-[3.6rem] items-center justify-center max-sm:h-[1.95rem] max-sm:w-[1.8rem]"
                >
                  <img src={StageDot} alt="stage dot" className="h-full w-full" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-[1.8rem] flex w-full max-w-360 items-end justify-between max-sm:mt-[1.642rem] max-sm:max-w-160">
            {row.map((stage, index) => (
              <StageItem
                key={`${stage.date}-${stage.title}`}
                stage={stage}
                isVisible={isVisible}
                delay={getStaggerDelay(rowIndex * ITEMS_PER_ROW + index, 0.4, 0.4)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StageBar;
