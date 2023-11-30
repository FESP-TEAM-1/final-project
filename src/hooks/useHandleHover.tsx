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

  const handleEnterAutoPlay = () => {
    const timeoutId = window.setTimeout(() => {
      setIsHover(true);
    }, 500);
    setHoverTimeout(timeoutId);
  };

  const handleLeaveAutoPlay = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setIsHover(false);
  };

  return { isHover, handleEnterAutoPlay, handleLeaveAutoPlay };
};

export default useHandleHover;
