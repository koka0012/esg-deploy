"use client";

import { Form, Formik, FormikHelpers } from "formik";
import { useState } from "react";

interface FormValues {
  map: string;
}

interface Option {
  label: string;
  value: string;
  image: string;
}

const Search = () => {
  const options: Option[] = [
    {
      label: "Umidade do Solo",
      value: "umidade_solo",
      image: "Images/map_umidade.png",
    },
    {
      label: "Biomassa",
      value: "biomasaa",
      image: "Images/map_biomassa.png",
    },
    {
      label: "Seca",
      value: "seca",
      image: "Images/map_seca.png",
    },
    {
      label: "Chuva",
      value: "chuva",
      image: "Images/map_chuva.png",
    },
    {
      label: "Fluxo de CO2",
      value: "fluxo_co2",
      image: "Images/map_fluxo_co2.png",
    },
  ];

  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const initialValues: FormValues = {
    map: "",
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
    <div className="w-1/4 relative">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, handleChange, errors }) => (
          <Form>
            <button
              type="button"
              className="w-full bg-[#2f3549] text-sm text-white p-2 rounded-md flex justify-between items-center"
              onClick={toggleDropdown}
            >
              <div>{selectedOption.label}</div>

              <img
                src={selectedOption.image}
                alt={selectedOption.label}
                width={75}
                className="rounded-md"
              />
            </button>

            {isDropdownOpen && (
              <ul className="w-full bg-[#2f3549] text-sm p-2 rounded-md flex flex-col gap-2 absolute top-[4rem] right-0 transition-all duration-150 z-10">
                {options.map((option, index) => (
                  <li
                    key={index}
                    className="hover:bg-[#3c435a] rounded-md cursor-pointer flex justify-between items-center transition-all duration-150"
                    onClick={() => handleOptionClick(option)}
                  >
                    <div className="truncate">{option.label}</div>

                    <img
                      src={option.image}
                      alt={option.label}
                      width={75}
                      className="rounded-md"
                    />
                  </li>
                ))}
              </ul>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Search;
