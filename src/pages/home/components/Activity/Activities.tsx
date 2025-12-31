import texture1Img from "@/assets/images/home/texture1.png";
import { ACTIVITIES } from "../../data";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import ActivityItem from "./ActivityItem";

const Activities = () => {
  const { isVisible, elementRef } = useScrollAnimation(0.3);

  return (
    <section
      ref={elementRef}
      className="relative flex w-full flex-col items-center overflow-hidden pb-28"
    >
      <img
        src={texture1Img}
        alt=""
        className="-mt-8 max-sm:-mt-28 absolute top-0 right-0 w-md max-sm:w-40"
        aria-hidden="true"
      />

      <div className="mt-60 flex h-34 flex-col items-center justify-between max-sm:mt-48 max-sm:h-[4.917rem]">
        <p className="font-normal text-[2.8rem] text-white leading-[3.4rem] tracking-[0.06rem] max-sm:text-[1.3rem] max-sm:leading-[1.7rem]">
          HSU UMC
        </p>
        <h3 className="font-bold text-[3.2rem] text-white leading-[3.8rem] tracking-[0.06rem] max-sm:text-[1.8rem] max-sm:leading-[2.2rem]">
          챌린저가 된다면,
        </h3>
      </div>

      <div className="mt-[7.2rem] flex w-[92.9rem] flex-col gap-[4.8rem] max-sm:mt-[4.164rem] max-sm:w-[36.663rem] max-sm:gap-[3.6rem]">
        {ACTIVITIES.map((activity, index) => (
          <ActivityItem
            key={activity.id}
            activity={activity}
            isVisible={isVisible}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Activities;
