// RestrictModal.js
import { Form, Formik, FormikHelpers } from "formik";
import { Button, Input } from "@/app/components";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface FormValues {
  id: string;
  matricula: string;
  cpf_cnpj: string;
  numero_car: string;
}

const RestrictModal = ({ handleClose }) => {
  const initialValues: FormValues = {
    id: "",
    matricula: "",
    cpf_cnpj: "",
    numero_car: "",
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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-[32rem] bg-[#2a3042] p-4 rounded-md relative">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-white">Restringir Área</h2>
          <button
            onClick={handleClose}
            className="text-zinc-100 hover:text-red-600 focus:outline-none"
          >
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values, handleChange, errors, isSubmitting }) => (
            <Form>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <Input
                    name="id"
                    label="ID"
                    value={values.id}
                    onChange={handleChange}
                    error={errors.id}
                  />
                </div>
                <div className="col-span-1">
                  <Input
                    name="matricula"
                    label="Matrícula"
                    value={values.matricula}
                    onChange={handleChange}
                    error={errors.matricula}
                  />
                </div>
                <div className="col-span-1">
                  <Input
                    name="cpf_cnpj"
                    label="CPF/CNPJ"
                    value={values.cpf_cnpj}
                    onChange={handleChange}
                    error={errors.cpf_cnpj}
                  />
                </div>
                <div className="col-span-1">
                  <Input
                    name="numero_car"
                    label="Número CAR"
                    value={values.numero_car}
                    onChange={handleChange}
                    error={errors.numero_car}
                  />
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Documentos Confidenciais
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-1">
                    {/* <FileInput
                      name="cpfDocument"
                      label="CPF (PDF)"
                      accept=".pdf"
                      onChange={handleChange}
                    /> */}
                  </div>
                  <div className="col-span-1">
                    {/* <FileInput
                      name="rgDocument"
                      label="RG (PDF)"
                      accept=".pdf"
                      onChange={handleChange}
                    /> */}
                  </div>
                  <div className="col-span-1">
                    {/* <FileInput
                      name="comprovanteEnderecoDocument"
                      label="Comprovante de Endereço (PDF)"
                      accept=".pdf"
                      onChange={handleChange}
                    /> */}
                  </div>
                  <div className="col-span-1">
                    {/* <FileInput
                      name="matriculaDocument"
                      label="Matrícula (PDF, DOC, DOCX)"
                      accept=".pdf,.doc,.docx"
                      onChange={handleChange}
                    /> */}
                  </div>
                  <div className="col-span-1">
                    {/* <FileInput
                      name="contratoArrendamentoDocument"
                      label="Contrato de Arrendamento (PDF, DOC, DOCX)"
                      accept=".pdf,.doc,.docx"
                      onChange={handleChange}
                    /> */}
                  </div>
                  <div className="col-span-1">
                    {/* <FileInput
                      name="contratoIndustriaDocument"
                      label="Contrato de Indústria (PDF, DOC, DOCX)"
                      accept=".pdf,.doc,.docx"
                      onChange={handleChange}
                    /> */}
                  </div>
                  <div className="col-span-1">
                    {/* <FileInput
                      name="geolocalizacaoDocument"
                      label="Geolocalização (Shapefile, KMZ, KML)"
                      accept=".shp,.kmz,.kml"
                      onChange={handleChange}
                    /> */}
                  </div>
                  <div className="col-span-1">
                    {/* <FileInput
                      name="outrosDocumentos"
                      label="Outros Documentos (DOCX, DOC, XLS, XLSX, PDF)"
                      accept=".docx,.doc,.xls,.xlsx,.pdf"
                      onChange={handleChange}
                    /> */}
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-slate-700 hover:bg-[#2a3042]/80 !text-zinc-100 mr-2"
                >
                  Salvar
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RestrictModal;
