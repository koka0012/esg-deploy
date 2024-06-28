import { Button, Input } from "@/app/components";
import { InputDocs } from "@/app/components/Input/InputDocs";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Form, Formik, FormikHelpers } from "formik";
import { object, string } from "yup";

interface FormValues {
  login: string;
  password: string;
}

export interface LoginRestrictProps {
  onClose: () => void;
  onChange: () => void;
}

const LoginRestrict = ({ onClose, onChange }: LoginRestrictProps) => {
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
      onChange();
    } catch (error) {
      setSubmitting(false);
    }
  };

  return (
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
          <div className="w-[27vw] rounded-md shadow-md overflow-hidden">
            <div className="bg-[#2a3042] text-white p-4 flex justify-between items-center">
              <div className="font-bold text-[16px]">Login</div>

              <button type="button" onClick={onClose}>
                <XMarkIcon className="w-5" />
              </button>
            </div>

            <div className="bg-[#2f3549] max-h-[24vw] p-4 grid grid-cols-2 gap-4 overflow-auto">
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
            </div>

            <div className="bg-[#2a3042] px-4 py-2 flex justify-end">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#2f3549] hover:bg-[#394055] !text-white"
              >
                Login
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginRestrict;
