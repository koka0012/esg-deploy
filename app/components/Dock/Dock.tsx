"use client";

import React, { useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { cn } from "@/app/lib/utils";

interface DockItem {
  icon: React.ReactNode;
  handleClick?: () => void;
  tooltip: string;
}

interface DockProps {
  direction: "horizontal" | "vertical";
  items: DockItem[];
  style: "dock" | "button";
  className?: string;
}

export const Dock: React.FC<DockProps> = ({
  direction,
  items,
  style,
  className,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const isHorizontal = direction === "horizontal";

  const dockStyles = `${className ?? ""} pointer-events-auto ${
    isHorizontal ? "h-full" : "w-full"
  } bg-[#2a3042] bg-opacity-50 backdrop-blur-md p-2 flex items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 ${
    hoveredIndex !== null ? "scale-105" : "scale-100"
  }`;

  const buttonStyles = `flex items-center justify-center pointer-events-auto`;

  return (
    <div className={style === "dock" ? dockStyles : buttonStyles}>
      <div
        className={`flex gap-5 ${
          isHorizontal ? "flex-row" : "flex-col"
        } text-[#6a738b]
        `}
      >
        {items.map(({ tooltip, icon, handleClick }, index) => (
          <Tooltip delayDuration={0} key={index.toString()}>
            <TooltipTrigger disabled={!tooltip}>
              <div
                key={index}
                className={`p-1 bg-[#2a3042] rounded-lg transition-transform transform hover:scale-125 cursor-pointer relative
                ${
                  style === "button"
                    ? "!p-2 !rounded-full hover:!scale-105"
                    : null
                }
                `}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={handleClick}
              >
                {icon}
              </div>
            </TooltipTrigger>
            <TooltipContent
              className={cn("bg-[#2a3042]/25", {
                "-mt-8": isHorizontal,
                "mr-2": !isHorizontal,
              })}
              side={isHorizontal ? "top" : "left"}
            >
              {tooltip ?? ""}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};
