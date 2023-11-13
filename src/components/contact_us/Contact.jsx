import React, { useRef } from "react";
import "../contact_us/Contact.css";
import EmailJs from "@emailjs/browser";

export function Contact() {
  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = "service_rjew388";
    const templateId = "template_1ng8z5j";

    const apiKey = "Z_8BEPDFTXh5rcsA3";

    EmailJs.sendForm(serviceId, templateId, refForm.current, apiKey).then(
      (result) => console.log(result.text)
    );
    refForm.current.reset().catch((error) => console.error(error));
  };

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
          className="flex flex-col gap-4 lg:w-6/12 md:w-6/12 sm:w-9/12 w-11/12 p-10"
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
          />
          <label className="text-white font-bold" htmlFor="email">
            Email
          </label>
          <input
            className="rounded-full h-9 border-2 border-blue-400 p-3 font-bold shadow-2xl"
            type="email"
            name="email"
            id="lastname"
            autoComplete="off"
          />
          <label className="text-white font-bold" htmlFor="info">
            Information
          </label>
          <textarea
            className="rounded-lg border-2 border-blue-400 p-3 font-bold shadow-2xl resize-none"
            name="message"
            id="info"
            cols="30"
            rows="10"
          ></textarea>

          <input
            id="button-contact"
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-2/5 cursor-pointer shadow-2xl"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </section>
  );
}
