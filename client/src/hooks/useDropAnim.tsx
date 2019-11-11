import { useLayoutEffect } from "react";

const ANIMATION_DURATION = 150;

interface Pos {
  x: number;
  y: number;
}

// slide into place from some specified position
export const useDropAnim = <T extends HTMLElement>(
  itemRef: React.MutableRefObject<T | null>,
  fromPos: Pos | null,
  isDropped: boolean,
) => {
  useLayoutEffect(() => {
    if (!isDropped || !fromPos || !itemRef.current) return;

    const itemRect = itemRef.current.getBoundingClientRect();
    const offsetX = fromPos.x - itemRect.left;
    const offsetY = fromPos.y - itemRect.top;

    itemRef.current.style.pointerEvents = "none";

    const animation = itemRef.current.animate(
      [
        {
          transform: `translate(${offsetX}px, ${offsetY}px)`,
        },
        { transform: `translate(0, 0)` },
      ],
      {
        duration: ANIMATION_DURATION,
        easing: "ease-out",
      },
    );

    animation.onfinish = () => {
      if (!itemRef.current) return;
      itemRef.current.style.pointerEvents = "";
    };
  }, [fromPos, isDropped]);
};
