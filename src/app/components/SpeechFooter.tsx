import React from "react";

const SpeechFooter = ({ title }: { title: string }): JSX.Element => {
  const mailto = `mailto:contato@domuspetra.com.br?subject=${title}&body=Gostaria de receber mais informações sobre a palestra ${title}`;
  const contact_us = `/contact/?subject=palestra ${title}`;
  return (
    <div className="speechFooter">
      <p>
        Para consulta de palestra in company ou reservas para os próximos
        eventos, entre em contato pelo telefone:{" "}
        <a className={"text-blue-500 underline"} href="tel:+554738047774">
          +55 (47) 38047774
        </a>{" "}
        <a className={"text-blue-500 underline"} href="tel:+5547997071177">
          +55 (47) 997071177
        </a>
      </p>
      <p>
        Ou ainda, envie um e-mail para:{" "}
        <a className={"text-blue-500 underline"} href={mailto}>
          contato@domuspetra.com.br
        </a>
      </p>
      <p>
        <a className={"text-blue-500 underline"} href={contact_us}>
          Clique aqui!
        </a>{" "}
        (Preencha o formuário que entraremos em contato!)
      </p>
    </div>
  );
};

export default SpeechFooter;
