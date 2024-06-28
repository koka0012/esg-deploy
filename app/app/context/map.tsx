'use client'

import { DeckGLRef, MapView } from "deck.gl";
import { RefObject, createContext, useContext, useRef } from "react";
import { MapRef } from "react-map-gl";

const MapContext = createContext<RefObject<DeckGLRef<MapView>> | null>(null);

export interface IMapProvider {
  children: React.ReactNode

}

export function MapProvider({ children }: IMapProvider) {
  const mapRef = useRef<DeckGLRef<MapView>>(null)
  return <MapContext.Provider value={mapRef}>{children}</MapContext.Provider>
}

export function useMap() {
  return useContext(MapContext)
}