"use client";

import { Form, Formik, FormikHelpers } from "formik";
import { object, string } from "yup";

import { Input, Button } from "@/app/components";

interface FormValues {
  login: string;
  password: string;
}

export default function page() {
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
            <div className="p-4 flex flex-col gap-4">
              <Input
                name="login"
                label="Login"
                placeholder="Digite o login"
                value={values.login}
                handleChange={handleChange}
                error={errors.login}
              />

              <Input
                type="password"
                name="password"
                label="Senha"
                placeholder="Digite a senha"
                value={values.password}
                handleChange={handleChange}
                error={errors.password}
              />

              <Button type="submit" disabled={isSubmitting}>
                Entrar
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
