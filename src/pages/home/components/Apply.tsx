import applyBgImg from "@/assets/images/home/applybg.webp";
import useNavigation from "@/hooks/useNavigation";

const Apply = () => {
  const { navigateTo } = useNavigation();

  const handleClick = () => {
    navigateTo("/recruit");
  };

  return (
    <section className="relative isolate ml-[calc(-50vw+50%)] flex h-300 w-screen flex-col items-center justify-center gap-4 overflow-hidden text-center max-sm:h-auto max-sm:px-20 max-sm:py-32 max-md:h-140 max-lg:h-160">
      <img
        src={applyBgImg}
        alt="Apply Background"
        loading="lazy"
        className="-z-2 -translate-x-1/2 absolute top-0 left-1/2 h-[105%] w-full object-cover object-top opacity-50 blur-xs max-sm:w-[125%]"
      />

      <h2 className="font-semibold text-[3.6rem] text-white leading-10 tracking-[-0.07rem] max-sm:text-[1.8rem] max-sm:leading-8">
        UMC와 함께 꿈을 펼쳐 보세요!
      </h2>

      <p className="mt-8 font-normal text-[2.2rem] text-white leading-10 tracking-[-0.0675rem] max-sm:mt-4 max-sm:text-[1.2rem] max-sm:leading-[1.6rem]">
        새로운 도전과 기회를 UMC 한성대와 함께 경험해보세요
      </p>

      <button
        type="button"
        onClick={handleClick}
        className="mt-24 flex h-29 w-111.5 cursor-pointer items-center justify-center rounded-[6.25rem] bg-white font-semibold text-[2rem] text-black leading-10 tracking-[-0.075rem] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20 max-sm:mt-12 max-sm:h-16 max-sm:w-[16rem] max-sm:text-[1.2rem]"
      >
        <span className="font-[Pretendard]">바로 지원하기 →</span>
      </button>
    </section>
  );
};

export default Apply;
