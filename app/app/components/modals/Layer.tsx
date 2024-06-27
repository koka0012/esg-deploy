"use client";

import { useEffect, useRef, useState } from "react";

import Orbital from "./Orbital";

const LayerForm = () => {
  const [orbital, setOrbital] = useState(false);

  return (
    <div className="bg-[#2a3042] bg-opacity-50 backdrop-blur-md text-xs text-white p-4 rounded-md grid grid-cols-4 gap-4">
      <button
        type="button"
        className="flex flex-col items-center gap-2"
        onClick={() => setOrbital(false)}
      >
        <img
          src="Images/pin_map.png"
          className="w-[4rem] aspect-square rounded-md"
        />
        <div className="w-[4rem] flex justify-center">Padrão</div>
      </button>

      <button
        type="button"
        className="flex flex-col items-center gap-2"
        onClick={() => setOrbital(false)}
      >
        <img
          src="Images/pin_satelite.png"
          className="w-[4rem] aspect-square rounded-md"
        />
        <div className="w-[4rem] flex justify-center">Satélite</div>
      </button>

      <button
        type="button"
        className="flex flex-col items-center gap-2"
        onClick={() => setOrbital(false)}
      >
        <img
          src="Images/pin_relevo.png"
          className="w-[4rem] aspect-square rounded-md"
        />
        <div className="w-[4rem] flex justify-center">Relevo</div>
      </button>

      <button
        type="button"
        onClick={() => setOrbital(true)}
        className="flex flex-col items-center gap-2"
      >
        <img
          src="Images/pin_orbital.png"
          className="w-[4rem] aspect-square rounded-md"
        />
        <div className="w-[4rem] flex justify-center">Orbital</div>
      </button>

      {orbital && (
        <div className="col-span-full">
          <Orbital />
        </div>
      )}
    </div>
  );
};

export default LayerForm;
