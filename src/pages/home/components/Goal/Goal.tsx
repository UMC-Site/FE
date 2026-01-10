import { GOALS } from "../../data";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { getStaggerDelay } from "../../utils";
import GoalChip from "./GoalChip";

const SHINE_DELAYS = ["0s", "1.3s", "2.6s"];

const Goal = () => {
  const { isVisible, elementRef } = useScrollAnimation();

  return (
    <section
      ref={elementRef}
      className="flex h-128 w-full items-center justify-center max-sm:h-56"
    >
      <div className="flex h-[16.2rem] w-306 flex-col items-center justify-between text-center max-sm:h-[7.904rem] max-sm:w-[35.4rem]">
        <h3 className="font-bold text-[2.8rem] text-white leading-[3.4rem] tracking-[0.03rem] max-sm:text-[1.4rem] max-sm:leading-[1.7rem]">
          함께 성장하는 UMC의 목표는,
        </h3>

        <div className="flex w-full items-center justify-center gap-[2.8rem] max-sm:gap-4">
          {GOALS.map((goal, index) => (
            <GoalChip
              key={goal}
              text={goal}
              isVisible={isVisible}
              fadeDelay={getStaggerDelay(index, 0.3, 0.3)}
              shineDelay={SHINE_DELAYS[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goal;
