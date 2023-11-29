import React, { useEffect } from "react";

const useImgLazyLoading = (
  imgRef: React.RefObject<HTMLImageElement>,
  options = {}
) => {
  useEffect(() => {
    if (!imgRef.current) return;

    const callback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target as HTMLImageElement;
          image.src = image.dataset.src || "";
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [imgRef, options]);
};

export default useImgLazyLoading;
