"use client";

import { useRouter } from "next/navigation";
import { Form, Formik, FormikHelpers } from "formik";
import { object, string } from "yup";

import { Button, Input } from "@/app/components";

interface FormValues {
  email: string;
}

const Page = () => {
  const router = useRouter();

  const initialValues: FormValues = {
    email: "",
  };

  const validationSchema = object().shape({
    email: string().required("E-mail é um campo obrigatório."),
  });

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    try {
      console.log(values);

      router.push("/auth/login");
    } catch (error) {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-1/2 bg-zinc-950 bg-opacity-75 backdrop-blur-sm text-zinc-100 p-4 rounded-md flex flex-col gap-4">
      <div className="text-3xl">Recuperação de Conta</div>
      <div className="text-xs">
        Por favor, nos informe o e-mail cadastrado na sua conta.
      </div>

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
                type="email"
                name="email"
                placeholder="Digite o e-mail"
                value={values.email}
                handleChange={handleChange}
                error={errors.email}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-sky-900 hover:bg-sky-800 !text-zinc-100"
              >
                Enviar código de recuperação
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Page;
