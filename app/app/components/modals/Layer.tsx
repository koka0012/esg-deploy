"use client";

import { useState } from "react";

import Orbital from "./Orbital";
import { MapStyles, useMapStyle } from "../../context/mapStyle";

const LayerForm = () => {
  const [orbital, setOrbital] = useState(false);
  const { value, setValue } = useMapStyle();
  console.log(value);

  return (
    <div className="w-[16rem] bg-[#2f3549] text-xs text-white p-2 rounded-md grid grid-cols-3 gap-2 animate-fadeInRight transition-transform duration-300">
      <button
        type="button"
        className="flex flex-col items-center gap-2"
        onClick={() => {
          setOrbital(false);

          setValue({
            style: "mapbox://styles/mapbox/streets-v12",
            id: MapStyles.Streets,
          });
        }}
      >
        <div
          className={`${
            value.id == "Streets" ? "bg-[#4a526b] p-1" : ""
          } rounded-lg transition-all duration-100`}
        >
          <img src="Images/pin_map.png" className="aspect-square rounded-md" />
        </div>

        <div className="flex justify-center">Padrão</div>
      </button>

      <button
        type="button"
        className="flex flex-col items-center gap-2"
        onClick={() => {
          setOrbital(false);

          setValue({
            style: "mapbox://styles/mapbox/satellite-streets-v12",
            id: MapStyles.Satellite,
          });
        }}
      >
        <div
          className={`${
            value.id == "Satellite" ? "bg-[#4a526b] p-1" : ""
          } rounded-lg transition-all duration-100`}
        >
          <img
            src="Images/pin_satelite.png"
            className="aspect-square rounded-md"
          />
        </div>

        <div className="flex justify-center">Satélite</div>
      </button>

      <button
        type="button"
        className="flex flex-col items-center gap-2"
        onClick={() => {
          setOrbital(false);

          setValue({
            style: "mapbox://styles/chmieleski/clxy1xlve003001qo9fd206h9",
            id: MapStyles.Convert,
          });
        }}
      >
        <div
          className={`${
            value.id == "Convert" ? "bg-[#4a526b] p-1" : ""
          } rounded-lg transition-all duration-100`}
        >
          <img
            src="Images/pin_relevo.png"
            className="aspect-square rounded-md"
          />
        </div>

        <div className="flex justify-center">Relevo</div>
      </button>

      <div className="col-span-full mx-2 bg-[#4a526b] h-[1px]" />

      <button
        type="button"
        onClick={() => setOrbital(true)}
        className="flex flex-col items-center gap-2"
      >
        <img
          src="Images/pin_orbital.png"
          className="aspect-square rounded-md"
        />
        <div className="flex justify-center">Sentinel-2</div>
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
