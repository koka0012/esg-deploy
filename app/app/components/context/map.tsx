'use client'

import { createContext, useRef } from "react";

const MapContext = createContext<any>(null);

export interface IMapProvider {
  children: React.ReactNode

}

export function MapProvider({ children }: IMapProvider) {
  const mapRef = useRef()
  return <MapContext.Provider value={mapRef}>{children}</MapContext.Provider>
}