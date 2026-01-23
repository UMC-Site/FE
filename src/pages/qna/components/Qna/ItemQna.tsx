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
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative w-full text-left"
        aria-expanded={isOpen}
      >
        <div className="flex max-w-[90%] items-start gap-[clamp(0.316rem,0.7vw,1.1rem)] text-[clamp(1.3rem,2vw,3rem)] text-intro">
          <span className="shrink-0 font-semibold">Q.</span>

          <div className="flex w-fit flex-col">
            <span className="font-medium">{question}</span>

            <div
              className={clsx(
                "grid min-h-0 transition-[grid-template-rows] duration-300 ease-in-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="min-h-0 overflow-hidden">
                <p
                  className={clsx(
                    "whitespace-pre-line text-[clamp(1.1rem,2vw,2.6rem)] text-modal-2 leading-[1.4] transition-opacity duration-300",
                    isOpen
                      ? "mt-[clamp(1.15rem,3vw,4rem)] opacity-100 visible pointer-events-auto"
                      : "mt-0 opacity-0 invisible pointer-events-none",
                  )}
                >
                  {answer}
                </p>
              </div>
            </div>
          </div>
        </div>

        <img
          className={clsx(
            "absolute top-0 right-0 w-[clamp(1.6rem,2.5vw,3.6rem)] transition-transform duration-300",
            isOpen && "rotate-180",
          )}
          src={ArrowDown}
          alt="arrow"
        />
      </button>
    </div>
  );
};

export default ItemQna;
