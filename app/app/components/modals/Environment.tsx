import { Button, Select } from "@/app/components";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Form, Formik, FormikHelpers } from "formik";

interface FormValues {
  variable: string;
  year: string;
}

export interface EnvironmentProps {
  onClose: () => void;
}

const Environment = ({ onClose }: EnvironmentProps) => {
  const variables = [
    { label: "Desmatamento PRODES", value: "Desmatamento PRODES" },
    { label: "Desmatamento SAD e DETER", value: "Desmatamento SAD e DETER" },
    { label: "Perturbação Florestal", value: "Perturbação Florestal" },
    { label: "Autos de Infração SEMA", value: "Autos de Infração SEMA" },
    { label: "Autorização de Queimada", value: "Autorização de Queimada" },
    {
      label: "Autorização de Supressão Vegetal",
      value: "Autorização de Supressão Vegetal",
    },
    {
      label: "Autorização de Supressão Vegetal SINAFLOR",
      value: "Autorização de Supressão Vegetal SINAFLOR",
    },
    { label: "Embargo SEMA", value: "Embargo SEMA" },
    { label: "Embargo ICMBio", value: "Embargo ICMBio" },
    { label: "Embargo IBAMA", value: "Embargo IBAMA" },
    { label: "Autos de Infração IBAMA", value: "Autos de Infração IBAMA" },
    { label: "Terras Indígenas", value: "Terras Indígenas" },
    { label: "Áreas Quilombolas", value: "Áreas Quilombolas" },
    { label: "Unidades de Conservação", value: "Unidades de Conservação" },
    { label: "Fluxo de CO2", value: "Fluxo de CO2" },
    { label: "Índice de Área Foliar", value: "Índice de Área Foliar" },
    { label: "Evapotranspiração", value: "Evapotranspiração" },
    { label: "Área de Floresta Nativa", value: "Área de Floresta Nativa" },
    { label: "Índice de Seca", value: "Índice de Seca" },
    { label: "Chuva", value: "Chuva" },
    { label: "Temperatura do Solo", value: "Temperatura do Solo" },
    { label: "Emissão CH4", value: "Emissão CH4" },
    { label: "Emissão Bruta de CO2", value: "Emissão Bruta de CO2" },
    { label: "Remoção Bruta de CO2", value: "Remoção Bruta de CO2" },
    { label: "Fluxo Líquido de CO2", value: "Fluxo Líquido de CO2" },
    { label: "EVI", value: "EVI" },
    { label: "NDVI", value: "NDVI" },
    { label: "Umidade do Solo", value: "Umidade do Solo" },
    { label: "Focos de Incêndios", value: "Focos de Incêndios" },
    { label: "Severidade da Queimada", value: "Severidade da Queimada" },
  ];

  const years = Array.from({ length: 17 }, (_, i) => 2008 + i).map((year) => ({
    label: year.toString(),
    value: year.toString(),
  }));

  const initialValues: FormValues = {
    variable: "",
    year: "",
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
          <div className="w-[40vw] max-w-[60rem] rounded-md shadow-md overflow-hidden">
            <div className="bg-[#2a3042] text-white p-4 flex justify-between items-center">
              <p className="font-bold text-[16px]">Ambiente</p>

              <button type="button" onClick={onClose}>
                <XMarkIcon className="w-5" />
              </button>
            </div>

            <div className="bg-[#2f3549] p-4 grid grid-cols-2 gap-4">
              <Select
                name="variable"
                label="Variável Ambiental"
                value={values.variable}
                handleChange={handleChange}
                error={errors.variable}
                options={variables}
              />

              <Select
                name="year"
                label="Ano"
                value={values.year}
                handleChange={handleChange}
                error={errors.year}
                options={years}
              />
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

export default Environment;
