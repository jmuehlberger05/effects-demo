import { useEffect, useRef, type Dispatch, type SetStateAction } from "react";
import { cn } from "../../lib/utils/cn";
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
    const myPosition = hoverPositions[selectedIndex][index];

    gsap.to(cardRef.current, {
      translateX: myPosition.tx,
      translateY: myPosition.ty,
      rotate: myPosition.rotate,
      delay: myPosition.delay,
      duration: 0.3,
      ease: "back.out(1.7)",
    });
    console.log("myPosition", myPosition);
  };

  const handleNoCardSelected = () => {
    gsap.to(cardRef.current, {
      translateY: 0,
      translateX: 0,
      rotate: 0,
      duration: 0.3,
      ease: "back.out(1.7)",
    });
  };

  useEffect(() => {
    void (selectedIndex != null
      ? handleSomeCardSelected(selectedIndex)
      : handleNoCardSelected());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex]);

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
        className={cn(
          "w-64 aspect-9/16 bg-gray-300 rounded-[2.5rem] shadow-2xl overflow-clip"
        )}
        ref={cardRef}
      >
        <img src={src} className="object-cover w-full h-full" />
      </div>
    </div>
  );
};
