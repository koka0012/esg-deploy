'use client'
import { DeckGL } from '@deck.gl/react';
import PrimitiveMap from 'react-map-gl';
import { useLayers } from '../../context/layers';
import { useMap } from '../../context/map';
import { useMapStyle } from '../../context/mapStyle';

export function Map() {
  const map = useMap()
  const { layers } = useLayers();
  const { value } = useMapStyle()

  return (
    <DeckGL
      initialViewState={{
        longitude: -47.88,
        latitude: -15.79,
        zoom: 3
      }}
      layers={layers}
      getTooltip={({ object }) => object && `Área ${object.properties.area_ha}ha`}
      controller
    >
      <PrimitiveMap
        ref={map}
        mapboxAccessToken='pk.eyJ1IjoiYXVndXN0by1zcGVjdHJheCIsImEiOiJjbHh4ZnNyOWUxN3Q2Mmtwcjlnbml2NGtrIn0.felXsgObrwgY5m-ew68RFA'
        mapStyle={value.style}
        projection={{name: 'mercator'}}
      >
      </PrimitiveMap>
    </DeckGL>
  )

  //
}
