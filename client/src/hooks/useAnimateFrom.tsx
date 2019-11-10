import { useLayoutEffect, useEffect } from "react";

interface Pos {
  x: number;
  y: number;
}

// slide into place from some specified position
export const useAnimateFrom = <T extends HTMLElement>(
  itemRef: React.MutableRefObject<T | null>,
  fromPos: Pos | null
) => {
  useLayoutEffect(() => {
    if (!itemRef.current || !fromPos) return;

    const itemRect = itemRef.current.getBoundingClientRect();
    const offsetX = fromPos.x - itemRect.left;
    const offsetY = fromPos.y - itemRect.top;

    const keyframes: Keyframe[] = [
      {
        transform: `translate(${offsetX}px, ${offsetY}px)`
      },
      { transform: `translate(0, 0)` }
    ];

    itemRef.current.style.pointerEvents = "none";

    const animation = itemRef.current.animate(keyframes, {
      duration: 150,
      easing: "ease-out"
    });

    animation.onfinish = () => {
      if (!itemRef.current) return;
      itemRef.current.style.pointerEvents = "auto";
    };
  }, [fromPos]);
};
