import { useEffect, useRef, type Dispatch, type SetStateAction } from "react";
import { gsap } from "gsap";
import { hoverPositions, initialPositions } from "./config";

interface HoverCardProps {
  index: number;
  src: string;
  selectedIndex: number | null;
  setSelectedIndex: Dispatch<SetStateAction<number | null>>;
}

export const HoverCard = ({
  index,
  src,
  selectedIndex,
  setSelectedIndex,
}: HoverCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => setSelectedIndex(index);

  const handleSomeCardSelected = (selectedIndex: number) => {
    const hoverPos = hoverPositions[selectedIndex][index];

    gsap.to(cardRef.current, {
      translateX: hoverPos.tx,
      translateY: hoverPos.ty,
      rotate: hoverPos.rotate,
      delay: hoverPos.delay,
      duration: 0.3,
      ease: "back.out(1.4)",
    });
  };

  const handleNoCardSelected = () => {
    gsap.to(cardRef.current, {
      translateY: 0,
      translateX: 0,
      rotate: 0,
      duration: 0.3,
      ease: "back.out(1.4)",
    });
  };

  useEffect(() => {
    void (selectedIndex != null
      ? handleSomeCardSelected(selectedIndex)
      : handleNoCardSelected());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex]);

  // Entrance animation
  useEffect(() => {
    gsap.killTweensOf(cardRef.current);
    gsap.fromTo(
      cardRef.current,
      {
        opacity: Math.abs(index - 3) === 0 ? 1 : 0,
        x: initialPositions[index].from,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: Math.abs(index - 3) * 0.1,
        ease: "power3.out",
      }
    );
  }, [index]);

  const initPos = initialPositions[index];

  return (
    <div
      style={{
        rotate: `${initPos.rotate}deg`,
        scale: initPos.scale,
        transform: `translate(${initPos.tx / 4}rem, ${initPos.ty / 4}rem)`,
        zIndex: initPos.z,
      }}
      onMouseEnter={handleMouseEnter}
    >
      <div
        className={"w-64 aspect-9/16 rounded-[2.5rem] overflow-clip"}
        ref={cardRef}
      >
        <img src={src} className="object-cover w-full h-full" />
      </div>
    </div>
  );
};
