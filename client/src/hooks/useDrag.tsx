interface Pos {
  x: number;
  y: number;
}

export const useDrag = <T extends HTMLElement>(
  itemRef: React.MutableRefObject<T | null>,
  onDragStart: () => void,
  onDragEnd: (pos: Pos) => void
) => {
  const handleMouseDown = (event: React.MouseEvent) => {
    if (!itemRef.current) return;

    const itemRect = itemRef.current.getBoundingClientRect();
    let running = true;
    let mouseX = event.clientX;
    let mouseY = event.clientY;
    let itemX = itemRect.left;
    let itemY = itemRect.top;
    const anchorX = mouseX - itemX;
    const anchorY = mouseY - itemY;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const handleMouseUp = () => {
      running = false;
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      if (itemRef.current) {
        itemRef.current.style.pointerEvents = "";
        itemRef.current.style.position = "inherit";
        itemRef.current.style.transform = "";
        itemRef.current.style.left = "";
        itemRef.current.style.top = "";
      }
      onDragEnd({ x: itemX, y: itemY });
    };

    const loop = () => {
      if (!running || !itemRef.current) return;
      requestAnimationFrame(loop);

      itemX = mouseX - anchorX;
      itemY = mouseY - anchorY;
      itemRef.current.style.transform = `translate(${itemX}px, ${itemY}px)`;
    };

    // prevent pointer events so mouseEnter events beneath be detected
    itemRef.current.style.pointerEvents = "none";
    itemRef.current.style.position = "fixed";
    itemRef.current.style.left = "0";
    itemRef.current.style.top = "0";

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    requestAnimationFrame(loop);
    onDragStart();
  };

  return {
    onMouseDown: handleMouseDown
  };
};
