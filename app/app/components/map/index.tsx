'use client'
import { DeckGL } from '@deck.gl/react';
import PrimitiveMap from 'react-map-gl';
import { useLayers } from '../../context/layers';
import { useMap } from '../../context/map';
import { useMapStyle } from '../../context/mapStyle';
import { useState } from 'react';

export function Map() {
  const map = useMap()
  const { layers, deckLayers, findLayer } = useLayers();
  const { value } = useMapStyle()

  const [selected, setSelected] = useState()

  return (
    <DeckGL
      ref={map}
      initialViewState={{
        longitude: -47.88,
        latitude: -15.79,
        zoom: 3
      }}
      layers={deckLayers}
      controller
      onClick={(info) => {
        const {picked, layer: deckLayer} = info;
        if(picked && !deckLayer) return;

        const layer = findLayer(deckLayer?.id!)

        layer?.onPick?.(info)
      }}
    >
      <PrimitiveMap
        attributionControl={false}
        mapboxAccessToken='pk.eyJ1IjoiYXVndXN0by1zcGVjdHJheCIsImEiOiJjbHh4ZnNyOWUxN3Q2Mmtwcjlnbml2NGtrIn0.felXsgObrwgY5m-ew68RFA'
        mapStyle={value.style}
        projection={{ name: 'mercator' }}
      >
      </PrimitiveMap>
    </DeckGL>
  )

  //
}
