import ImagemOliveiras from "@/app/components/ImagemOliveiras";
import React from "react";

function AboutDev() {
  return (
    <div className="m-auto p-4">
      <p>&copy;julho/2024</p>
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
        Video Editor:&nbsp;
        <a href={"https://www.flexclip.com/"}>FlexClip/</a>
      </p>
      <br></br>
      <p>Fonts</p>
      <ul>
        <li>Google Fonts</li>
        <li>
          Font Awesome{" "}
          <a href={"https://fontawesome.com/"}>https://fontawesome.com/</a>
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
        "react-youtube": "^10.1.0",
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
