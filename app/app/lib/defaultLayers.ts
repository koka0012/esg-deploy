'use client'

import type { GeoBoundingBox } from '@deck.gl/geo-layers';
import { BitmapLayer, MVTLayer, TileLayer } from "deck.gl";
import proj4 from 'proj4';
import { createLayer } from "../context/layers";


export const defaultLayers = (token: string) => ([
  createLayer(TileLayer, 'deodápolis', {
    data: '',
    minZoom: 1,
    maxZoom: 19,
    maxRequests: 6,
    debounceTime: 100,
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
      qp.append('token', token)

      const url = `https://account.farmguide.com.br/api/map?${qp.toString()}`
      return url
    },
    tileSize: 256,
    renderSubLayers: ({ data, ...props }) => {
      const { west, south, east, north } = props.tile.bbox as GeoBoundingBox
      return new BitmapLayer(props, {
        data: null as unknown as undefined,
        image: data?.toString(),
        opacity: 1,
        transparentColor: [255, 255, 255, 0],
        bounds: [west, south, east, north]
      })
    }
  }),
  createLayer(MVTLayer, 'soybean', {
    data: [
      `https://account.farmguide.com.br/api/vector?sc=admin&layers=vector_soybean_2023&styles=nd&x={x}&y={y}&z={z}&token=${token}`
    ],
    getFillColor: () => [164, 193, 73],
    getLineWidth: () => 10,
    getLineColor: () => [164, 193, 73],
    opacity: 0.35,
    filled: true,
    stroked: true,
    pickable: true,
    getPointRadius: 2,
    pointRadiusUnits: 'pixels'
  }),

])