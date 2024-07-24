import React from "react";
import "./contact-form.css";
/**
 * ContactCard component
 *
 * This component displays the contact data of the company (address, phone and
 * whatsapp) in a card.
 *
 * @returns {JSX.Element} The rendered component.
 */
function ContactCard() {
  return (
    <div className="contact-data">
      <div className="contact-data-text dark:bg-black bg-white">
        <h1>Endereço</h1>
        <p>Rua Tangará, 470 - Bairro Iririú Joinville - SC CEP: 89227-100</p>
        <h1>WhatsApp</h1>
        <p>
          <a href="tel:+55 47 997071177">
            <i className="fab fa-whatsapp"></i>&nbsp; +55 47 997071177
          </a>
        </p>
        <h1>E-mail</h1>
        <p>
          <a href="mailto:contato@domuspetra.com.br">
            <i className="fa fa-envelope"></i>&nbsp; contato@domuspetra.com.br
          </a>
        </p>
      </div>
    </div>
  );
}

export default ContactCard;
