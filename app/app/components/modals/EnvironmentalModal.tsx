import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@/app/components";

const EnvironmentalModal = ({ handleClose }) => {
  const [selectedVariable, setSelectedVariable] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const variables = [
    "Desmatamento PRODES",
    "Desmatamento SAD e DETER",
    "Perturbação Florestal",
    "Autos de Infração SEMA",
    "Autorização de Queimada",
    "Autorização de Supressão Vegetal",
    "Autorização de Supressão Vegetal SINAFLOR",
    "Embargo SEMA",
    "Embargo ICMBio",
    "Embargo IBAMA",
    "Autos de Infração IBAMA",
    "Terras Indígenas",
    "Áreas Quilombolas",
    "Unidades de Conservação",
    "Fluxo de CO2",
    "Índice de Área Foliar",
    "Evapotranspiração",
    "Área de Floresta Nativa",
    "Índice de Seca",
    "Chuva",
    "Temperatura do Solo",
    "Emissão CH4",
    "Emissão Bruta de CO2",
    "Remoção Bruta de CO2",
    "Fluxo Líquido de CO2",
    "EVI",
    "NDVI",
    "Umidade do Solo",
    "Focos de Incêndios",
    "Severidade da Queimada",
    "No caso da Frigobom vai aparecer a qualidade da pastagem"
  ];

  const years = Array.from({ length: 17 }, (_, i) => 2008 + i);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className={`w-[32rem] bg-[#2a3042] rounded-md relative transition-transform duration-300 ${showModal ? 'animate-fadeInUp' : 'opacity-0'}`}>
        <div className="flex bg-[#1c202c] rounded-t-md items-center justify-between p-4 mb-4">
          <h2 className="text-lg font-bold text-white">Ambiente</h2>
          <button
            onClick={handleClose}
            className="text-zinc-100 hover:text-red-600 focus:outline-none"
          >
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="flex flex-col gap-4 p-4">
          <div>
            <label className="block text-white mb-2">Variável Ambiental</label>
            <select
              value={selectedVariable}
              onChange={(e) => setSelectedVariable(e.target.value)}
              className="w-full p-2 bg-[#1c202c] text-white rounded-md"
            >
              {variables.map((variable, index) => (
                <option key={index} value={variable}>
                  {variable}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-white mb-2">Ano</label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full p-2 bg-[#1c202c] text-white rounded-md "
            >
             {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            
            </select>
          </div>
        </div>

        <div className="flex justify-end bg-[#1c202c] px-4 py-2 rounded-b-md">
          <Button
            className="bg-slate-700 hover:bg-[#2a3042]/80 !text-zinc-100"
            onClick={handleClose}
          >
            Confirmar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalModal;
