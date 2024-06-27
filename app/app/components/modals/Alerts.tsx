import { Button, Select } from "@/app/components";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Form, Formik, FormikHelpers } from "formik";

interface Alert {
  id: number;
  type: string;
  message: string;
  date: string;
}

interface FilterValues {
  filterType: string;
}

export interface AlertsProps {
  onClose: () => void;
}

const Alerts = ({ onClose }: AlertsProps) => {
  const initialValues: FilterValues = {
    filterType: "",
  };

  const handleSubmit = async (
    values: FilterValues,
    { setSubmitting }: FormikHelpers<FilterValues>
  ) => {
    try {
      // Lugar para Filtragem
    } catch (error) {
      setSubmitting(false);
    }
  };

  const alertTypes = ["Nova Área Desmatada", "Queimada", "Acidente"];

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, handleChange, errors, isSubmitting }) => (
        <Form>
          <div className="w-[80vw] max-w-[60rem] rounded-md shadow-md overflow-hidden">
            <div className="bg-[#2a3042] text-white p-4 flex justify-between items-center">
              <div>Alertas</div>

              <button type="button" onClick={onClose}>
                <XMarkIcon className="w-5" />
              </button>
            </div>

            <div className="bg-[#2f3549] p-4 flex flex-col gap-4">
              <div className="text-zinc-300 p-2 rounded-md bg-[#2a3042]">
                Alerta de queimada em -11.862016,-55.5024384 !
              </div>

              <div className="text-zinc-300 p-2 rounded-md bg-[#2a3042]">
                Nova area desmatada detectada ( -41.86586, 92.6541584 ) !
              </div>

              <div className="text-zinc-300 p-2 rounded-md bg-[#2a3042]">
                Alerta de desmatamento em ( 12.15493, 65.5841951 )
              </div>

              <div className="text-zinc-300 p-2 rounded-md bg-[#2a3042]">
                Alerta Exemplo 4
              </div>

              <div className="text-zinc-300 p-2 rounded-md bg-[#2a3042]">
                Alerta Exemplo 5
              </div>
            </div>

            <div className="bg-[#31384d] p-4 flex items-end gap-2">
              <Select
                name="filterType"
                label="Filtrar por Tipo"
                value={values.filterType}
                handleChange={handleChange}
                options={alertTypes.map((type) => ({
                  label: type,
                  value: type,
                }))}
                error={errors.filterType}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#2c3144] hover:bg-[#2e3346] !text-white !text-sm"
              >
                Filtrar
              </Button>
            </div>

            <div className="p-4 bg-[#2a3042] flex justify-end">
              <Button
                type="button"
                onClick={onClose}
                className="bg-[#2f3549] hover:bg-[#394055] !text-white"
              >
                Fechar
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Alerts;
