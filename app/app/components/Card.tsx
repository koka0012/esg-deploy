import React from "react";

interface CardProps {
  title: string;
  content: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="flex flex-col bg-[#2a3042] rounded-md py-2 px-4 w-[25rem] h-72">
      <h2 className="text-[#a2adcc] text-base font-thin font-publica mb-2">{title}</h2>
      <div className="text-zinc-400 overflow-auto flex-1">{content}</div>
    </div>
  );
};

export default Card;
