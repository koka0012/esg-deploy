import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@/app/components";

const AlertsModal = ({ handleClose }: any) => {
  const [selectedVariable, setSelectedVariable] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const variables = [
    "Novo Desmatamento",
    "Queimada",
    "Invasão de Território",
    // Add more alert types as needed
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className={`w-[32rem] bg-[#2a3042]  rounded-md relative  transition-transform duration-300 ${showModal ? 'animate-fadeInUp' : 'opacity-0'}`}>
        <div className="flex items-center bg-[#1c202c] p-4 rounded-t-md justify-between mb-4">
          <h2 className="text-lg font-bold text-white">Alertas</h2>
          <button
            onClick={handleClose}
            className="text-zinc-100 hover:text-red-600 focus:outline-none"
          >
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="flex flex-col gap-2 px-4">
          <div className="bg-[#1c202c] p-4 rounded-md">
            <p className="text-white">Alerta 1</p>
            {/* Display the last 5 alerts here */}
          </div>
          <div className="bg-[#1c202c] p-4 rounded-md">
            <p className="text-white">Alerta 2</p>
            {/* Display the last 5 alerts here */}
          </div>
          <div className="bg-[#1c202c] p-4 rounded-md">
            <p className="text-white">Alerta 3</p>
            {/* Display the last 5 alerts here */}
          </div>
          <div>
            <label className="block text-white mb-2 mt-4">Filtrar por Variável</label>
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
        </div>

        <div className="flex bg-[#1c202c] px-4 py-2 rounded-b-md justify-end mt-4">
          <Button
            className="bg-slate-700 hover:bg-[#2a3042]/80 !text-zinc-100"
            onClick={handleClose}
          >
            Filtrar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AlertsModal;
