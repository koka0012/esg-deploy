import { Button, Select } from "@/app/components";
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
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
          <div className="w-[40vw] max-w-[60rem] max-h-[35vw] rounded-md shadow-md overflow-auto ">
            <div className="bg-[#2a3042] text-white p-4 flex justify-between items-center">
              <div className="font-bold text-[16px]">Alertas</div>

              <button type="button" onClick={onClose}>
                <XMarkIcon className="w-5" />
              </button>
            </div>

            <div className="bg-[#31384d] p-4 flex flex-col gap-4">
              <p className="text-zinc-300 p-2 rounded-md bg-[#2a3042] border-2 border-white/60 flex flex-row gap-2 text-sm">
                <ExclamationTriangleIcon className="w-5" />
                Alerta de queimada em -11.862016,-55.5024384 !
              </p>

              <p className="text-zinc-300 p-2 rounded-md bg-[#2a3042]  border-2 border-white/60 flex flex-row gap-2 text-sm">
                <ExclamationTriangleIcon className="w-4" />
                Nova area desmatada detectada ( -41.86586, 92.6541584 ) !
              </p>

              <p className="text-zinc-300 p-2 rounded-md bg-[#2a3042]  border-2 border-white/60 flex flex-row gap-2 text-sm">
                <ExclamationTriangleIcon className="w-4" />
                Alerta de desmatamento em ( 12.15493, 65.5841951 )

              </p>

              <p className="text-zinc-300 p-2 rounded-md bg-[#2a3042]  border-2 border-white/60 flex flex-row gap-2 text-sm">
                <ExclamationTriangleIcon className="w-4" />
                Alerta Exemplo 4
              </p>

              <p className="text-zinc-300 p-2 rounded-md bg-[#2a3042]  border-2 border-white/60 flex flex-row gap-2 text-sm">
                <ExclamationTriangleIcon className="w-4" />
                Alerta Exemplo 5
              </p>
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
                className="bg-[#2c3144] hover:bg-[#2e3346] !text-white !font-medium text-xs"
              >
                Filtrar
              </Button>
            </div>

            <div className="px-4 py-2 bg-[#2a3042] flex justify-end">
              <Button
                type="button"
                onClick={onClose}
                className="bg-[#2f3549] hover:bg-[#394055] !text-white font-bold text-[16px]"
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
