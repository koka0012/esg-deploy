'use client'
import type { GeoBoundingBox } from '@deck.gl/geo-layers';
import { DeckGL } from '@deck.gl/react';
import { BitmapLayer, MVTLayer, TileLayer, } from 'deck.gl';
import {_WMSLayer as WMSLayer} from '@deck.gl/geo-layers'
import { reduce } from 'lodash';
import proj4 from 'proj4';
import PrimitiveMap from 'react-map-gl';


export interface IMapProps {
  apiToken: string
}

const template = (token: string) => ({
  sc: 'admin',
  service: 'WMS',
  request: 'GetMap',
  layers: '{layers}',
  bbox: '{west},{south},{east},{north}',
  width: '{width}',
  height: '{height}',
  bands: '1,2,3',
  srs: 'EPSG:3857',
  styles: 'rgb_r,rgb_g,rgb_b',
  format: 'image/jpeg',
  transparent: false,
  version: '1.1.1',
  token,
});



export function Map({ apiToken }: IMapProps) {

  const qs = reduce(template(apiToken), (prev, curr, key) => {
    prev.push(`${key}=${curr}`);
    return prev;
  }, [] as string[]).join('&');
  // const wmsLayer = new WMSLayer({
  //   loadOptions: {},
  //   data: `https://account.farmguide.com.br/api/map?${qs}`,
  //   layers: ['raster_rgb_2023', 'raster_rgb_2023', 'raster_rgb_2023'],
  //   serviceType: 'template',
  //   srs: 'EPSG:3857',
  //   opacity: 0.8,
  //   tileSize: 256,

  //   // rgb_r%2Crgb_g%2Crgb_b
  //   // sc
  //   // image%2Fpng
  //   // transparent true
  //   // bands=1%2C2%2C3
  //   /*
  //   {east}
  //   {north}
  //   {west}
  //   {south}
  //   {width}
  //   {height}
  //   {layers}

  //   */
  // })

  const wmsLayer = new TileLayer({
    id: 'wms-tile-layer',
    data: 'https://account.farmguide.com.br/api/map',
    minZoom: 1,
    maxZoom: 19,
    maxRequests: 6,
    debounce: 100,

    getTileData: (tile) => {
      const bbox = tile.bbox as GeoBoundingBox
      const [west, south] = proj4('EPSG:4326', 'EPSG:3857', [bbox.west, bbox.south]);
      const [east, north] = proj4('EPSG:4326', 'EPSG:3857', [bbox.east, bbox.north]);

      const qp = new URLSearchParams()
      qp.append('sc', 'admin')
      qp.append('service', 'WMS')
      qp.append('request', 'GetMap')
      qp.append('layers', 'raster_rgb_2023,raster_rgb_2023,raster_rgb_2023')
      qp.append('bbox', `${west},${south},${east},${north}`)
      qp.append('width', '256')
      qp.append('height', '256')
      qp.append('bands', '1,2,3')
      qp.append('srs', 'EPSG:3857')
      qp.append('styles', 'rgb_r,rgb_g,rgb_b')
      qp.append('format', 'image/jpeg')
      qp.append('transparent', 'false')
      qp.append('version', '1.1.1')
      qp.append('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImF1Z3VzdG8uc2lsdmVpcmFAc3BlY3RyYXguY29tLmJyIiwidHlwZSI6InVzZXIiLCJjbnBqIjoiNTIyNDE0MzQwMDAxODciLCJpZCI6MTIsImlhdCI6MTcxOTUyMzQ4OCwiZXhwIjoxNzE5NTMwNjg4LCJzdWIiOiJjbGllbnQtZGFydCJ9.V5IujZWDXxrUuhzlPSwfNYnRaAWe2-FPKtzGf_hTZCU')

      const url = `https://account.farmguide.com.br/api/map?${qp.toString()}`
      return url
    },
    transparentColor: [255, 255, 255, 0],
    colorFormat: 'RGBA',
    tileSize: 256,
    renderSubLayers: (props) => {
      const { west, south, east, north } = props.tile.bbox as GeoBoundingBox
      return new BitmapLayer(props, {
        data: null as unknown as undefined,
        image: props.data,
        opacity: 1,
        transparentColor: [255, 255, 255, 0],
        bounds: [west, south, east, north]
      })
    }
  })

  const mvtLayer = new MVTLayer({
    id: 'mvt-layer',
    data: [
      `https://account.farmguide.com.br/api/vector?sc=admin&layers=vector_soybean_2023&styles=nd&x={x}&y={y}&z={z}&token=${apiToken}`
    ],
    getFillColor: () => [164,193,73],
    getLineWidth: () => 10,
    getLineColor: () => [164,193,73],
    opacity: 0.35,
    filled: true,
    stroked: true,
  })
  


  return (
    <DeckGL
      initialViewState={{
        longitude: -47.88,
        latitude: -15.79,
        zoom: 3
      }}
      layers={[wmsLayer, mvtLayer]}
      controller>
      <PrimitiveMap
        mapboxAccessToken='pk.eyJ1IjoiYXVndXN0by1zcGVjdHJheCIsImEiOiJjbHh4ZnNyOWUxN3Q2Mmtwcjlnbml2NGtrIn0.felXsgObrwgY5m-ew68RFA'
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
      </PrimitiveMap>
    </DeckGL>
  )

  //
}
