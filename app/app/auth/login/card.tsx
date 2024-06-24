"use client";

import { Form, Formik, FormikHelpers } from "formik";
import { object, string } from "yup";

import Button from "@/app/components/Button/Button";
import Input from "@/app/components/Input/Input";

interface FormValues {
  login: string;
  password: string;
}

export default function card() {
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
    <div className="flex flex-col bg-black rounded-md p-5 gap-4 bg-opacity-70">
      <div>
        <h1 className="text-slate-100 text-[24px]">Bem vindo!</h1>
        <p className="text-slate-100 font-light">Por favor, insira seu login e senha.</p>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <p className="text-[12px] text-slate-100 mb-1">Login(CPF OU CNPJ)*</p>
          <div className="border border-slate-50 rounded-md p-3">
            <p className="text-[12px] text-slate-500">Digite aqui...</p>
          </div>
        </div>
        <div>
          <p className="text-[12px] text-slate-100 mb-1">Senha*</p>
          <div className="border border-slate-50 rounded-md p-3">
            <p className="text-[12px] text-slate-500">Digite aqui sua senha...</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-1">
      <input type="checkbox" />
        <p className="text-[12px] text-slate-100">Lembrar Senha</p>{" "}
        </div>
        <p className="text-[12px] text-slate-100">Esqueceu a senha?</p>
      </div>
      <button className="bg-sky-700 rounded-md p-1 ">
        <p className="text-[16px] text-slate-100">Login</p>
      </button>
      <p className="text-[12px] text-slate-100">
        Não possui um cadastro ainda?
      </p>
    </div>
  );
}
