import BannerLogo from "@/assets/images/recruit/banner/bannerLogo.svg";

const Banner = () => {
  return (
    <div className="w-full py-[clamp(1.7rem,1.5vw,2rem)] mt-[clamp(2rem,2vw,2.6rem)] flex items-center justify-center bg-(image:--gradient-banner)">
      <div className="w-full pageContainer flex items-center gap-[clamp(1.2rem,2vw,3.2rem)]">
        <img
          src={BannerLogo}
          alt="bannerLogo"
          className="w-[clamp(3rem,5vw,5.79rem)]"
        />

        <p className="font-semibold text-white text-[clamp(1.4rem,2vw,2.8rem)]">
          IT 연합 사이드 프로젝트 동아리 한성대 UMC 10기를 모집합니다!
        </p>
      </div>
    </div>
  );
};

export default Banner;
