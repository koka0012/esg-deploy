import { Form, Formik, FormikHelpers } from "formik";
import { Button, Input } from "@/app/components";

interface FormValues {
  car: string;
  cpf: string;
  cnpj: string;
  id_relatorio: string;
  nome_produtor: string;
}

const SearchModal = () => {
  const initialValues: FormValues = {
    car: "",
    cpf: "",
    cnpj: "",
    id_relatorio: "",
    nome_produtor: "",
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
    <div className="w-[24rem] bg-[#2a3042] bg-opacity-50 backdrop-blur-md p-4 rounded-md animate-fadeInRight transition-transform duration-300">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, handleChange, errors, isSubmitting }) => (
          <Form>
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-2">
                <Input
                  name="car"
                  label="CAR"
                  value={values.car}
                  handleChange={handleChange}
                  error={errors.car}
                />
              </div>

              <div className="col-span-2">
                <Input
                  name="cpf"
                  label="CPF"
                  value={values.cpf}
                  handleChange={handleChange}
                  error={errors.cpf}
                />
              </div>

              <div className="col-span-2">
                <Input
                  name="cnpj"
                  label="CNPJ"
                  value={values.cnpj}
                  handleChange={handleChange}
                  error={errors.cnpj}
                />
              </div>

              <div className="col-span-3">
                <Input
                  name="id_relatorio"
                  label="Relatório"
                  value={values.id_relatorio}
                  handleChange={handleChange}
                  error={errors.id_relatorio}
                />
              </div>

              <div className="col-span-3">
                <Input
                  name="nome_produtor"
                  label="Produtor"
                  value={values.nome_produtor}
                  handleChange={handleChange}
                  error={errors.nome_produtor}
                />
              </div>

              <div className="col-span-full flex justify-end">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#2a3042] hover:bg-[#2f3549] !text-white"
                >
                  Pesquisar
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchModal;
