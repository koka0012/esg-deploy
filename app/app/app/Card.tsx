import React from "react";

interface CardProps {
  title: string;
  content: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="flex flex-col h-1/2 bg-[#2a3042] rounded-md p-2 ">
      <h2 className="text-zinc-300 text-md font-semibold mb-2">{title}</h2>
      <div className="text-zinc-400 overflow-auto">{content}</div>
    </div>
  );
};

export default Card;
