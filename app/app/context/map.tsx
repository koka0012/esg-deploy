'use client'

import { RefObject, createContext, useContext, useRef } from "react";
import { MapRef } from "react-map-gl";

const MapContext = createContext<RefObject<MapRef> | null>(null);

export interface IMapProvider {
  children: React.ReactNode

}

export function MapProvider({ children }: IMapProvider) {
  const mapRef = useRef<MapRef>(null)
  return <MapContext.Provider value={mapRef}>{children}</MapContext.Provider>
}

export function useMap() {
  return useContext(MapContext)
}