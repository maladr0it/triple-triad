import { useRef } from "react";

import { clamp } from "../utils";

// default assumed frame time in ms
const DEFAULT_FRAME_TIME = 16;

const MOVE_DRAG_FACTOR = 0.25;
const ROT_DRAG_FACTOR = 0.1;
// how far the card should rotate (degs) per unit speed (px / frame)
const SPEED_TO_ROT = 1.1;

export const useDragPlaceholder = <
  T extends HTMLElement,
  U extends HTMLElement
>() => {
  const containerRef = useRef<T>(null);
  const contentRef = useRef<U>(null);

  const handleMouseDown = (event: React.MouseEvent) => {
    if (!containerRef.current || !contentRef.current) {
      return;
    }
    const rect = containerRef.current.getBoundingClientRect();

    let running = true;
    let mouseX = event.clientX;
    let mouseY = event.clientY;
    const anchorX = mouseX - rect.left;
    const anchorY = mouseY - rect.top;
    const anchorPercX = (anchorX / rect.width) * 100;
    const anchorPercY = (anchorY / rect.width) * 100;
    let cardX = rect.left + anchorX;
    let cardY = rect.top + anchorY;
    let prevCardX = cardX;
    let prevCardY = cardY;
    let rotX = 0;
    let rotY = 0;
    const initialCardX = cardX;
    const initialCardY = cardY;
    let lastUpdate = performance.now();

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const handleMouseUp = () => {
      running = false;
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      if (containerRef.current) {
        containerRef.current.style.transform = "translate3d(0,0,0)";
        containerRef.current.style.transition = "transform 0.15s ease-out";
        containerRef.current.style.zIndex = "0";
      }
      if (contentRef.current) {
        contentRef.current.style.transform = "rotateX(0) rotateY(0)";
        contentRef.current.style.transition = "transform 0.15s ease-out";
      }
    };

    const loop = () => {
      if (!running || !containerRef.current || !contentRef.current) {
        return;
      }
      requestAnimationFrame(loop);

      // calculate time
      const now = performance.now();
      // if update time is 0 (1st iteration), assume a default
      const dt = now - lastUpdate === 0 ? DEFAULT_FRAME_TIME : now - lastUpdate;
      // time per 1/60 second (for convenience)
      const relativeDt = dt / DEFAULT_FRAME_TIME;

      // move container
      const targetX = mouseX - cardX;
      const targetY = mouseY - cardY;
      const ratio = 1 - Math.pow(1 - MOVE_DRAG_FACTOR, relativeDt);
      cardX += ratio * targetX;
      cardY += ratio * targetY;

      containerRef.current.style.transform = `translate3d(${cardX -
        initialCardX}px, ${cardY - initialCardY}px, 0)`;

      // rotate content
      const velX = (cardX - prevCardX) / relativeDt;
      const velY = (cardY - prevCardY) / relativeDt;

      // card always attempts to rotate to be flat, is counteracted by its velocity
      const targetRotX = -rotX - velY * SPEED_TO_ROT;
      const targetRotY = -rotY + velX * SPEED_TO_ROT;
      const rotRatio = 1 - Math.pow(1 - ROT_DRAG_FACTOR, relativeDt);
      rotX = clamp(-90, 90, rotX + targetRotX * rotRatio);
      rotY = clamp(-90, 90, rotY + targetRotY * rotRatio);

      contentRef.current.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;

      prevCardY = cardY;
      prevCardX = cardX;
      lastUpdate = performance.now();
    };

    containerRef.current.style.transition = "";
    containerRef.current.style.zIndex = "100";
    contentRef.current.style.transition = "";
    contentRef.current.style.transformOrigin = `${anchorPercX}% ${anchorPercY}%`;

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    loop();
  };

  return {
    containerProps: {
      onMouseDown: handleMouseDown,
      ref: containerRef
    },
    contentProps: {
      ref: contentRef
    }
  };
};
