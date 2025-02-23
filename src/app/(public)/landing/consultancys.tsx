import Link from "next/link";
import React from "react";

/**
 * ConsultancysBlock component
 *
 * This component represents the "Consultorias" section of the landing page.
 * It displays a rounded bordered div with a shadow. The div contains a title,
 * some text, and a button that links to the "/consultancy" page.
 *
 * @returns {JSX.Element} The rendered component.
 */
const ConsultancysBlock = () => {
  return (
    <div className="rounded-3xl border-2 border-stone-700 text-center shadow-lg border-hidden shadow-zinc-400 mt-6 mb-6  hover:shadow-blue-200">
      <h1 className={"font-bold text-xl pt-2"}>Consultorias</h1>
      <p className={"text-base p-2"}>
        Nossa consultoria é sobretudo, focada em resultados sustentáveis tendo
        como premissas a estratégia do negócio, o desenvolvimento do capital
        intelectual e o estabelecimento das melhores práticas de gestão.
      </p>
      <div className="btn btn-inverted">
        <Link
          href={"/consultancy"}
          className="items-center justify-center rounded-full text-white-950 font-bold bg-blue-600 p-2 pr-5 pl-5  m-auto shadow shadow-black"
        >
          <i className="fa-solid fa-share"></i> LEIA MAIS
        </Link>
      </div>
    </div>
  );
};

export default ConsultancysBlock;
