"use client";

import { Form, Formik, FormikHelpers } from "formik";
import { useRouter } from "next/navigation";
import { object, string } from "yup";

import Button from "@/app/components/Button/Button";
import Input from "@/app/components/Input/Input";

interface FormValues {
  email: string;
}
function FormRecover() {
  const router = useRouter();

  const initialValues: FormValues = {
    email: "",
  };

  const validationSchema = object().shape({
    email: string().required("é um campo obrigatório."),
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
        <h1 className="text-zinc-100 text-[24px]">Recuperação de conta</h1>
        <p className="text-zinc-100 font-light">
          Por favor, nos informe o e-mail cadastrado na sua conta.
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
                  name="email"
                  label=""
                  placeholder="Digite aqui seu e-mail..."
                  value={values.email}
                  handleChange={handleChange}
                  error={errors.email}
                />


                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="!bg-sky-700"
                  // onClick={() => router.push("/app")}
                >
                  Enviar código de recuperação
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

    </div>
  );
}

export default FormRecover;
