import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button, Input } from "@/app/components";

const ReportsModal = ({ handleClose }: any) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className={`w-[32rem] bg-[#2a3042] rounded-md relative transition-transform duration-300 ${showModal ? 'animate-fadeInUp' : 'opacity-0'}`}>
        <div className="flex items-center justify-between mb-4 p-4 rounded-t-md bg-[#1c202c]">
          <h2 className="text-lg font-bold text-white">Relatórios</h2>
          <button
            onClick={handleClose}
            className="text-zinc-100 hover:text-red-600 focus:outline-none"
          >
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div >
        <div className="px-4">
        <form onSubmit={handleSubmit}>
          <Input
            name="searchQuery"
            label="Pesquisar por CPF/CNPJ, Matrícula, ID ou CAR"
            value={searchQuery}
            handleChange={(e) => setSearchQuery(e.target.value)}
          />
          
          
        </form>
        

        </div>
        <div className="flex justify-end bg-[#1c202c] rounded-b-md mt-4 px-4 py-2">
            <Button
              type="submit"
              className="bg-slate-700 hover:bg-[#2a3042]/80 !text-zinc-100"
            >
              Pesquisar
            </Button>
          </div>
      </div>
    </div>
  );
};

export default ReportsModal;
