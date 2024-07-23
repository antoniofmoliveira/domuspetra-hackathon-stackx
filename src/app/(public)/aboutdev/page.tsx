import ImagemOliveiras from "@/app/components/ImagemOliveiras";
import React from "react";

function AboutDev() {
  return (
    <div className="m-auto p-4">
      <p className="m-auto p-4">
        <em>Justificativa:</em>
      </p>
      <p className="m-auto p-4">
        A necessidade de entregar o site publicado no prazo de 2 semanas com
        controle de conteúdo tornou fácil a decisão de escolher o NextJs como
        framework de desenvolvimento. A hospedagem oferecida pela Vercel
        juntamento com o Postgres tornou-se uma escolha razoavelmente boa.
      </p>
      <p className="m-auto p-4">
        E ainda pudemos utilizar o armazenamento de blobs da Vercel tornando
        desnecessário o uso de outros sites para hospedar imagens.
      </p>
      <p className="m-auto p-4">
        Também avaliamos que o site será operado por, provavelmente, apenas uma
        ou duas pessoas.
      </p>
      <p className="m-auto p-2 pl-4">Restrições Atuais</p>
      <ul className="m-auto p-4">
        <li className="m-auto p-1 pl-6 list-disc">
          há limite de acessos no site por causa da conta limitada (hobby)
        </li>
        <li className="m-auto p-1 pl-6 list-disc">
          há limite no banco de dados por causa da conta limitada (hobby)
        </li>
        <li className="m-auto p-1 pl-6 list-disc">
          envio de email somente para o endereço antoniofmoliveira@outlook.com
          por causa da conta limitada e questão de segurança
        </li>
        <li className="m-auto p-1 pl-6 list-disc">
          no máximo 100 emails por dia
        </li>
        <li className="m-auto p-1 pl-6 list-disc">
          desabilitada a deleção de usuário por segurança (muitas pessoas
          poderão entrar na área de admnistração para avaliar)
        </li>
        <li className="m-auto p-1 pl-6 list-disc">
          desabilitada a alteração de senha por segurança (muitas pessoas
          poderão entrar na área de admnistração para avaliar)
        </li>
        <li className="m-auto p-1 pl-6 list-disc">
          desabilitada a deleção de artigo por segurança (muitas pessoas poderão
          entrar na área de admnistração para avaliar)
        </li>
        <li className="m-auto p-1 pl-6 list-disc">
          autenticação limitada a email e senha locais. Oauth pode ser
          implementada depois para Google ou Github
        </li>
        <li className="m-auto p-1 pl-6 list-disc">
          a área de administração isolada completamente do resto do site. Só é
          possivel ir para o resto do site se fizer logout.
        </li>
      </ul>

      <p>A equipe Oliveiras é formada por:</p>
      <ImagemOliveiras />
      <br></br>
      <p>IDE: Visual Studio Code</p>
      <p>
        Hospedagem e banco de dados:&nbsp;
        <a href={"http://vercel.com"}>Vercel</a> e Postgres
      </p>
      <p>
        Controle de versão: Git e <a href={"http://github.com"}>GitHub</a>{" "}
      </p>
      <p>Google reCaptcha v3 label: DomusPetraHackaton</p>
      <p>
        Envio de emails: <a href="http://resend.com">Resend</a>
      </p>
      <p>
        Video Editor:&nbsp;
        <a href={"https://www.flexclip.com/"}>FlexClip</a>
      </p>
      <br></br>
      <p>Fonts</p>
      <ul>
        <li>Google Fonts</li>
        <li>
          Font Awesome{" "}
          <a href={"https://fontawesome.com"}>https://fontawesome.com</a>
        </li>
        <li>
          Fontspace{" "}
          <a href={"https://www.fontspace.com/category/stone"}>
            ROCK-ON Demo by studiotypo 1
          </a>
        </li>
      </ul>
      <br></br>
      <p>Bibliotecas npm</p>
      <pre>
        {`
        "dependencies": {
        "@heroicons/react": "^2.1.5",
        "@types/bcrypt": "^5.0.2",
        "@vercel/blob": "^0.23.4",
        "@vercel/postgres": "^0.9.0",
        "bcrypt": "^5.1.1",
        "clsx": "^2.1.1",
        "heroicons": "^2.1.5",
        "next": "14.2.5",
        "next-auth": "5.0.0-beta.19",
        "react": "^18.3.1",
        "react-dom": "^18.3.1",
        "react-google-recaptcha-v3": "^1.10.1",
        "react-youtube": "^10.1.0",
        "resend": "^3.5.0",
        "showdown": "^2.1.0",
        "zod": "^3.23.8"
        },
      "devDependencies": {
        "@types/node": "^20.14.11",
        "@types/react": "^18.3.3",
        "@types/react-dom": "^18.3.0",
        "@types/showdown": "^2.0.6",
        "eslint": "^8.57.0",
        "eslint-config-next": "14.2.5",
        "postcss": "^8.4.39",
        "tailwindcss": "^3.4.6",
        "typescript": "^5.5.3"
        }`}
      </pre>
    </div>
  );
}

export default AboutDev;
