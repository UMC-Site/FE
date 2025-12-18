import { useState } from "react";
import clsx from "clsx";
import ArrowDown from "../../../../assets/images/icons/arrowDown.svg";

interface ItemQnaProps {
  question: string;
  answer: string;
}

const ItemQna = ({ question, answer }: ItemQnaProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full rounded-[clamp(0.28rem,1.5vw,1rem)] bg-qna-4 p-[clamp(1.1rem,5vw,4rem)]">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative w-full text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-[clamp(0.316rem,1.5vw,1.1rem)] text-[clamp(1.3rem,2.5vw,3rem)] text-intro max-w-[90%]">
          <span className="font-semibold shrink-0">Q.</span>

          <div className="flex flex-col w-fit">
            <span className="font-medium">{question}</span>

            {isOpen && (
              <p
                className="
                  mt-[clamp(1.15rem,4vw,4rem)]
                  text-[clamp(1.1rem,3vw,2.6rem)]
                  text-modal-2
                  leading-[1.4]
                "
              >
                {answer}
              </p>
            )}
          </div>
        </div>

        <img
          className={clsx(
            "absolute right-0 top-0 transition-transform duration-300 w-[clamp(1.6rem,4vw,3.6rem)]",
            isOpen && "rotate-180"
          )}
          src={ArrowDown}
          alt="arrow"
        />
      </button>
    </div>
  );
};

export default ItemQna;
