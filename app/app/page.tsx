"use client";

import { Dock, Label, Modal } from "@/app/components";
import {
  ArrowsPointingOutIcon,
  ClipboardDocumentListIcon,
  ExclamationCircleIcon,
  GlobeAmericasIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  MagnifyingGlassMinusIcon,
  MagnifyingGlassPlusIcon,
  PencilIcon,
  PresentationChartLineIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import Card from "./components/Card";
import AddTerritory from "./components/modals/AddTerritory";
import Alerts from "./components/modals/Alerts";
import AreaInsights from "./components/modals/AreaInsights";
import Environment from "./components/modals/Environment";
import Layer from "./components/modals/Layer";
import Reports from "./components/modals/Reports";
import Restrict from "./components/modals/Restrict";
import Search from "./components/modals/Search";
import SearchDock from "./components/modals/SearchDock";
import Skeleton from "react-loading-skeleton";
import LoginRestrict from "./components/modals/LoginRestrict";

const VerticalBarChart = dynamic(
  () =>
    import("@/app/components/Charts/VerticalBarChart").then(
      (mod) => mod.VerticalBarChart
    ),
  {
    ssr: false,
    loading: () => <Skeleton inline className="h-40" />,
  }
);

export default function Page() {
  const [logged, setLogged] = useState(false);

  const [search, setSearch] = useState(false);
  const [layer, setLayer] = useState(false);
  const [searchDock, setSearchDock] = useState(false);
  const [insights, setInsights] = useState(false);

  const searchRef = useRef<any>(null);
  const layerRef = useRef<any>(null);

  const addTerritoryRef = useRef<any>(null);
  const restrictRef = useRef<any>(null);
  const environmentRef = useRef<any>(null);
  const reportsRef = useRef<any>(null);
  const alertsRef = useRef<any>(null);

  const data = new Array(30).fill(0).map((_, i) => ({
    name: i,
    uv: Math.round(i * 10000 + (Math.random() * (5000 - 2000) + 2000)),
  }));

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
    <div className=" w-full h-full pointer-events-none relative">
      {search && (
        <div
          ref={searchRef}
          className="absolute top-3 left-[4.6rem] z-10 pointer-events-auto"
        >
          <Search />
        </div>
      )}

      {layer && (
        <div
          ref={layerRef}
          className="absolute top-[4.5rem] left-[4.6rem] z-10 pointer-events-auto"
        >
          <Layer />
        </div>
      )}

      <Modal ref={restrictRef}>
        {logged ? (
          <Restrict
            onClose={() => {
              restrictRef.current.close();
              setLogged(false);
            }}
          />
        ) : (
          <LoginRestrict
            onClose={() => restrictRef.current.close()}
            onChange={() => setLogged(true)}
          />
        )}
      </Modal>

      <Modal ref={addTerritoryRef}>
        <AddTerritory onClose={() => addTerritoryRef.current.close()} />
      </Modal>

      {searchDock && (
        <div className="absolute bottom-[5.55rem] inset-x-0 flex justify-center z-10 pointer-events-auto">
          <SearchDock onClose={() => setSearchDock(false)} />
        </div>
      )}

      {insights && (
        <div className="absolute bottom-4 inset-x-0 flex justify-center z-10 pointer-events-auto">
          <AreaInsights onClose={() => setInsights(false)} />
        </div>
      )}

      <Modal ref={environmentRef}>
        <Environment onClose={() => environmentRef.current.close()} />
      </Modal>

      <Modal ref={reportsRef}>
        <Reports
          onClose={() => reportsRef.current.close()}
          onSearch={() => reportsRef.current.close()}
        />
      </Modal>

      <Modal ref={alertsRef}>
        <Alerts onClose={() => alertsRef.current.close()} />
      </Modal>

      <div className="absolute top-3 left-3">
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

      <div className="absolute right-3 top-0 bottom-0 flex flex-row gap-3 py-3">
        <div>
          <div className="flex flex-col gap-4 pointer-events-auto">
            <Card title="Gráfico" content={<VerticalBarChart data={data} />} />

            <Card title="Legenda" content={<Label />} />
          </div>
        </div>

        <div className="self-center">
          <Dock
            direction="vertical"
            items={[
              {
                icon: <ArrowsPointingOutIcon className="w-8 text-white p-1" />,
              },
              {
                icon: (
                  <MagnifyingGlassPlusIcon className="w-8 text-white p-1" />
                ),
              },
              {
                icon: (
                  <MagnifyingGlassMinusIcon className="w-8 text-white p-1" />
                ),
              },
            ]}
            style="dock"
          />
        </div>
      </div>

      <div
        className={`${
          insights ? "-bottom-16" : "bottom-3"
        } absolute right-0 mx-auto left-0  flex justify-center transition-all duration-150`}
      >
        <Dock
          direction="horizontal"
          items={[
            {
              icon: <PencilIcon className="w-8 text-white p-1" />,
              handleClick: () => addTerritoryRef.current.open(),
            },
            {
              icon: <LockClosedIcon className="w-8 text-white p-1" />,
              handleClick: () => restrictRef.current.open(),
            },
            {
              icon: <MagnifyingGlassIcon className="w-8 text-white p-1" />,
              handleClick: () => {
                setSearchDock(!searchDock);
                setInsights(false);
              },
            },
            {
              icon: <GlobeAmericasIcon className="w-8 text-white p-1" />,
              handleClick: () => environmentRef.current.open(),
            },
            {
              icon: (
                <ClipboardDocumentListIcon className="w-8 text-white p-1" />
              ),
              handleClick: () => reportsRef.current.open(),
            },
            {
              icon: (
                <PresentationChartLineIcon className="w-8 text-white p-1" />
              ),
              handleClick: () => {
                setInsights(!insights);
                setSearchDock(false);
              },
            },
            {
              icon: <ExclamationCircleIcon className="w-8 text-white p-1" />,
              handleClick: () => alertsRef.current.open(),
            },
          ]}
          style="dock"
        />
      </div>
    </div>
  );
}
