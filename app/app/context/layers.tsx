import { Layer, PickingInfo } from "deck.gl";
import { createContext, useContext, useMemo, useState } from "react";
import { defaultLayers } from "../lib/defaultLayers";


export interface ILayerWrapper {
  id: string;
  layer: Layer
  onPick?: (info: PickingInfo) => void
}

export interface ILayerHashMap {
  [key: string]: ILayerWrapper
}

export interface LayerContextManager {
  layers: ILayerHashMap,
  deckLayers: Layer[],
  createLayer: <T extends new (...args: any) => Layer>(layer: T, id: string, options: ConstructorParameters<T>[0], extraOptions?: Partial<Omit<ILayerWrapper, "layer" | "id">>) => ILayerWrapper
  addLayer: (layer: ILayerWrapper) => void
  removeLayer: (id: string) => void
  findLayer: (id: string) => ILayerWrapper | undefined
}


export const createLayer: LayerContextManager["createLayer"] = (layer, id, options, extraOptions = {}) => {
  const newLayer = new layer({ ...options, id });

  return { layer: newLayer, ...extraOptions, id};
}


export const LayerContext = createContext<LayerContextManager>({ layers: {}, deckLayers: [], createLayer, addLayer: () => null, removeLayer: () => null, findLayer: () => undefined});

export interface ILayerProviderProps {
  children: React.ReactNode,
  token: string
}


export function LayerProvider({ children, token }: ILayerProviderProps) {
  const [layers, setLayers] = useState<ILayerHashMap>(defaultLayers(token));

  const deckLayers = useMemo(() => Object.values(layers).map(({ layer }) => layer), [layers]);

  const addLayer = (layer: ILayerWrapper) => {
    setLayers({...layers, [layer.id]: layer});
  }

  const removeLayer = (id: string) => {
    const newLayers = {...layers};
    delete newLayers[id];
    setLayers(newLayers);
  }

  const findLayer = (id: string) => {
    return layers[id];
  }

  return <LayerContext.Provider value={{ layers, createLayer, addLayer, removeLayer, findLayer, deckLayers }}>{children}</LayerContext.Provider>
}

export function useLayers() {
  return useContext(LayerContext)
}