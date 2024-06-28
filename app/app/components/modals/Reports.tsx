import { Button, Input } from "@/app/components";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Form, Formik, FormikHelpers } from "formik";

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

  const handleSubmit = async (
    values: SearchValues,
    { setSubmitting }: FormikHelpers<SearchValues>
  ) => {
    try {
      console.log(values);
      onSearch(values);
    } catch (error) {
      setSubmitting(false);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, handleChange, errors, isSubmitting }) => (
        <Form>
          <div className="w-[40vw] max-w-[60rem] rounded-md shadow-md overflow-hidden">
            <div className="bg-[#2a3042] text-white p-4 flex justify-between items-center">
              <div  className="font-bold text-[16px]">Relatoriós</div>
              <button type="button" onClick={onClose}>
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
                type="submit"
                disabled={isSubmitting}
                className="bg-[#2f3549] hover:bg-[#394055] !text-white font-bold text-[16px]"
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

export default Reports;
