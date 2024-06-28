import { createContext, useContext, useState } from "react";

export enum MapStyles {
  Streets = 'Streets',
  Satellite = 'Satellite',
  Convert = 'Convert'
}

export interface IStyle {
  style: string,
  id: MapStyles
}

export interface MapStyleContextManager {
  value: IStyle,
  setValue: (style: IStyle) => void
}

export const MapStyleContext = createContext<MapStyleContextManager>({ value: { style: 'mapbox://styles/mapbox/streets-v12', id: MapStyles.Streets }, setValue: () => null });

interface IMapStyleProviderProps {
  children: React.ReactNode
}

export function MapStyleProvider({ children }: IMapStyleProviderProps) {
  const [value, setValue] = useState<IStyle>({ style: 'mapbox://styles/mapbox/streets-v12', id: MapStyles.Streets });

  return (
    <MapStyleContext.Provider value={{ value, setValue }}>
      {children}
    </MapStyleContext.Provider>
  )
}

export function useMapStyle() {
  return useContext(MapStyleContext)
}