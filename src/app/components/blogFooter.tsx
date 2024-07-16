import React from "react";

const BlogFooter = ({ title }: { title: string }): JSX.Element => {
  const mailto = `mailto:contato@domuspetra.com.br?subject=${title}&body=Gostaria de receber mais informações sobre o post ${title}`;
  const contact_us = `/contact/?subject=post ${title}`;
  return (
    <div className="speechFooter">
      <p>
        Entre em contato pelo telefone:{" "}
        <a href="tel:+554738047774">+55 (47) 38047774</a>{" "}
        <a href="tel:+5547997071177">+55 (47) 997071177</a>
      </p>
      <p>
        Ou ainda, envie um e-mail para:{" "}
        <a href={mailto}>contato@domuspetra.com.br</a>
      </p>
      <p>
        <a href={contact_us}>
          Clique aqui! (Preencha o formuário que entraremos em contato!)
        </a>
      </p>
    </div>
  );
};

export default BlogFooter;
