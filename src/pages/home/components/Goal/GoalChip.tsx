import clsx from "clsx";
import { getFadeInUpClass } from "../../utils";

const GoalChip = ({
  text,
  isVisible,
  fadeDelay,
  shineDelay,
}: {
  text: string;
  isVisible: boolean;
  fadeDelay: string;
  shineDelay: string;
}) => (
  <div
    className={clsx(
      "group hover:-translate-y-[3px] relative overflow-hidden rounded-[5rem] border border-white px-[4rem] py-[2.4rem] font-medium text-[2.4rem] text-white leading-[1.6rem] transition-all duration-300 hover:border-white/40 hover:bg-white/5 max-sm:rounded-[2.6rem] max-sm:border-[0.055rem] max-sm:px-[1.6rem] max-sm:py-[0.8rem] max-sm:text-[1rem] max-sm:leading-6",
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
