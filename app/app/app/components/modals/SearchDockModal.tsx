import { useState } from "react";
import { Form, Formik, FormikHelpers } from "formik";
import { Button, Input } from "@/app/components";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface FormValues {
  searchQuery: string;
}

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

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent">
      <div className="w-[32rem] bg-[#2a3042] rounded-md absolute bottom-20">
        <div className="flex bg-[#1c202c] rounded-t-md p-4 items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-white">Pesquisar</h2>
          <button
            onClick={handleClose}
            className="text-zinc-100 hover:text-red-600 focus:outline-none"
          >
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="p-4">
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ values, handleChange }) => (
              <Form>
                <Input
                  name="searchQuery"
                  label="Pesquisar por CPF/CNPJ, Matrícula, ID ou CAR"
                  value={values.searchQuery}
                  handleChange={handleChange("searchQuery")}
                />
                <div className="flex justify-between mt-4">
                  <Button
                    onClick={() => {
                      setShowCriteria(true);
                    }}
                    className="bg-[#2a3042] hover:bg-[#2a3042]/80 !text-zinc-100"
                  >
                    Relatório PDF de Compliance
                  </Button>

                  <div>
                    <Button
                      type="submit"
                      className="bg-[#2a3042] hover:bg-[#2a3042]/80 !text-zinc-100 mr-2"
                    >
                      Pesquisar
                    </Button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="flex justify-center ">
          {showCriteria ? (
            <Button
              onClick={() => setShowCriteria(!showCriteria)}
              className="hover:bg-[#2a3042]/80 !text-zinc-100"
            >
              {showCriteria ? "Selecionar Critérios" : null}
            </Button>
          ) : null}
        </div>
        <div className="flex flex-col gap-4 items-center justify-center bg-[#1c202c] rounded-b-md p-4 mt-4"></div>
      </div>
    </div>
  );
};

export default SearchDockModal;
