"use client";
import PrimitiveMap from "react-map-gl";

export function Map() {
  return (
    <PrimitiveMap
      style={{ width: "100%", height: "100%", position: "absolute", top: 0 }}
      mapboxAccessToken="pk.eyJ1IjoiYXVndXN0by1zcGVjdHJheCIsImEiOiJjbHh4ZnNyOWUxN3Q2Mmtwcjlnbml2NGtrIn0.felXsgObrwgY5m-ew68RFA"
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}
