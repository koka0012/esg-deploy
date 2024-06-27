import { useState, useEffect } from "react";
import { Form, Formik, FormikHelpers } from "formik";
import { Button, Input } from "@/app/components";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface FormValues {
  searchQuery: string;
}

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

const SearchDockModal = ({ handleClose }) => {
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

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <div className="fixed inset-1 flex items-center justify-center">
      <div
        className={`w-[32rem] bg-[#2a3042] rounded-md absolute bottom-20 transition-transform duration-300 ${
          showModal ? "animate-fadeInUp" : "opacity-0"
        }`}
      >
        <div className="flex bg-[#1c202c] rounded-t-md p-4 items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-white">Pesquisar</h2>
          <button
            onClick={handleClose}
            className="text-white hover:text-red-600 focus:outline-none"
          >
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mx-4">
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ values, handleChange }) => (
              <Form>
                <Input
                  name="searchQuery"
                  label="Pesquisar por CPF/CNPJ, Matrícula, ID ou CAR"
                  value={values.searchQuery}
                  onChange={handleChange}
                />
                <div className="flex justify-between mt-4">
                  <Button
                    onClick={() => {
                      setShowCriteria(true);
                    }}
                    className="bg-[#1c202c] hover:bg-[#1c202c]/80 !text-white"
                  >
                    Relatório PDF de Compliance
                  </Button>

                  <div>
                    <Button
                      type="submit"
                      className="bg-[#1c202c] hover:bg-[#1c202c]/80 !text-white mr-2"
                    >
                      Pesquisar
                    </Button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="flex justify-center">
          {showCriteria ? (
            <div className="p-4 w-full">
              <div className="flex justify-center">
                <Button
                  onClick={() => setShowCriteria(!showCriteria)}
                  className="bg-[#1c202c] hover:bg-[#1c202c]/80 !text-white mr-2 mb-4"
                >
                  {showCriteria ? "Salvar Critérios" : null}
                </Button>
              </div>

              <div className="max-h-40 bg-[#1c202c] overflow-y-auto rounded-md p-2">
                {criteriaItems.map((item) => (
                  <div key={item} className="flex items-center">
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
                      className="mr-2 text-[#4a5568] focus:ring-[#4a5568] h-4 w-4"
                    />
                    <label
                      htmlFor={item}
                      className="text-white text-[12px] mb-1"
                    >
                      {item}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
        <div className="flex flex-col gap-4 items-center justify-center bg-[#1c202c] rounded-b-md p-4 mt-4" />
      </div>
    </div>
  );
};

export default SearchDockModal;
