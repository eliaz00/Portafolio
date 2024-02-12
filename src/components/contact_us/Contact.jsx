import React, { useRef } from "react";
import "../contact_us/Contact.css";
import { useForm } from "./useForm";

export function Contact() {
  const initialData = {
    name: "",
    email: "",
    message: "",
  };

  const onValidate = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexMessage = /^.{1,255}$/;

    if (!form.name.trim()) {
      errors.name = "it cant be empty";
    } else if (!regexName.test(form.name)) {
      errors.name = "Only accepts letters and spaces";
    }
    if (!form.email.trim()) {
      errors.email = "it cant be empty";
    } else if (!regexEmail.test(form.email)) {
      errors.email = "Only accepts valid email";
    }
    if (!form.message.trim()) {
      errors.message = "it cant be empty";
    } else if (!regexMessage.test(form.message)) {
      errors.message = "only accepts 255 characters";
    }

    return errors;
  };

  const { form, errors, loanding, refForm, handleChange, handleSubmit } =
    useForm(initialData, onValidate);

  return (
    <section className="container mx-auto" id="contact">
      <h2
        id="contact-title"
        className="text-center text-white text-6xl pt-20 drop-shadow-2xl"
      >
        Contact me
      </h2>
      <div className="flex justify-center">
        <form
          ref={refForm}
          className="flex flex-col gap-4 lg:w-6/12 md:w-6/12 sm:w-9/12 w-11/12 lg:p-10 md:p-10 sm:p-10 p-0"
          action=""
          onSubmit={handleSubmit}
        >
          <label className="text-white font-bold" htmlFor="name">
            Name
          </label>
          <input
            className="rounded-full h-9 border-2 border-blue-400 p-3 font-bold shadow-2xl"
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            value={form.name}
            onChange={handleChange}
            required
          />
          {errors.name && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Error </strong>
              <span className="block sm:inline">{errors.name}</span>
            </div>
          )}

          <label className="text-white font-bold" htmlFor="email">
            Email
          </label>
          <input
            className="rounded-full h-9 border-2 border-blue-400 p-3 font-bold shadow-2xl"
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            value={form.email}
            onChange={handleChange}
            required
          />

          {errors.email && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Error </strong>
              <span className="block sm:inline">{errors.email}.</span>
            </div>
          )}

          <label className="text-white font-bold" htmlFor="info">
            Information
          </label>
          <textarea
            className="rounded-lg border-2 border-blue-400 p-3 font-bold shadow-2xl resize-none"
            name="message"
            id="info"
            cols="30"
            rows="10"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          {errors.message && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Error </strong>
              <span className="block sm:inline">{errors.message}.</span>
            </div>
          )}

          {/* <input
            id="button-contact"
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-2/5 cursor-pointer shadow-2xl"
            disabled={loanding}
            type="submit"
            value="Send"
          /> */}
          <button
            id="button-contact"
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-2/5 cursor-pointer shadow-2xl"
            type="submit"
            value="Send"
            disabled={loanding}
          >
            {loanding ? "Sending ..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
}
