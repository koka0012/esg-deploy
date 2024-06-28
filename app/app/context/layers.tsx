import { Layer, MVTLayer } from "deck.gl";
import { createContext, useContext, useEffect, useState } from "react";
import { defaultLayers } from "../lib/defaultLayers";

export interface LayerContextManager {
  layers: Layer[]
  createLayer: <T extends new (...args: any) => Layer>(layer: T, id: string, options: ConstructorParameters<T>[0]) => void
  addLayer: (layer: Layer) => void
  removeLayer: (id: string) => void
}


export const createLayer: LayerContextManager["createLayer"] = (layer, id, options) => {
  const newLayer = new layer({ ...options, id });

  return newLayer;
}


export const LayerContext = createContext<LayerContextManager>({ layers: [], createLayer, addLayer: () => null, removeLayer: () => null});

export interface ILayerProviderProps {
  children: React.ReactNode,
  token: string
}


export function LayerProvider({ children, token }: ILayerProviderProps) {
  const [layers, setLayers] = useState<any[]>(defaultLayers(token));

  const addLayer = (layer: Layer) => {
    setLayers([...layers, layer]);
  }

  const removeLayer = (id: string) => {
    setLayers(layers.filter(l => l.id !== id));
  }

  return <LayerContext.Provider value={{ layers, createLayer, addLayer, removeLayer }}>{children}</LayerContext.Provider>
}

export function useLayers() {
  return useContext(LayerContext)
}