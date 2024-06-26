"use client";

import { useEffect, useRef, useState } from "react";

import OrbitalModal from "./OrbitalModal";

const LayerForm = () => {
  const [orbital, setOrbital] = useState(false);
  const orbitalRef = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (orbitalRef.current && !orbitalRef.current.contains(event.target)) {
        setOrbital(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-[#2a3042] bg-opacity-50 backdrop-blur-md text-xs text-white p-3 rounded-md flex flex-col gap-2 relative">
      <button type="button" className="flex flex-col items-center gap-2">
        <img
          src="images/pin_map.png"
          className="w-[2.5rem] aspect-square rounded-md"
        />
        <div className="w-[2.5rem] flex justify-center">Mapa</div>
      </button>

      <button type="button" className="flex flex-col items-center gap-2">
        <img
          src="images/pin_satelite.png"
          className="w-[2.5rem] aspect-square rounded-md"
        />
        <div className="w-[2.5rem] flex justify-center">Satélite</div>
      </button>

      <button type="button" className="flex flex-col items-center gap-2">
        <img
          src="images/pin_relevo.png"
          className="w-[2.5rem] aspect-square rounded-md"
        />
        <div className="w-[2.5rem] flex justify-center">Relevo</div>
      </button>

      <button
        type="button"
        onClick={() => setOrbital(true)}
        className="flex flex-col items-center gap-2"
      >
        <img
          src="images/pin_orbital.png"
          className="w-[2.5rem] aspect-square rounded-md"
        />
        <div className="w-[2.5rem] flex justify-center">Mapa Orbital</div>
      </button>

      {orbital && (
        <div ref={orbitalRef} className="absolute bottom-4 left-[5rem] z-10">
          <OrbitalModal />
        </div>
      )}
    </div>
  );
};

export default LayerForm;
