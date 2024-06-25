"use client";

import { Form, Formik, FormikHelpers } from "formik";

import { Select } from "@/app/components";

interface FormValues {
  option: string;
}

export default function Search() {
  const initialValues: FormValues = {
    option: "",
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
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, handleChange, errors, isSubmitting }) => (
          <Form>
            <div className="w-[16rem]">
              <Select
                name="option"
                value={values.option}
                handleChange={handleChange}
                options={[
                  {
                    label: "1",
                    value: "1",
                  },
                  {
                    label: "2",
                    value: "2",
                  },
                  {
                    label: "3",
                    value: "3",
                  },
                ]}
                error={errors.option}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
