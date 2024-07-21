import React from "react";
import "./contact-form.css";

function ContactCard() {
  return (
    <div className="contact-data">
      <div className="contact-data-text dark:bg-black bg-white">
        <h1>Endereço</h1>
        <p>Rua Tangará, 470 - Bairro Iririú Joinville - SC CEP: 89227-100</p>
        <h1>WhatsApp</h1>
        <p>+55 47 997071177</p>
        <h1>E-mail</h1>
        <p>contato@domuspetra.com.br</p>
      </div>
    </div>
  );
}

export default ContactCard;
