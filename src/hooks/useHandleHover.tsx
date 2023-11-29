import { useEffect, useState } from "react";

const useHandleHover = () => {
  const [isHover, setIsHover] = useState(false);
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

  const handleHover = (event: string) => {
    if (event === "enter") {
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
  return { isHover, handleHover };
};

export default useHandleHover;
