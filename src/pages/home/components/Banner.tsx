import bannerLogoImg from "@/assets/images/home/bannerLogo.png";
import lightImg from "@/assets/images/home/light.png";
import { FLOATING_SHAPES } from "../data";
import type { FloatingShapeProps, LightEffectProps } from "../types";

const FloatingShape = ({ className, gradient }: FloatingShapeProps) => (
  <div
    className={`absolute size-48 rounded-full opacity-30 blur-2xl ${className}`}
    style={{ background: gradient }}
  />
);

const LightEffect = ({ position }: LightEffectProps) => (
  <img
    src={lightImg}
    alt=""
    className={`pointer-events-none absolute z-30 w-[clamp(5rem,12vw,15%)] animate-twinkling ${position}`}
    aria-hidden="true"
  />
);

const Banner = () => {
  return (
    <section className="relative flex aspect-32/17 min-h-200 w-full items-center justify-center overflow-hidden max-sm:min-h-140">
      {/* Floating Shapes */}
      <div className="pointer-events-none absolute inset-0 z-10">
        {FLOATING_SHAPES.map(({ id, ...shape }) => (
          <FloatingShape key={id} {...shape} />
        ))}
      </div>

      <div className="relative z-20 flex w-4/5 max-w-6xl flex-col items-center">
        <p className="animate-sparkle-text text-center font-normal font-shippori text-[clamp(1.6rem,3.5vw,3.4rem)] text-white leading-normal">
          BREAK THE RULES
        </p>

        <img
          src={bannerLogoImg}
          alt="HSU UMC"
          className="mt-3 h-auto w-[clamp(18rem,50vw,57rem)] animate-sparkle"
        />

        <p className="mt-3 animate-sparkle-text text-center font-semibold text-[clamp(1rem,2.5vw,2.6rem)] text-white leading-tight opacity-95">
          HSU_MAKE US CHALLENGE
        </p>
      </div>

      {/* Light Effects */}
      <LightEffect position="right-[27%] bottom-[30%]" />
      <LightEffect position="bottom-[44%] left-[26%]" />
    </section>
  );
};

export default Banner;
