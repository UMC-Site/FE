import clsx from "clsx";
import { getFadeInUpClass } from "../../utils";

interface GoalChipProps {
  text: string;
  isVisible: boolean;
  fadeDelay: string;
  shineDelay: string;
}

const GoalChip = ({
  text,
  isVisible,
  fadeDelay,
  shineDelay,
}: GoalChipProps) => (
  <div
    className={clsx(
      "group hover:-translate-y-[3px] relative overflow-hidden rounded-[4rem] border border-white px-[3.2rem] py-8 font-medium text-[2rem] text-white leading-[1.4rem] transition-all duration-300 hover:border-white/40 hover:bg-white/5 max-sm:rounded-[2.6rem] max-sm:border-[0.055rem] max-sm:px-[1.6rem] max-sm:py-[0.8rem] max-sm:text-[1rem] max-sm:leading-6",
      getFadeInUpClass(isVisible)
    )}
    style={{ animationDelay: fadeDelay }}
  >
    {text}
    <span
      className="-left-full pointer-events-none absolute top-0 z-1 h-full w-full animate-shine bg-linear-to-r from-transparent via-white/30 to-transparent"
      style={{ animationDelay: shineDelay }}
    />
  </div>
);

export default GoalChip;
