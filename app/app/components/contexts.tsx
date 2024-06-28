'use client'

import { login } from "@/app/lib/api/login"
import { LayerProvider } from "../context/layers"
import { MapProvider } from "../context/map"
import { MapStyleProvider } from "../context/mapStyle"

export interface IContextsContainerProps {
  children: React.ReactNode
}

export async function ContextsContainer({ children }: IContextsContainerProps) {
  const { token } = await login()

  return (
    <MapProvider>
      <LayerProvider token={token}>
        <MapStyleProvider>
          {children}
        </MapStyleProvider>
      </LayerProvider>
    </MapProvider>
  )
}