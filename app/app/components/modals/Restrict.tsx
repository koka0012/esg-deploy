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

export interface RestrictProps {
  onClose: () => void;
}

const Restrict = ({ onClose }: RestrictProps) => {
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

            <div className="bg-[#2f3549] p-4 grid grid-cols-2 gap-4">
              <Input
                name="id"
                label="ID"
                value={values.id}
                handleChange={handleChange}
                error={errors.id}
              />

              <Input
                name="matricula"
                label="Matrícula"
                value={values.matricula}
                handleChange={handleChange}
                error={errors.matricula}
              />

              <Input
                name="cpf_cnpj"
                label="CPF/CNPJ"
                value={values.cpf_cnpj}
                handleChange={handleChange}
                error={errors.cpf_cnpj}
              />

              <Input
                name="numero_car"
                label="Número CAR"
                value={values.numero_car}
                handleChange={handleChange}
                error={errors.numero_car}
              />

              <div className="col-span-full text-white">
                Documentos Confidenciais
              </div>

              <InputDocs
                name="cpf_doc"
                label="CPF"
                accept=".pdf"
                handleChange={handleChange}
              />

              <InputDocs
                name="rg_doc"
                label="RG"
                accept=".pdf"
                handleChange={handleChange}
              />

              <InputDocs
                name="comprovante_endereco_doc"
                label="Comprovante de Endereço"
                accept=".pdf"
                handleChange={handleChange}
              />

              <InputDocs
                name="matricula_doc"
                label="Matrícula"
                accept=".pdf, .doc, .docx"
                handleChange={handleChange}
              />

              <InputDocs
                name="contrato_arrendamento_doc"
                label="Contrato de Arrendamento"
                accept=".pdf, .doc, .docx"
                handleChange={handleChange}
              />

              <InputDocs
                name="contrato_industria_doc"
                label="Contrato de Indústria"
                accept=".pdf, .doc, .docx"
                handleChange={handleChange}
              />

              <InputDocs
                name="geolocalizacao_doc"
                label="Geolocalização"
                accept=".shp, .kmz, .kml"
                handleChange={handleChange}
              />

              <InputDocs
                name="outros_doc"
                label="Outros Documentos"
                accept=".docx, .doc, .xls, .xlsx, .pdf"
                handleChange={handleChange}
              />
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

export default Restrict;
