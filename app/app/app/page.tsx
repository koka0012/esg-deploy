"use client";

import {
  PencilIcon,
  MagnifyingGlassIcon,
  Square3Stack3DIcon,
  GlobeAmericasIcon,
  ClipboardDocumentListIcon,
  PresentationChartLineIcon,
  ArrowsPointingOutIcon,
  MagnifyingGlassPlusIcon,
  MagnifyingGlassMinusIcon,
  ExclamationCircleIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { Dock, VerticalBarChart, Label } from "@/app/components";

import Card from "./Card";
import SearchForm from "./SearchForm";
import LayerForm from "./LayerForm";

import { useEffect, useRef, useState } from "react";

export default function Page() {
  const [search, setSearch] = useState(false);
  const [layer, setLayer] = useState(false);
  const searchRef = useRef<any>(null);
  const layerRef = useRef<any>(null);

  const data = [
    { name: "Jan", uv: 200 },
    { name: "Feb", uv: 400 },
    { name: "Mar", uv: 800 },
    { name: "Apr", uv: 1000 },
    { name: "May", uv: 1200 },
    { name: "Jun", uv: 1600 },
    { name: "Jul", uv: 1800 },
    { name: "Ago", uv: 2000 },
    { name: "Set", uv: 2400 },
    { name: "Oct", uv: 2800 },
  ];

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearch(false);
      }
      if (layerRef.current && !layerRef.current.contains(event.target)) {
        setLayer(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="h-full p-4 flex flex-col gap-4 relative">
      {search && (
        <div ref={searchRef} className="absolute top-4 left-[6rem] z-10">
          <SearchForm />
        </div>
      )}

      {layer && (
        <div ref={layerRef} className="absolute top-[8.5rem] z-10">
          <LayerForm />
        </div>
      )}

      <div className="flex flex-1 gap-4">
        <div className="w-[4rem]">
          <Dock
            direction="vertical"
            items={[
              {
                icon: <MagnifyingGlassIcon className="w-8 text-zinc-100 p-1" />,
                handleClick: () => setSearch(true),
              },
              {
                icon: <Square3Stack3DIcon className="w-8 text-zinc-100 p-1" />,
                handleClick: () => setLayer(true),
              },
            ]}
            style="button"
          />
        </div>

        <div
          className="flex flex-1 justify-end"
          style={{ height: "calc(90vh - 112px)" }}
        >
          <div className="w-1/4 md:w-1/3 flex flex-col  gap-4">
            <Card title="Grafico" content={<VerticalBarChart data={data} />} />

            <Card title="Legenda" content={<Label />} />
          </div>
        </div>

        <div className="w-[4rem] flex items-center">
          <Dock
            direction="vertical"
            items={[
              {
                icon: (
                  <ArrowsPointingOutIcon className="w-8 text-zinc-100 p-1" />
                ),
              },
              {
                icon: (
                  <MagnifyingGlassPlusIcon className="w-8 text-zinc-100 p-1" />
                ),
              },
              {
                icon: (
                  <MagnifyingGlassMinusIcon className="w-8 text-zinc-100 p-1" />
                ),
              },
            ]}
            style="dock"
          />
        </div>
      </div>

      <div className="h-[4rem] flex justify-center">
        <Dock
          direction="horizontal"
          items={[
            {
              icon: <PencilIcon className="w-8 text-zinc-100 p-1" />,
            },
            {
              icon: <LockClosedIcon className="w-8 text-zinc-100 p-1" />,
            },
            {
              icon: <GlobeAmericasIcon className="w-8 text-zinc-100 p-1" />,
            },
            {
              icon: (
                <ClipboardDocumentListIcon className="w-8 text-zinc-100 p-1" />
              ),
            },
            {
              icon: <MagnifyingGlassIcon className="w-8 text-zinc-100 p-1" />,
            },
            {
              icon: (
                <PresentationChartLineIcon className="w-8 text-zinc-100 p-1" />
              ),
            },
            {
              icon: <ExclamationCircleIcon className="w-8 text-zinc-100 p-1" />,
            },
          ]}
          style="dock"
        />
      </div>
    </div>
  );
}
