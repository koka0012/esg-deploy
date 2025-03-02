import { Select } from "@/app/components";
import { Form, Formik, FormikHelpers } from "formik";

interface FormValues {
  from: string;
  to: string;
}

const OrbitalModal = () => {
  const options = [
    { label: "2020", value: "2020" },
    { label: "2021", value: "2021" },
    { label: "2022", value: "2022" },
    { label: "2023", value: "2023" },
    { label: "2024", value: "2024" },
  ];

  const initialValues: FormValues = {
    from: "",
    to: "",
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
    <div className="bg-[#2a3042] p-2 rounded-md animate-fadeInRight transition-transform duration-300">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, setFieldValue, errors, submitForm }) => (
          <Form>
            <div className="flex items-center gap-2">
              <div>De</div>

              <Select
                name="from"
                value={values.from}
                handleChange={(e) => {
                  setFieldValue("from", e.value);

                  if (values.from && values.to) {
                    submitForm();
                  }
                }}
                error={errors.from}
                options={options}
              />

              <div>até</div>

              <Select
                name="to"
                value={values.to}
                handleChange={(e) => {
                  setFieldValue("to", e.value);

                  if (values.from && values.to) {
                    submitForm();
                  }
                }}
                error={errors.to}
                options={options}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default OrbitalModal;
