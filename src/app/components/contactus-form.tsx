"use client";
import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import "./contact-form.css";
import { ContactObj } from "@/model/definitions";
import ContactCard from "./contact-card";

interface PageProps {
  subject?: string;
}

const ContactUsForm = ({ subject = "" }: PageProps) => {
  const [contact, setContact] = useState(new ContactObj(subject));
  const [resposta, setResposta] = useState("");

  const onChangeTextareaHandle: ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    const value = event.target.value;
    const element = event.target.id;
    setContact((prevState) => ({ ...prevState, message: value }));
  };

  const onChangeInputHandle: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    const element = event.target.id;
    switch (element) {
      case "contact_name":
        setContact((prevState) => ({ ...prevState, name: value }));
        break;
      case "contact_email":
        setContact((prevState) => ({ ...prevState, email: value }));
        break;
      case "contact_telephone":
        setContact((prevState) => ({ ...prevState, tel: value }));
        break;
      default:
        break;
    }
  };
  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const response = await fetch(`/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    }).then(() => setResposta("Mensagem recebida. Aguarde contato."));
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <div className="contact-form-text">
          <h2>Fale conosco</h2>
          <p>
            Se você tem alguma dúvida, sugestão ou quer saber mais sobre nós,
            entre em contato.
          </p>
        </div>
        <form
          id="contact-form-id"
          className="contact-form-class"
          method="post"
          onSubmit={onSubmit}
        >
          <input
            type="text"
            id="contact_name"
            name="contact_name"
            className="contact-form-name"
            placeholder="Seu nome"
            required
            onChange={onChangeInputHandle}
            value={contact.name}
          />
          <div className="contact-form-data">
            <input
              type="email"
              id="contact_email"
              name="contact_email"
              className="contact-form-email"
              placeholder="Seu email"
              required
              onChange={onChangeInputHandle}
              value={contact.email}
            />
            <input
              type="tel"
              id="contact_telephone"
              name="contact_telephone"
              className="contact-form-telephone"
              placeholder="Seu telefone"
              onChange={onChangeInputHandle}
              value={contact.tel}
            />
          </div>
          <textarea
            id="contact_message"
            name="contact_message"
            className="contact-form-message"
            placeholder="Sua mensagem"
            rows={5}
            cols={30}
            onChange={onChangeTextareaHandle}
            value={contact.message}
          ></textarea>
          <button
            type="submit"
            id="contact-form-btn"
            className="contact-form-btn"
          >
            <i className="fa-solid fa-share"></i> ENVIAR MENSAGEM
          </button>
        </form>
        <p>{resposta}</p>
      </div>
      <ContactCard />
    </div>
  );
};

export default ContactUsForm;
