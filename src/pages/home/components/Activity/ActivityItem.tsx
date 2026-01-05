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
    <div className="h-120 w-200 shrink-0 overflow-hidden rounded-[0.6rem] max-sm:h-60 max-sm:w-100 max-sm:rounded-[0.4rem]">
      <img
        src={activity.image}
        alt={activity.title}
        className={clsx(
          "h-full w-full object-cover",
          activity.imageRotate && "rotate-180"
        )}
      />
    </div>

    <div className="flex flex-col gap-[1.6rem] pt-[1.1rem] text-left max-sm:w-[18.1rem] max-sm:gap-[0.598rem] max-sm:pt-[0.422rem]">
      <h4 className="font-semibold text-[2.4rem] text-white leading-[2.8rem] max-sm:text-[1.2rem] max-sm:leading-6">
        {activity.title}
      </h4>
      <p className="font-normal text-[1.8rem] text-white leading-12 max-sm:text-[1rem] max-sm:leading-[1.4rem]">
        {activity.description}
      </p>
    </div>
  </div>
);

export default ActivityItem;
