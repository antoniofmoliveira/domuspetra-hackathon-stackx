import Link from "next/link";
import React from "react";

const TrainingsBlock = () => {
  return (
    <div className="rounded-3xl border-2 border-stone-700 text-center shadow-2xl border-hidden shadow-zinc-400  mt-6 mb-6 hover:shadow-blue-400">
      <h1 className={"font-bold text-xl pt-2"}>Treinamentos</h1>
      <p className={"text-base p-2"}>
        Os treinamentos visam capacitar os participantes de maneira plena e
        eficiente, utilizando técnicas e metodologias inovadoras como Design
        Thinking e Andragogia, levando à reflexão, experimentação e o aprender
        fazendo com foco no desenvolvimento profissional e comportamental frente
        as constantes mudanças de cenário.
      </p>
      <p className={"text-base p-2"}>
        Para tornar o aprendizado mais consistente e assertivo, os treinamentos
        são estabelecidos mediante o diagnóstico das necessidades de cada
        cliente, com verificação de eficácia.
      </p>
      <p className={"text-base p-2"}>
        Os principais resultados são o incremento da eficiência e produtividade,
        redução de custos operacionais, aumento dos níveis de qualidade com
        melhoria dos processos e a promoção da felicidade no trabalho.
      </p>
      <div className="btn btn-inverted  ">
        <Link
          href={"/training"}
          className="items-center justify-center rounded-full text-white-950 font-bold bg-blue-600 p-2 pr-5 pl-5  m-auto shadow shadow-black"
        >
          <i className="fa-solid fa-share"></i> LEIA MAIS
        </Link>
      </div>
    </div>
  );
};

export default TrainingsBlock;
