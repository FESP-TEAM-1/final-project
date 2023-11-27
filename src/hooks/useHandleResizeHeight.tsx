import React, { useEffect, useRef } from "react";

const useHandleResizeHeight = (inputValue: string) => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const handleResizeHeight = () => {
    if (ref.current) {
      ref.current.style.height = "0";
      ref.current.style.height = ref.current.scrollHeight + "px";
    }
  };

  useEffect(() => {
    handleResizeHeight();
  }, [inputValue]);

  return { ref, handleResizeHeight };
};

export default useHandleResizeHeight;
