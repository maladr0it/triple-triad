import { useRef, useLayoutEffect } from "react";

export const useAppScale = <
  ContainerEl extends HTMLElement,
  AppEl extends HTMLElement
>() => {
  const containerRef = useRef<ContainerEl>(null);
  const appRef = useRef<AppEl>(null);

  useLayoutEffect(() => {
    const scaleApp = () => {
      if (!containerRef.current || !appRef.current) return;

      appRef.current.style.transform = "scale(1)";
      const containerRect = containerRef.current.getBoundingClientRect();
      const gameRect = appRef.current.getBoundingClientRect();
      const aspectRatio = gameRect.width / gameRect.height;

      let scale: number;
      if (containerRect.width / containerRect.height >= aspectRatio) {
        scale = containerRect.height / gameRect.height;
      } else {
        scale = containerRect.width / gameRect.width;
      }

      appRef.current.style.transform = `scale(${scale})`;
    };

    scaleApp();
    window.addEventListener("resize", scaleApp);

    return () => window.removeEventListener("resize", scaleApp);
  }, []);

  return {
    containerRef,
    appRef,
  };
};
