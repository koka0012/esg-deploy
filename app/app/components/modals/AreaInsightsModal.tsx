import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@/app/components";

const AreaInsightsModal = ({ handleClose }: any) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <div className="flex bottom-20 w-full absolute h-[14rem] justify-center pl-16 pr-28">
      <div
        className={`w-full bg-[#2a3042] p-2 rounded-md transition-transform duration-300 ${
          showModal ? "animate-fadeInUp" : "opacity-0"
        }`}
      >
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-zinc-300 text-[13px] font-semibold mb-2">
            Insights da Área
          </h2>
          <button
            onClick={handleClose}
            className="text-white hover:text-red-600 focus:outline-none"
          >
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-[#1c202c] p-4 rounded-md">
            <p className="text-white">
              Informações detalhadas sobre a área selecionada...
            </p>
            {/* Coloque aqui o conteúdo específico do modal conforme necessário */}
          </div>
          {/* Adicione mais elementos aqui se necessário */}
        </div>
      </div>
    </div>
  );
};

export default AreaInsightsModal;
