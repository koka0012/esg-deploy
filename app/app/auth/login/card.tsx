"use client";

import { Form, Formik, FormikHelpers } from "formik";
import { useRouter } from "next/navigation";
import { object, string } from "yup";

import Button from "@/app/components/Button/Button";
import Input from "@/app/components/Input/Input";
import Link from "next/link";

interface FormValues {
  login: string;
  password: string;
}

export default function card() {
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
        <h1 className="text-zinc-100 text-[24px]">Bem vindo!</h1>
        <p className="text-zinc-100 font-light">
          Por favor, insira seu login e senha.
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
                  label="Login (CPF ou CNPJ)"
                  placeholder="Digite aqui seu login..."
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
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row gap-1">
                    <input type="checkbox" />
                    <p className="text-[12px] text-zinc-100">Lembrar Senha</p>
                  </div>
                  <Link
                    href="/auth/recoverpassword"
                    className="text-[12px] text-zinc-100 hover:underline"
                  >
                    Esqueceu a senha?
                  </Link>
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="!bg-sky-700"
                  onClick={() => router.push("/app")}
                >
                  Login
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <Link
        href="/auth/signup"
        className="text-[12px] text-zinc-100 hover:underline"
      >
        Não possui um cadastro ainda?
      </Link>
    </div>
  );
}
