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

export interface AreaInsightsProps {
  onClose: () => void;
}

const AreaInsights = ({ onClose }: AreaInsightsProps) => {
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
          <div className="w-[85vw] max-w-[72rem] rounded-md shadow-md overflow-hidden transition-transform duration-300 animate-fadeInUp">
            <div className="bg-[#2a3042] text-white p-4 flex justify-between items-center">
              <div>Insights de Área</div>
              <button type="button" onClick={onClose}>
                <XMarkIcon className="w-5" />
              </button>
            </div>

            <div className="flex flex-row bg-[#2f3549] h-[14vw] p-2 gap-2 justify-between">
              <div className="grow bg-[#2a3042] rounded-md p-2">
                Grafico Exemplo 1
              </div>
              <div className="grow bg-[#2a3042] rounded-md p-2">
                Grafico Exemplo 2
              </div>
              <div className="grow bg-[#2a3042] rounded-md p-2">
                Grafico Exemplo 3
              </div>
            </div>

            <div className="bg-[#2a3042] p-4 flex justify-end"></div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AreaInsights;
