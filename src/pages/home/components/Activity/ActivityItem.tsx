import clsx from "clsx";
import type { Activity } from "../../data";
import { getFadeInUpClass, getStaggerDelay } from "../../utils";

interface ActivityItemProps {
  activity: Activity;
  isVisible: boolean;
  index: number;
}

const ActivityItem = ({ activity, isVisible, index }: ActivityItemProps) => (
  <div
    className={clsx(
      "flex w-full items-start justify-between gap-[5.2rem] max-sm:gap-[2.14rem]",
      getFadeInUpClass(isVisible)
    )}
    style={{ animationDelay: getStaggerDelay(index) }}
  >
    <div className="h-40 w-64 shrink-0 overflow-hidden rounded-md sm:h-48 sm:w-72 sm:rounded-lg md:h-64 md:w-96 lg:h-80 lg:w-lg xl:h-120 xl:w-200">
      <img
        src={activity.image}
        alt={activity.title}
        className={clsx(
          "h-full w-full object-cover",
          activity.imageRotate && "rotate-180"
        )}
      />
    </div>

    <div className="flex flex-col gap-[1.6rem] pt-[1.1rem] text-left max-sm:w-[18.1rem] max-sm:gap-[0.598rem] max-sm:pt-[0.422rem] sm:gap-4 sm:pt-[0.7rem] md:gap-[1.2rem] md:pt-[0.85rem] lg:gap-[1.4rem] lg:pt-4">
      <h4 className="font-semibold text-[2.4rem] text-white max-sm:text-[1.2rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] xl:text-[2.2rem]">
        {activity.title}
      </h4>
      <p className="font-normal text-[1.8rem] text-white max-sm:text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.6rem] xl:text-[1.7rem]">
        {activity.description}
      </p>
    </div>
  </div>
);

export default ActivityItem;
