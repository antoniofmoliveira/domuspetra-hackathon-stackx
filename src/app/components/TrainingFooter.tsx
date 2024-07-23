import React from "react";

const TrainingFooter = ({ title }: { title: string }): JSX.Element => {
  const mailto = `mailto:contato@domuspetra.com.br?subject=${title}&body=Gostaria de receber mais informações sobre o treinamento ${title}`;
  const contact_us = `/contact/?subject=treinamento ${title}`;
  return (
    <div className="trainingFooter">
      <p>
        Para consulta de treinamento in company ou reservas para os próximos
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

export default TrainingFooter;
