import { useState, useEffect } from "react";

const useHandleMainHover = () => {
  const [isHover, setIsHover] = useState(false);
  const [isElementSingle, setIsElementSingle] = useState(false);
  const [isElementOnFarRight, setIsElementOnFarRight] = useState(false);
  const [isElementOnFarLeft, setIsElementOnFarLeft] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<number | null>(null);

  useEffect(() => {
    const clearHoverTimeout = () => {
      if (hoverTimeout) clearTimeout(hoverTimeout);
      setIsHover(false);
    };

    const handleWindowEvents = () => {
      clearHoverTimeout();
      setIsHover(false);
    };

    window.addEventListener("blur", handleWindowEvents);
    window.addEventListener("mouseleave", handleWindowEvents);

    return () => {
      window.removeEventListener("blur", handleWindowEvents);
      window.removeEventListener("mouseleave", handleWindowEvents);
    };
  }, [hoverTimeout]);

  const handleHover = (e: React.MouseEvent, event: string) => {
    if (event === "enter" && e) {
      // 마우스가 엘리먼트에 진입하는 경우
      const currentTargetRight = e.currentTarget.getBoundingClientRect().right;
      const currentTargetLeft = e.currentTarget.getBoundingClientRect().left;
      const elementRight = window.innerWidth - 32 - 20; // 패딩 값, 스크롤 너비 값
      const elementLeft = 0 + 32; // 패딩 값

      if (
        currentTargetLeft <= elementLeft &&
        currentTargetRight >= elementRight
      ) {
        // 엘리먼트가 1개일 경우
        setIsElementSingle(true);
      } else {
        // 엘리먼트가 2개 이상
        setIsElementOnFarLeft(currentTargetLeft <= elementLeft); // 엘리먼트가 제일 왼쪽에 있는 경우
        setIsElementOnFarRight(currentTargetRight >= elementRight); // 엘리먼트가 제일 오른쪽에 있는 경우
        setIsElementSingle(false);
      }

      const timeoutId = window.setTimeout(() => {
        setIsHover(true);
        console.log("Hover state set to true");
      }, 500);
      setHoverTimeout(timeoutId);
    } else {
      // 마우스가 엘리먼트를 떠나는 경우
      if (hoverTimeout) clearTimeout(hoverTimeout);
      setIsHover(false);
      console.log("Hover state set to false");
    }
  };

  return {
    isHover,
    isElementSingle,
    isElementOnFarRight,
    isElementOnFarLeft,
    handleHover,
  };
};

export default useHandleMainHover;
