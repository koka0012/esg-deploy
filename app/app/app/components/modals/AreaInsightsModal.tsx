import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@/app/components";

const AreaInsightsModal = ({ handleClose }) => {
  return (
    <div className="fixed inset-0 flex items-end justify-center mx-24 my-12">
      <div className="w-full bg-[#2a3042] p-4 rounded-t-md relative mb-8">
        <div className="flex items-center justify-between mb-20">
          <h2 className="text-lg font-bold text-white">Insights da Área</h2>
          <button
            onClick={handleClose}
            className="text-zinc-100 hover:text-red-600 focus:outline-none"
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

        <div className="flex justify-end mt-4">
          <Button
            className="bg-slate-700 hover:bg-[#2a3042]/80 !text-zinc-100"
            onClick={handleClose}
          >
            Fechar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AreaInsightsModal;
