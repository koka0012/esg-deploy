'use client'
import { DeckGL } from '@deck.gl/react';
import PrimitiveMap, { Marker } from 'react-map-gl';
import { useLayers } from '../../context/layers';
import { useMap } from '../../context/map';
import { useMapStyle } from '../../context/mapStyle';
import { useState } from 'react';
import { cn } from '@/app/lib/utils';
import { PickingInfo } from 'deck.gl';
import { nanoid } from 'nanoid';
import { CheckCircleIcon } from 'lucide-react';

export function Map() {
  const map = useMap()
  const { layers, deckLayers, findLayer } = useLayers();
  const { value } = useMapStyle()

  const [selected, setSelected] = useState<PickingInfo<any>>()

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
        const { picked, layer: deckLayer } = info;
        if (picked && !deckLayer) return;

        const layer = findLayer(deckLayer?.id!)

        if (!layer?.onPick) return

        layer?.onPick?.(info)
        setSelected(info)
      }}

      onDragStart={() => setSelected(undefined)}
    >
      <PrimitiveMap
        attributionControl={false}
        mapboxAccessToken='pk.eyJ1IjoiYXVndXN0by1zcGVjdHJheCIsImEiOiJjbHh4ZnNyOWUxN3Q2Mmtwcjlnbml2NGtrIn0.felXsgObrwgY5m-ew68RFA'
        mapStyle={value.style}
        projection={{ name: 'mercator' }}

      >
        {/* <Marker latitude={selected?.coordinate?.[1] ?? 0} longitude={selected?.coordinate?.[0] ?? 0}>Teste</Marker> */}
      </PrimitiveMap>
      {
        selected && (
          <div
            className={cn(
              'absolute rounded-md z-50 top-0 left-0',
              'bg-[#2a3042] flex flex-col gap-1 p-4',
              { 'hidden': !selected }
            )}
            style={{
              top: `${selected.y}px`,
              left: `${selected.x}px`
            }}>
            <p className='text-sm text-white'><span className='font-bold'>ID:</span> {nanoid()}</p>
            <p className='text-sm text-white'><span className='font-bold'>Município:</span> Deodápolis</p>
            <p className='text-sm text-white'><span className='font-bold'>Bioma:</span> Mata Atlantica</p>
            <p className='text-sm text-white'><span className='font-bold'>Propriedade:</span> ---</p>
            <p className='text-sm text-white'><span className='font-bold'>Documento:</span> ---</p>
            <p className='text-sm text-white'><span className='font-bold'>Área (ha):</span> {Math.round(selected.object.properties.area_ha)} ha</p>
            <p className='text-sm text-white'><span className='font-bold'>Área Consolidada (ha):</span> {Math.round(selected.object.properties.area_ha)} ha</p>
            <p className='text-sm text-white'><span className='font-bold'>Gestor do Cadastro:</span> Carlos</p>
            <p className='text-sm text-white flex flex-row gap-2 items-center'><span className='font-bold'>Status:</span>
              {' '} <CheckCircleIcon className="text-green-500" />
            </p>
            <p className='text-sm text-white'><span className='font-bold'>Extrato Simples:</span> </p>
            </div>
        )
      }
    </DeckGL>

  )

  //
}
