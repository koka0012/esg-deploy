import { Button, Input } from "@/app/components";
import { InputDocs } from "@/app/components/Input/InputDocs";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Form, Formik, FormikHelpers } from "formik";

interface FormValues {
  id: string;
  numero_car: string;
  nome_razao_social: string;
  cpf_cnpj: string;
  data_cadastro_car: string;
  data_cadastro_restrito: string;
  nome_propriedade: string;
  matricula: string;
  area_total_informada: string;
  area_total_calculada: string;
  municipio: string;
  bioma: string;
}

export interface AddTerritoryProps {
  onClose: () => void;
}

const AddTerritory = ({ onClose }: AddTerritoryProps) => {
  const initialValues: FormValues = {
    id: "",
    numero_car: "",
    nome_razao_social: "",
    cpf_cnpj: "",
    data_cadastro_car: "",
    data_cadastro_restrito: "",
    nome_propriedade: "",
    matricula: "",
    area_total_informada: "",
    area_total_calculada: "",
    municipio: "",
    bioma: "",
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

  const handleCarNumberChange = async (
    carNumber: string,
    setValues: (values: FormValues) => void
  ) => {
    if (carNumber === "123456") {
      setValues({
        ...initialValues,
        numero_car: carNumber,
        nome_razao_social: "Exemplo Ltda.",
      });
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, setValues, handleChange, errors, isSubmitting }) => (
        <Form>
          <div className="w-[40vw] max-w-[60rem] rounded-md shadow-md overflow-hidden">
            <div className="bg-[#2a3042] text-white p-4 flex justify-between items-center">
              <div className="font-bold text-[16px]">Adicionar Território</div>

              <button type="button" onClick={onClose}>
                <XMarkIcon className="w-5" />
              </button>
            </div>

            <div className="bg-[#2f3549] p-4 grid grid-cols-4 gap-4">
              <div className="col-span-2">
                <Input
                  type="number"
                  name="numero_car"
                  label="Número CAR"
                  value={values.numero_car}
                  handleChange={(e) => {
                    handleChange(e);
                    handleCarNumberChange(e.target.value, setValues);
                  }}
                  error={errors.numero_car}
                />
              </div>

              <div className="col-span-2">
                <Input
                  name="nome_razao_social"
                  label="Nome/Razão Social"
                  value={values.nome_razao_social}
                  handleChange={handleChange}
                  error={errors.nome_razao_social}
                />
              </div>

              <div className="col-span-2">
                <Input
                  name="cpf_cnpj"
                  label="CPF/CNPJ"
                  value={values.cpf_cnpj}
                  handleChange={handleChange}
                  error={errors.cpf_cnpj}
                />
              </div>

              <Input
                type="date"
                name="data_cadastro_car"
                label="Data Cadastro CAR"
                value={values.data_cadastro_car}
                handleChange={handleChange}
                error={errors.data_cadastro_car}
              />

              <Input
                type="date"
                name="data_cadastro_restrito"
                label="Data do Cadastro Restrito"
                value={values.data_cadastro_restrito}
                handleChange={handleChange}
                disabled
              />

              <div className="col-span-2">
                <Input
                  name="nome_propriedade"
                  label="Nome da Propriedade"
                  value={values.nome_propriedade}
                  handleChange={handleChange}
                  error={errors.nome_propriedade}
                />
              </div>

              <div className="col-span-2">
                <Input
                  name="matricula"
                  label="Matrícula"
                  value={values.matricula}
                  handleChange={handleChange}
                  error={errors.matricula}
                />
              </div>

              <div className="col-span-2">
                <Input
                  name="area_total_informada"
                  label="Área Total Informada (ha)"
                  value={values.area_total_informada}
                  handleChange={handleChange}
                  error={errors.area_total_informada}
                />
              </div>

              <div className="col-span-2">
                <Input
                  name="area_total_calculada"
                  label="Área Total Calculada (ha)"
                  value={values.area_total_calculada}
                  handleChange={handleChange}
                  error={errors.area_total_calculada}
                />
              </div>

              <div className="col-span-2">
                <Input
                  name="municipio"
                  label="Município"
                  value={values.municipio}
                  handleChange={handleChange}
                  error={errors.municipio}
                />
              </div>

              <div className="col-span-2">
                <Input
                  name="bioma"
                  label="Bioma"
                  value={values.bioma}
                  handleChange={handleChange}
                  error={errors.bioma}
                />
              </div>
            </div>

            <div className="bg-[#2a3042] px-4 py-2 flex justify-end">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#2f3549] hover:bg-[#394055] !text-white"
              >
                Salvar
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddTerritory;
