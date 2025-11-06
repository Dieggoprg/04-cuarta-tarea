import { useState } from "react";

export const useForm = (initialValue) => {
  const [form, setForm] = useState(initialValue);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleReset = () => {
    setForm(initialValue);
  };
  return { form, handleChange, handleReset };
};
