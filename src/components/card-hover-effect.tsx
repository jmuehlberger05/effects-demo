import { useState } from "react";
import { HoverCard } from "./hover-card";

export const CardHoverEffect = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleMouseLeave = () => {
    setSelectedIndex(null);
  };

  return (
    <div className="flex -space-x-25" onMouseLeave={handleMouseLeave}>
      <HoverCard
        index={0}
        src={"/images/1.jpg"}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <HoverCard
        index={1}
        src={"/images/2.jpg"}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <HoverCard
        index={2}
        src={"/images/3.jpg"}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <HoverCard
        index={3}
        src={"/images/4.jpg"}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <HoverCard
        index={4}
        src={"/images/5.jpg"}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <HoverCard
        index={5}
        src={"/images/6.jpg"}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <HoverCard
        index={6}
        src={"/images/7.jpg"}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </div>
  );
};
