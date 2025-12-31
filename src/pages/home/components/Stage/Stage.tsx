import texture2Img from "@/assets/images/home/texture2.png";
import umcCharacterImg from "@/assets/images/home/umcCharacter.png";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import StageBar from "./StageBar";

const Stage = () => {
  const { isVisible, elementRef } = useScrollAnimation();

  return (
    <section
      ref={elementRef}
      className="relative flex w-full flex-col items-center pb-16"
    >
      <img
        src={texture2Img}
        alt=""
        className="-mt-8 max-sm:-mt-12 absolute top-0 left-0 w-md max-sm:w-40"
        aria-hidden="true"
      />

      <div className="mt-32 flex h-40 w-40 items-center justify-center overflow-hidden rounded-full max-sm:mt-[4.748rem] max-sm:h-20 max-sm:w-20">
        <img
          src={umcCharacterImg}
          alt="UMC Character"
          className="h-full w-full object-cover"
        />
      </div>

      <h3 className="mt-12 font-bold text-[2.8rem] text-white leading-[3.4rem] tracking-[0.06rem] max-sm:mt-[0.795rem] max-sm:text-[1.8rem] max-sm:leading-[2.2rem]">
        한성대학교 UMC 여정
      </h3>

      <StageBar isVisible={isVisible} />

      <p className="mt-26 text-center font-normal text-[2rem] text-gray-500 leading-12 max-sm:mt-[3.915rem] max-sm:text-[1rem] max-sm:leading-[1.8rem]">
        한성대학교 UMC는 5기를 시작으로, 기획, 디자인, 서버, 안드로이드, iOS, 웹
        등
        <br />
        여러 전공의 학생들이 참여하며 창의적인 아이디어를 발전시키는 활동을
        했습니다.
      </p>
    </section>
  );
};

export default Stage;
