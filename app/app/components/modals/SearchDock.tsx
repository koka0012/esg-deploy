import { Button, Input } from "@/app/components";
import { InputDocs } from "@/app/components/Input/InputDocs";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Form, Formik, FormikHelpers } from "formik";

interface FormValues {
  id: string;
  matricula: string;
  cpf_cnpj: string;
  numero_car: string;
  cpf_doc: string;
  rg_doc: string;
  comprovante_endereco_doc: string;
  matricula_doc: string;
  contrato_arrendamento_doc: string;
  contrato_industria_doc: string;
  geolocalizacao_doc: string;
  outros_doc: string;
}

export interface SearchDockProps {
  onClose: () => void;
}

const SearchDock = ({ onClose }: SearchDockProps) => {
  const initialValues: FormValues = {
    id: "",
    matricula: "",
    cpf_cnpj: "",
    numero_car: "",
    cpf_doc: "",
    rg_doc: "",
    comprovante_endereco_doc: "",
    matricula_doc: "",
    contrato_arrendamento_doc: "",
    contrato_industria_doc: "",
    geolocalizacao_doc: "",
    outros_doc: "",
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

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, handleChange, errors, isSubmitting }) => (
        <Form>
          <div className="w-[80vw] max-w-[60rem] rounded-md shadow-md overflow-hidden">
            <div className="bg-[#2a3042] text-white p-4 flex justify-between items-center">
              <div>Restringir Área</div>

              <button type="button" onClick={onClose}>
                <XMarkIcon className="w-5" />
              </button>
            </div>

            <div className="bg-[#2f3549] p-4 grid grid-cols-2 gap-4"></div>

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
