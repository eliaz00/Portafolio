import React, { useRef } from "react";
import EmailJs from "@emailjs/browser";
import { useState } from "react";

export const useForm = (initialData, onValidate) => {
  const [form, setForm] = useState(initialData);
  const [loanding, setLoanding] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    setLoanding(true);

    const err = onValidate(form);
    setErrors(err);

    setTimeout(() => {

      if (Object.keys(err).length === 0) {
        const serviceId = "service_rjew388";
        const templateId = "template_1ng8z5j";

        const apiKey = "Z_8BEPDFTXh5rcsA3";

        EmailJs.sendForm(serviceId, templateId, refForm.current, apiKey).then(
          (result) => console.log(result.text)
        );

        setForm(initialData);
        setLoanding(false);
      }
    }, 1000);
  };

  return { form, errors, loanding, refForm, handleChange, handleSubmit };
};
