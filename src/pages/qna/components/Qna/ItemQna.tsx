import clsx from "clsx";
import { useState } from "react";
import ArrowDown from "../../../../assets/images/icons/arrowDown.svg";

interface ItemQnaProps {
  question: string;
  answer: string;
}

const ItemQna = ({ question, answer }: ItemQnaProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full rounded-[clamp(0.28rem,1.5vw,1rem)] bg-qna-4 p-[clamp(1.15rem,3vw,4rem)]">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative w-full text-left"
        aria-expanded={isOpen}
      >
        <div className="flex max-w-[90%] items-start gap-[clamp(0.316rem,0.7vw,1.1rem)] text-[clamp(1.3rem,2vw,3rem)] text-intro">
          <span className="shrink-0 font-semibold">Q.</span>
          <span className="font-medium">{question}</span>
        </div>

        <img
          className={clsx(
            "absolute top-0 right-0 w-[clamp(1.6rem,2.5vw,3.6rem)] transition-transform duration-300",
            isOpen && "rotate-180"
          )}
          src={ArrowDown}
          alt="arrow"
        />
      </button>

      <div
        className={clsx(
          "overflow-hidden transition-[max-height] duration-300 ease-in-out",
          "transform-[translateZ(0)] will-change-[max-height]",
          isOpen ? "max-h-[5000px]" : "max-h-0"
        )}
      >
        <p
          className={clsx(
            "mt-[clamp(1.15rem,3vw,4rem)] whitespace-pre-line text-[clamp(1.1rem,2vw,2.6rem)] text-modal-2 leading-[1.4]",
            "pl-[calc(2ch+clamp(0.5rem,0.7vw,1rem))]"
          )}
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

export default ItemQna;
