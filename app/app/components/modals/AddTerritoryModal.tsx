import { useState, useEffect } from "react";
import { Form, Formik, FormikHelpers } from "formik";
import { Button, Input } from "@/app/components";
import { XMarkIcon } from "@heroicons/react/24/outline";

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

const AddTerritoryModal = ({ handleClose }: any) => {
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

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className={`w-[32rem] bg-[#2a3042] rounded-md relative transition-transform duration-300 ${showModal ? 'animate-fadeInUp' : 'opacity-0'}`}>
        <div className="flex bg-[#1c202c] rounded-t-md p-4 items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-white">Adicionar Território</h2>
          <button
            onClick={handleClose}
            className="text-zinc-100 hover:text-red-600 focus:outline-none"
          >
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mx-4">
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ values, handleChange, setValues, errors, isSubmitting }) => (
              <Form>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-1">
                    <Input
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
                  <div className="col-span-1">
                    <Input
                      name="nome_razao_social"
                      label="Nome/Razão Social"
                      value={values.nome_razao_social}
                      handleChange={handleChange("nome_razao_social")}
                      error={errors.nome_razao_social}
                    />
                  </div>
                  <div className="col-span-1">
                    <Input
                      name="cpf_cnpj"
                      label="CPF/CNPJ"
                      value={values.cpf_cnpj}
                      handleChange={handleChange("cpf_cnpj")}
                      error={errors.cpf_cnpj}
                    />
                  </div>
                  <div className="col-span-1">
                    <Input
                      name="data_cadastro_car"
                      label="Data Cadastro CAR"
                      type="date"
                      value={values.data_cadastro_car}
                      handleChange={handleChange("data_cadastro_car")}
                      error={errors.data_cadastro_car}
                    />
                  </div>
                  <div className="col-span-1">
                    <Input
                      name="data_cadastro_restrito"
                      label="Data do Cadastro Restrito"
                      type="date"
                      value={values.data_cadastro_restrito}
                      handleChange={() => null}
                    />
                  </div>
                  <div className="col-span-1">
                    <Input
                      name="nome_propriedade"
                      label="Nome da Propriedade"
                      value={values.nome_propriedade}
                      handleChange={handleChange("nome_propriedade")}
                      error={errors.nome_propriedade}
                    />
                  </div>
                  <div className="col-span-1">
                    <Input
                      name="matricula"
                      label="Matrícula"
                      value={values.matricula}
                      handleChange={handleChange("matricula")}
                      error={errors.matricula}
                    />
                  </div>
                  <div className="col-span-1">
                    <Input
                      name="area_total_informada"
                      label="Área Total Informada (ha)"
                      value={values.area_total_informada}
                      handleChange={handleChange("area_total_informada")}
                      error={errors.area_total_informada}
                    />
                  </div>
                  <div className="col-span-1">
                    <Input
                      name="area_total_calculada"
                      label="Área Total Calculada (ha)"
                      value={values.area_total_calculada}
                      handleChange={handleChange("area_total_calculada")}
                      error={errors.area_total_calculada}
                    />
                  </div>
                  <div className="col-span-1">
                    <Input
                      name="municipio"
                      label="Município"
                      value={values.municipio}
                      handleChange={handleChange("municipio")}
                      error={errors.municipio}
                    />
                  </div>
                  <div className="">
                    <Input
                      name="bioma"
                      label="Bioma"
                      value={values.bioma}
                      handleChange={handleChange("bioma")}
                      error={errors.bioma}
                    />
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="flex bg-[#1c202c] rounded-b-md p-2 justify-end mt-4">
          <Button
            type="submit"
            className="bg-[#2a3042] hover:bg-[#2a3042]/80 !text-zinc-100 mr-2"
          >
            Salvar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddTerritoryModal;
