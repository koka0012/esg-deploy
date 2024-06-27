"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Form, Formik, FormikHelpers } from "formik";
import { object, string } from "yup";

import { Button, Input } from "@/app/components";

interface FormValues {
  login: string;
  password: string;
  remember_password: boolean;
}

const Page = () => {
  const router = useRouter();

  const initialValues: FormValues = {
    login: "",
    password: "",
    remember_password: false,
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

      router.push("/app");
    } catch (error) {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-1/2 bg-zinc-950 bg-opacity-75 backdrop-blur-sm text-zinc-100 p-4 rounded-md flex flex-col gap-4">
      <div className="text-3xl">Bem vindo</div>
      <div className="text-xs">Por favor, insira seu login e senha.</div>

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

              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-1">
                  <input
                    type="checkbox"
                    checked={values.remember_password}
                    onChange={handleChange}
                  />

                  <div className="text-[12px] text-zinc-100">Lembrar Senha</div>
                </div>

                <Link
                  href="/auth/recoverpassword"
                  className="text-[12px] text-zinc-100 hover:underline"
                >
                  Esqueceu a Senha?
                </Link>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-sky-900 hover:bg-sky-800 !text-zinc-100"
              >
                Login
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Page;
