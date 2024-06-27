"use client";

import React, { useState } from "react";

interface DockItem {
  icon: React.ReactNode;
  handleClick?: () => void;
}

interface DockProps {
  direction: "horizontal" | "vertical";
  items: DockItem[];
  style: "dock" | "button";
  className?: string
}

export const Dock: React.FC<DockProps> = ({ direction, items, style, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const isHorizontal = direction === "horizontal";

  const dockStyles = `${className ?? ''} pointer-events-auto ${
    isHorizontal ? "h-full" : "w-full"
  } bg-[#2a3042] bg-opacity-50 backdrop-blur-md p-3 flex items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 ${
    hoveredIndex !== null ? "scale-105" : "scale-100"
  }`;

  const buttonStyles = `flex items-center justify-center pointer-events-auto`;

  return (
    <div className={style === "dock" ? dockStyles : buttonStyles}>
      <div
        className={`flex gap-3 ${
          isHorizontal ? "flex-row" : "flex-col"
        } text-zinc-500
        `}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`p-1 bg-[#2a3042] rounded-lg hover:bg-[#2a3042] transition-transform transform hover:scale-125 cursor-pointer
              ${
                style === "button"
                  ? "!p-2 !rounded-full hover:!scale-105"
                  : null
              }
              `}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={item.handleClick}
          >
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
};
