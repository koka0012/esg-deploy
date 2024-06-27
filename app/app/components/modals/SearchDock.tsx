import { Button, Input } from "@/app/components";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Form, Formik, FormikHelpers } from "formik";
import { useState } from "react";

interface FormValues {
  searchQuery: string;
}

export interface SearchDockProps {
  onClose: () => void;
}

const SearchDock = ({ onClose }: SearchDockProps) => {
  const criteriaItems = [
    "Desmatamento PRODES",
    "Desmatamento SAD e DETER",
    "Perturbação Florestal",
    "Autos de Infração SEMA",
    "Autorização de Queimada",
    "Autorização de Supressão Vegetal",
    "Autorização de Supressão Vegetal SINAFLOR",
    "Embargo SEMA",
    "Embargo ICMBIO",
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
    "Qualidade da Pastagem",
  ];

  const initialValues: FormValues = {
    searchQuery: "",
  };

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    try {
      console.log(values);
    } catch (error) {
      setSubmitting(false);
    }
  };

  const [showCriteria, setShowCriteria] = useState(false);
  const [selectedCriteria, setSelectedCriteria] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, handleChange, errors, isSubmitting }) => (
        <Form>
          <div className="w-[80vw] max-w-[60rem] rounded-md shadow-md overflow-hidden animate-fadeInUp transition-transform duration-300">
            <div className="bg-[#2a3042] text-white p-4 flex justify-between items-center">
              <div>Pesquisar</div>

              <button type="button" onClick={onClose}>
                <XMarkIcon className="w-5" />
              </button>
            </div>

            <div className="bg-[#2f3549] p-4 grid grid-cols-2 gap-4">
              <div className="col-span-full">
                <Input
                  name="searchQuery"
                  label="Pesquisar por CPF/CNPJ, Matrícula, ID ou CAR"
                  value={values.searchQuery}
                  handleChange={handleChange}
                />
              </div>

              <Button
                onClick={() => {
                  setShowCriteria(true);
                }}
                className="bg-[#394055] hover:bg-[#454c63] !text-white"
              >
                Relatório PDF de Compliance
              </Button>

              {showCriteria && (
                <>
                  <Button
                    onClick={() => setShowCriteria(!showCriteria)}
                    className="bg-[#394055] hover:bg-[#454c63] !text-white"
                  >
                    Salvar Critérios
                  </Button>

                  <div className="max-h-40 col-span-full bg-[#2a3042] rounded-md p-2 grid grid-cols-3 gap-2 overflow-auto">
                    {criteriaItems.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id={item}
                          checked={selectedCriteria.includes(item)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedCriteria([...selectedCriteria, item]);
                            } else {
                              setSelectedCriteria(
                                selectedCriteria.filter((c) => c !== item)
                              );
                            }
                          }}
                          className="bg-white checked:bg-[#2f3549] h-4 w-4 rounded-full border-2 appearance-none transition-all duration-150"
                        />

                        <label htmlFor={item} className="text-white text-xs">
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="bg-[#2a3042] p-4 flex justify-end">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#2f3549] hover:bg-[#394055] !text-white"
              >
                Pesquisar
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SearchDock;
