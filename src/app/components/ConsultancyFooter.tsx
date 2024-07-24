import React from "react";
import ContactSection from "./ContactSection";

const ConsultancyFooter = ({ title }: { title: string }): JSX.Element => {
  const mailto = `mailto:contato@domuspetra.com.br?subject=${title}&body=Gostaria de receber mais informações sobre a consultoria ${title}`;
  const contact_us = `/contact/?subject=consultoria ${title}`;
  return (
    <ContactSection title={`Consultoria: ${title}`} />
    // <div className="consultancyFooter">
    //   <p>
    //     Para Consultoria entre em contato pelo telefone:{" "}
    //     <a className={"text-blue-500 underline"} href="tel:+554738047774">
    //       +55 (47) 38047774
    //     </a>{" "}
    //     <a className={"text-blue-500 underline"} href="tel:+5547997071177">
    //       +55 (47) 997071177
    //     </a>
    //   </p>
    //   <p>
    //     Ou ainda, envie um e-mail para:{" "}
    //     <a className={"text-blue-500 underline"} href={mailto}>
    //       contato@domuspetra.com.br
    //     </a>
    //   </p>
    //   <p>
    //     <a className={"text-blue-500 underline"} href={contact_us}>
    //       Clique aqui!
    //     </a>{" "}
    //     (Preencha o formuário que entraremos em contato!)
    //   </p>
    // </div>
  );
};

export default ConsultancyFooter;
