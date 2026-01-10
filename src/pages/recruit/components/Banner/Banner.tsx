import BannerLogo1 from "../../../../assets/images/Recruit/Banner/bannerLogo1.png";
import BannerLogo2 from "../../../../assets/images/Recruit/Banner/bannerLogo2.png";

const Banner = () => {
  return (
    <div
      className="w-full h-[12rem] mt-[2rem] flex justify-center items-center max-[430px]:h-[7.127rem]"
      style={{
        background:
          "linear-gradient(90deg, #FF96E5 0%, #82007F 33%, #430060 66%, #050D31 100%)",
      }}
    >
      <div className="w-[60%] flex justify-start items-center gap-[3.2rem] max-[430px]:w-[92%] max-[430px]:gap-[1.2rem]">
        <picture>
          <source srcSet={BannerLogo2} media="(max-width: 430px)" />
          <img
            className="w-[5.79rem] max-[430px]:w-[3rem]"
            src={BannerLogo1}
            alt="banner"
          />
        </picture>

        <p className="text-[2.8rem] font-semibold leading-[3.341rem] text-white max-[430px]:text-[1.6rem] max-[430px]:leading-[1.671rem]">
          IT 연합 사이드 프로젝트 동아리 한성대 UMC 10기를 모집합니다!
        </p>
      </div>
    </div>
  );
};

export default Banner;
