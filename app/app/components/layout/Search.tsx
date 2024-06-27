"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface Option {
  label: string;
  value: string;
  image: string;
}

export default function Search() {
  const mapOptions: Option[] = [
    {
      label: "Umidade do Solo",
      value: "umidade_solo",
      image: "Images/map_umidade.png",
    },
    {
      label: "Biomassa",
      value: "biomasaa",
      image: "Images/map_biomassa.png",
    },
    {
      label: "Seca",
      value: "seca",
      image: "Images/map_seca.png",
    },
    {
      label: "Chuva",
      value: "chuva",
      image: "Images/map_chuva.png",
    },
    {
      label: "Fluxo de CO2",
      value: "fluxo_co2",
      image: "Images/map_fluxo_co2.png",
    },
  ];

  const [selectedOption, setSelectedOption] = useState<Option>(mapOptions[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex items-center gap-4 relative">
      <div className="h-[3rem] w-[6rem] rounded-md overflow-hidden">
        <img src={selectedOption.image} alt={selectedOption.label} />
      </div>

      <button
        type="button"
        className="h-[3rem] w-[18rem] bg-white/5 text-sm text-zinc-200 p-2 rounded-md flex justify-between items-center"
        onClick={toggleDropdown}
      >
        <div>{selectedOption.label}</div>

        <div
          className={`${
            isDropdownOpen ? "rotate-180" : "rotate-0"
          } transition-all duration-150`}
        >
          <ChevronDownIcon className="w-5" />
        </div>
      </button>

      {isDropdownOpen && (
        <ul className="w-[18rem] bg-[#2a3042] p-2 rounded-md flex flex-col gap-2 absolute top-[4rem] right-0 transition-all duration-150 z-10">
          {mapOptions.map((option, index) => (
            <li
              key={index}
              className="hover:bg-white/5 p-2 rounded-md cursor-pointer flex justify-between items-center transition-all duration-150"
              onClick={() => handleOptionClick(option)}
            >
              <div className="truncate">{option.label}</div>

              <img
                src={option.image}
                alt={option.label}
                width={75}
                className="rounded-md"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
