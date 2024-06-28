"use client";

import { useState } from "react";

import { useLayers } from "../../context/layers";
import Orbital from "./Orbital";
import { MapStyles, useMapStyle } from "../../context/mapStyle";

const LayerForm = () => {
  const [orbital, setOrbital] = useState(false);
  const {value, setValue} = useMapStyle();

  return (
    <div className="bg-[#2a3042] bg-opacity-50 backdrop-blur-md text-xs text-white p-4 rounded-md grid grid-cols-4 gap-4  animate-fadeInRight transition-transform duration-300">
      <button
        type="button"
        className="flex flex-col items-center gap-2"
        onClick={() => setValue({ style: "mapbox://styles/mapbox/streets-v12", id: MapStyles.Streets })}
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
        onClick={() => setValue({ style: "mapbox://styles/mapbox/satellite-streets-v12", id: MapStyles.Satellite })}
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
        onClick={() => setValue({ style: "mapbox://styles/chmieleski/clxy1xlve003001qo9fd206h9", id: MapStyles.Convert })}
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
