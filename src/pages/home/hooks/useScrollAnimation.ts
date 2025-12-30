import { type RefObject, useEffect, useRef, useState } from "react";

interface UseScrollAnimationReturn {
  isVisible: boolean;
  elementRef: RefObject<HTMLDivElement | null>;
}

const useScrollAnimation = (threshold = 0.6): UseScrollAnimationReturn => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold]);

  return { isVisible, elementRef };
};

export default useScrollAnimation;
