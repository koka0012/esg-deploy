"use client";

import { Button, Input } from "@/app/components";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Form, Formik, FormikHelpers } from "formik";
import { TrashIcon } from "lucide-react";
import { useState } from "react";

interface SearchValues {
  searchField: string;
}

export interface ReportsProps {
  onClose: () => void;
  onSearch: (values: SearchValues) => void;
}

const Reports = ({ onClose, onSearch }: ReportsProps) => {
  const initialValues: SearchValues = {
    searchField: "",
  };

  const [report, setReport] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center gap-4 ">
      <Formik initialValues={initialValues} onSubmit={onClose}>
        {({ values, handleChange, errors, isSubmitting }) => (
          <Form>
            <div className="w-[20vw] max-w-[60rem]  item-center justify-center rounded-md shadow-md overflow-hidden transition-transform duration-300 animate-fadeInUp">
              <div className="bg-[#2a3042] text-white p-4 flex justify-between items-center">
                <div className="font-bold text-[16px]">Relatoriós</div>
                <button
                  type="button"
                  onClick={() => {
                    onClose(), setReport(false);
                  }}
                >
                  <XMarkIcon className="w-5" />
                </button>
              </div>

              <div className="bg-[#2f3549] p-4 grid grid-cols-1 gap-4">
                <Input
                  name="searchField"
                  label="Pesquisar por CPF/CNPJ, Matrícula, ID ou CAR"
                  value={values.searchField}
                  handleChange={handleChange}
                  error={errors.searchField}
                />
              </div>

              <div className="bg-[#2a3042] px-4 py-2 flex justify-end">
                <Button
                  disabled={isSubmitting}
                  onClick={() => setReport(!report)}
                  className="bg-[#2f3549] hover:bg-[#394055] !text-white font-bold text-[16px]"
                >
                  Pesquisar
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      {report ? (
        <div className="w-[60vw] absolute bottom-20 item-end justify-end rounded-md shadow-md overflow-hidden transition-transform duration-300 animate-fadeInUp">
          <div className="bg-[#2a3042] text-white p-4 flex justify-between items-center">
            <div>Informações</div>
            <button type="button" onClick={() => setReport(!report)}>
              <XMarkIcon className="w-5" />
            </button>
          </div>
          <div className="bg-[#2a3042] p-2">
            <div className="bg-[#2f3549] p-2 rounded-md min-h-[12rem] h-[10rem] gap-4r flex flex-col">
              <div className="grid grid-cols-7 gap-4 text-xs text-white/80 mb-2 justify-items-center">
                <p>ID</p>
                <p>Data do download</p>
                <p>Data de criação</p>
                <p>Data da atualização</p>
                <p>Status</p>
                <p>Elaborado por</p>
                <p>Ação</p>
              </div>
              <div className="grid grid-cols-7 gap-4 text-sm text-white justify-items-center">
                <p>1</p>
                <p>10/10/2023</p>
                <p>09/10/2023</p>
                <p>01/01/2024</p>
                <p>Sem atualização</p>
                <p>Maria Betania</p>
                <TrashIcon className="w-6 h-6 p-0.5 text-red-500 hover:text-red-900 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Reports;
