import { Select } from "@/app/components";
import { Form, Formik, FormikHelpers } from "formik";

interface FormValues {
  year: string;
}

const OrbitalModal = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 2013 },
    (_, i) => 2014 + i
  ).map((year) => ({
    label: year.toString(),
    value: year.toString(),
  }));

  const initialValues: FormValues = {
    year: `${currentYear}`,
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
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, errors, handleChange }) => (
        <Form>
          <Select
            name="year"
            value={values.year}
            handleChange={handleChange}
            error={errors.year}
            options={years}
          />
        </Form>
      )}
    </Formik>
  );
};

export default OrbitalModal;
