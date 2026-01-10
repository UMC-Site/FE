import clsx from "clsx";
import introLogoImg from "@/assets/images/home/introLogo.png";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { getFadeInUpClass, getStaggerDelay } from "../utils";

const Intro = () => {
  const { isVisible, elementRef } = useScrollAnimation();

  return (
    <section
      ref={elementRef}
      className="my-24 flex w-full flex-col items-center max-sm:my-[3.282rem]"
    >
      <div
        className={clsx(
          "flex h-48 w-48 items-center justify-center overflow-hidden rounded-full max-sm:h-[4.8rem] max-sm:w-[4.8rem]",
          isVisible ? "animate-bounce-in" : "scale-30 opacity-0"
        )}
      >
        <img
          src={introLogoImg}
          alt="UMC Logo"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mt-16 flex flex-col items-center text-center max-sm:mt-[0.89rem]">
        <h2
          className={clsx(
            "font-bold text-[3.2rem] text-white leading-[3.8rem] tracking-[0.03rem] max-sm:text-[2.4rem] max-sm:leading-[2.8rem]",
            getFadeInUpClass(isVisible)
          )}
          style={{ animationDelay: getStaggerDelay(0, 0, 0.3) }}
        >
          UMC란?
        </h2>

        <p
          className={clsx(
            "mt-[3.4rem] font-semibold text-[2.4rem] text-gray-200 leading-8 max-sm:mt-[1.6rem] max-sm:text-[1.2rem] max-sm:leading-[1.8rem]",
            getFadeInUpClass(isVisible)
          )}
          style={{ animationDelay: getStaggerDelay(1, 0, 0.3) }}
        >
          앱&웹 서비스 런칭에 도전하는 대학생 IT 연합동아리
        </p>

        <p
          className={clsx(
            "mt-[1.6rem] w-[83.1rem] text-center font-semibold text-[2rem] text-gray-500 leading-14 max-sm:mt-[0.774rem] max-sm:w-150 max-sm:text-[1.2rem] max-sm:leading-[1.8rem]",
            getFadeInUpClass(isVisible)
          )}
          style={{ animationDelay: getStaggerDelay(2, 0, 0.3) }}
        >
          University MakeUs Challenge[UMC]
          <span className="font-normal">
            는 2021년 8월을 시작으로, IT 프로젝트 경험과 네트워킹 기회를
            제공하기 위해 결성되었습니다. 서비스를 직접 기획하고 개발할 수 있는
            기회를 얻을 수 있으며, IT 역량 향상과 UX/UI 실무 경험을 축적할 수
            있습니다.
          </span>
        </p>
      </div>
    </section>
  );
};

export default Intro;
