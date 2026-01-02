import { useEffect, useRef, type Dispatch, type SetStateAction } from "react";
import { cn } from "../lib/utils/cn";
import { gsap } from "gsap";

interface HoverCardProps {
  index: number;
  src: string;
  selectedIndex: number | null;
  setSelectedIndex: Dispatch<SetStateAction<number | null>>;
}

const positions: { transform: string; zIndex: number }[] = [
  {
    transform: "scale-85 rotate-[-21deg] translate-y-22 translate-x-15",
    zIndex: 7,
  },
  {
    transform: "scale-90 rotate-[-14deg] translate-y-12 translate-x-7",
    zIndex: 8,
  },
  {
    transform: "scale-95 rotate-[-7deg] translate-y-3",
    zIndex: 9,
  },
  {
    transform: "",
    zIndex: 10,
  },
  {
    transform: "scale-95 rotate-[7deg] translate-y-3",
    zIndex: 9,
  },
  {
    transform: "scale-90 rotate-[14deg] translate-y-12 -translate-x-7",
    zIndex: 8,
  },
  {
    transform: "scale-85 rotate-[21deg] translate-y-22 -translate-x-15",
    zIndex: 7,
  },
];

const globalPositions: {
  [key: number]: {
    tx: number;
    ty: number;
    rotate: number;
    delay: number;
  }[];
} = {
  0: [
    { tx: 2, ty: -20, rotate: -1, delay: 0 },
    { tx: 80, ty: 0, rotate: 0, delay: 0.02 },
    { tx: 100, ty: 0, rotate: 0, delay: 0.04 },
    { tx: 80, ty: 0, rotate: 0, delay: 0.06 },
    { tx: 60, ty: 0, rotate: 0, delay: 0.08 },
    { tx: 40, ty: 0, rotate: 0, delay: 0.1 },
    { tx: -2, ty: 0, rotate: 1, delay: 0.12 },
  ],
  1: [
    { tx: 40, ty: 0, rotate: -1, delay: 0.02 },
    { tx: 0, ty: -20, rotate: 0, delay: 0.0 },
    { tx: 60, ty: 0, rotate: 0, delay: 0.02 },
    { tx: 100, ty: 0, rotate: 0, delay: 0.04 },
    { tx: 80, ty: 0, rotate: 0, delay: 0.06 },
    { tx: 40, ty: 0, rotate: 0, delay: 0.08 },
    { tx: -2, ty: 0, rotate: 1, delay: 0.1 },
  ],
  2: [
    { tx: 2, ty: 0, rotate: -1, delay: 0.04 },
    { tx: -40, ty: 0, rotate: 0, delay: 0.02 },
    { tx: 0, ty: -20, rotate: 0, delay: 0 },
    { tx: 100, ty: 0, rotate: 0, delay: 0.02 },
    { tx: 80, ty: 0, rotate: 0, delay: 0.04 },
    { tx: 40, ty: 0, rotate: 0, delay: 0.06 },
    { tx: -2, ty: 0, rotate: 1, delay: 0.08 },
  ],
  // Center
  3: [
    { tx: 2, ty: 0, rotate: -1, delay: 0.06 },
    { tx: -40, ty: 0, rotate: 0, delay: 0.04 },
    { tx: -80, ty: 0, rotate: 0, delay: 0.02 },
    { tx: 0, ty: -20, rotate: 0, delay: 0 },
    { tx: 80, ty: 0, rotate: 0, delay: 0.02 },
    { tx: 40, ty: 0, rotate: 0, delay: 0.04 },
    { tx: -2, ty: 0, rotate: 1, delay: 0.06 },
  ],
  4: [
    { tx: 2, ty: 0, rotate: -1, delay: 0.08 },
    { tx: -40, ty: 0, rotate: 0, delay: 0.06 },
    { tx: -80, ty: 0, rotate: 0, delay: 0.04 },
    { tx: 0, ty: 0, rotate: 0, delay: 0.02 },
    { tx: 80, ty: -20, rotate: 0, delay: 0 },
    { tx: 40, ty: 0, rotate: 0, delay: 0.02 },
    { tx: -2, ty: 0, rotate: 1, delay: 0.04 },
  ],
  5: [
    { tx: 2, ty: 0, rotate: -1, delay: 1 },
    { tx: -40, ty: 0, rotate: 0, delay: 0.08 },
    { tx: -80, ty: 0, rotate: 0, delay: 0.06 },
    { tx: 0, ty: 0, rotate: 0, delay: 0.04 },
    { tx: 80, ty: 0, rotate: 0, delay: 0.02 },
    { tx: 40, ty: -20, rotate: 0, delay: 0 },
    { tx: -2, ty: 0, rotate: 1, delay: 0.02 },
  ],
  6: [
    { tx: 2, ty: 0, rotate: -1, delay: 1.02 },
    { tx: -40, ty: 0, rotate: 0, delay: 1.0 },
    { tx: -80, ty: 0, rotate: 0, delay: 0.08 },
    { tx: 0, ty: 0, rotate: 0, delay: 0.06 },
    { tx: 80, ty: 0, rotate: 0, delay: 0.04 },
    { tx: 40, ty: 0, rotate: 0, delay: 0.02 },
    { tx: -2, ty: -20, rotate: 1, delay: 0 },
  ],
};

export const HoverCard = ({
  index,
  src,
  selectedIndex,
  setSelectedIndex,
}: HoverCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (!cardRef.current) return;
    setSelectedIndex(index);
    // gsap.to(cardRef.current, {
    //   translateY: -50,
    //   duration: 0.3,
    //   ease: "back.out(1.7)",
    // });
  };

  //   const handleMouseLeave = () => {
  //     if (!cardRef.current) return;
  //     gsap.to(cardRef.current, {
  //       translateY: 0,
  //       duration: 0.3,
  //       ease: "back.out(1.7)",
  //     });
  //   };

  const handleSomeCardSelected = (selectedIndex: number) => {
    const myPosition = globalPositions[selectedIndex][index];

    gsap.to(cardRef.current, {
      translateX: myPosition.tx,
      translateY: myPosition.ty - 20,
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
    if (selectedIndex != null) {
      handleSomeCardSelected(selectedIndex);
    } else {
      handleNoCardSelected();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex]);

  return (
    <div
      className={cn("hover-card-container", positions[index].transform)}
      style={{ zIndex: positions[index].zIndex }}
      onMouseEnter={handleMouseEnter}
      //   onMouseLeave={handleMouseLeave}
    >
      <div
        className={cn(
          "hover-card-inner w-64 aspect-9/16 bg-gray-300 rounded-[2.5rem] shadow-2xl overflow-clip",
          selectedIndex === index && "outline"
        )}
        ref={cardRef}
      >
        <img src={src} className="object-cover w-full h-full" />
      </div>
    </div>
  );
};
