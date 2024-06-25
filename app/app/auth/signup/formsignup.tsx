"use client";

import { Form, Formik, FormikHelpers } from "formik";
import { useRouter } from "next/navigation";
import { object, string } from "yup";

import Button from "@/app/components/Button/Button";
import Input from "@/app/components/Input/Input";

interface FormValues {
  login: string;
  password: string;
}
function FormSignup() {
  const router = useRouter();

  const initialValues: FormValues = {
    login: "",
    password: "",
  };

  const validationSchema = object().shape({
    login: string().required("é um campo obrigatório."),
    password: string().required("é um campo obrigatório."),
  });

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
    <div className="flex flex-col bg-zinc-900 rounded-lg p-5 gap-4 bg-opacity-70">
      <div>
        <h1 className="text-zinc-100 text-[24px]">Cadastro</h1>
        <p className="text-zinc-100 font-light">
          Por favor, preencha os campos abaixo.
        </p>
      </div>

      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnBlur={false}
          validateOnChange={false}
          validateOnMount={false}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, errors, isSubmitting }) => (
            <Form>
              <div className="flex flex-col gap-4">
                <Input
                  name="login"
                  label="CPF ou CNPJ"
                  placeholder="Digite aqui seu CPF/CNPJ..."
                  value={values.login}
                  handleChange={handleChange}
                  error={errors.login}
                />

                <Input
                  type="password"
                  name="password"
                  label="Senha"
                  placeholder="Digite aqui sua senha..."
                  value={values.password}
                  handleChange={handleChange}
                  error={errors.password}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="!bg-sky-700"
                  // onClick={() => router.push("/app")}
                >
                  Cadastrar
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default FormSignup;
