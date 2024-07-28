"use client";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  useCallback,
  useState,
} from "react";
import "./contact-form.css";
import { ContactObj } from "@/model/definitions";
import ContactCard from "./ContactCard";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

interface PageProps {
  subject?: string;
}

/**
 * ContactUsForm component
 *
 * @param {PageProps} props - Component props
 * @param {string} [props.subject=""] - The subject of the contact form
 * @returns {JSX.Element} - The rendered ContactUsForm component
 */
const ContactUsForm = ({ subject = "" }: PageProps) => {
  const [contact, setContact] = useState(new ContactObj(subject));
  const [resposta, setResposta] = useState("");
  const { executeRecaptcha } = useGoogleReCaptcha();

  /**
   * Handles the change event of an input or textarea element and updates the contact state
   * based on the element's id.
   *
   * @param {ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} event - The change event object.
   * @return {void}
   */
  const onChangeInputHandle: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
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
      case "contact_message":
        setContact((prevState) => ({ ...prevState, message: value }));
        break;
      default:
        break;
    }
  };

  /**
   * Submits the contact form to the server.
   *
   * @param {string} gReCaptchaToken - The Google reCAPTCHA token.
   * @returns {Promise<void>} - A promise that resolves when the contact form is submitted.
   */
  const submitForm = useCallback(
    async (gReCaptchaToken: string) => {
      const response = await fetch(`/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...contact, gRecaptchaToken: gReCaptchaToken }),
      }).then(() => setResposta("Mensagem recebida. Aguarde contato."));
      console.info(response);
    },
    [contact]
  );

  /**
   * Handles the submission of the contact form.
   *
   * @param {Event} e - The form submission event.
   * @return {void} No return value.
   */
  const handleSumitForm = useCallback(
    (e: { preventDefault: () => void }) => {
      e.preventDefault();

      if (!executeRecaptcha) {
        console.info("Execute ReCaptcha ainda não disponível");
        return;
      }
      executeRecaptcha("contactUsFormSubmit").then((gReCaptchaToken) => {
        console.info(gReCaptchaToken);

        submitForm(gReCaptchaToken);
      });
    },
    [executeRecaptcha, submitForm] //, contact]
  );

  return (
    <>
      <div className="contact-container shadow-lg border-hidden shadow-zinc-400 hover:shadow-blue-200 rounded-2xl">
        <div className="contact-form ">
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
            onSubmit={handleSumitForm}
          >
            <input
              type="text"
              id="contact_name"
              name="contact_name"
              className="contact-form-name"
              placeholder="Seu nome (mínimo 6 caracteres)"
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
                placeholder="seuemail@example.com"
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
              placeholder="Sua mensagem (mínimo 10 caracteres)"
              rows={5}
              cols={30}
              onChange={onChangeInputHandle}
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
    </>
  );
};

export default ContactUsForm;
