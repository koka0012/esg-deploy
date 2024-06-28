"use client";
import {
  CheckCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
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
  const datas = [
    {
      ano: "2020",
      biomassa: "521 566",
      biomassa_w: "w-[25%]",
      chuva: "1444",
      chuva_w: "w-[35%]",
      clima: "12",
      clima_w: "w-[10%]",
      compilance: true,
    },
    {
      ano: "2021",
      biomassa: "485 421",
      biomassa_w: "w-[22%]",
      chuva: "1232",
      chuva_w: "w-[30%]",
      clima: "15",
      clima_w: "w-[12%]",
      compilance: true,
    },
    {
      ano: "2022",
      biomassa: "399 874",
      biomassa_w: "w-[20%]",
      chuva: "1276",
      chuva_w: "w-[32%]",
      clima: "22",
      clima_w: "w-[15%]",
      compilance: true,
    },
    {
      ano: "2023",
      biomassa: "212 589",
      biomassa_w: "w-[18%]",
      chuva: "1493",
      chuva_w: "w-[33%]",
      clima: "38",
      clima_w: "w-[18%]",
      compilance: false,
    },
    {
      ano: "2024",
      biomassa: "128 701",
      biomassa_w: "w-[16%]",
      chuva: "1557",
      chuva_w: "w-[36%]",
      clima: "41",
      clima_w: "w-[20%]",
      compilance: true,
    },
  ];

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
          <div
            className="rounded-md shadow-md overflow-hidden transition-transform duration-300 animate-fadeInUp"
            style={{ width: "calc(100vw - 10rem)" }}
          >
            <div className="bg-[#2a3042] text-white p-4 flex justify-between items-center">
              <div>Insights de Área</div>
              <button type="button" onClick={onClose}>
                <XMarkIcon className="w-5" />
              </button>
            </div>

            <div className="grid grid-cols-4 bg-[#2f3549] p-2 min-h-[12rem] h-[10rem] gap-2 justify-between">
              <div className="bg-[#2a3042] rounded-md p-2 text-white flex justify-center items-center">
                <img src="Charts/co2.svg" alt="co2" width={300} />
              </div>

              <div className="bg-[#2a3042] rounded-md p-2 text-white flex justify-center items-center">
                <img src="Charts/sankey.svg" alt="co2" width={350} />
              </div>

              <div className="col-span-2 bg-[#2a3042] rounded-md p-2 text-white">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Biomassa (kg/ha)</th>
                      <th>Chuva (mm)</th>
                      <th>Clima (SPI)</th>
                      <th>Compilance</th>
                    </tr>
                  </thead>

                  <tbody>
                    {datas.map((item: any, key: number) => (
                      <tr key={key} className="text-sm">
                        <td>
                          <div className="flex justify-center">{item.ano}</div>
                        </td>
                        <td>
                          <div className="flex items-center gap-2">
                            <div>{item.biomassa}</div>
                            <div
                              className={`bg-gradient-to-r from-green-500 p-2.5 ${item.biomassa_w}`}
                            />
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center gap-2">
                            <div>{item.chuva}</div>
                            <div
                              className={`bg-gradient-to-r from-orange-500 p-2.5 ${item.chuva_w}`}
                            />
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center gap-2">
                            <div>{item.clima}</div>
                            <div
                              className={`bg-gradient-to-r from-sky-500 p-2.5 ${item.clima_w}`}
                            />
                          </div>
                        </td>
                        <td className="flex justify-center">
                          {item.compilance ? (
                            <CheckCircleIcon className="w-6 text-green-500" />
                          ) : (
                            <XCircleIcon className="w-6 text-red-500" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AreaInsights;
