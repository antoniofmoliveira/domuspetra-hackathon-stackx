import Link from "next/link";
import React from "react";

const TrainingsBlock = () => {
  return (
    <div className="text-center text-2xl border-hidden shadow-[0px_-1px_0px_0px_rgba(0,0,0,0.1)] shadow-zinc-400 m-1 p-1">
      <h1 className={"font-extrabold text-3xl pt-2"}>Treinamentos</h1>
      <p className={"text-xl p-2"}>
        Os treinamentos visam capacitar os participantes de maneira plena e
        eficiente, utilizando técnicas e metodologias inovadoras como Design
        Thinking e Andragogia, levando à reflexão, experimentação e o aprender
        fazendo com foco no desenvolvimento profissional e comportamental frente
        as constantes mudanças de cenário.
      </p>
      <p className={"text-xl p-2"}>
        Para tornar o aprendizado mais consistente e assertivo, os treinamentos
        são estabelecidos mediante o diagnóstico das necessidades de cada
        cliente, com verificação de eficácia.
      </p>
      <p className={"text-xl p-2"}>
        Os principais resultados são o incremento da eficiência e produtividade,
        redução de custos operacionais, aumento dos níveis de qualidade com
        melhoria dos processos e a promoção da felicidade no trabalho.
      </p>
      <div className="btn btn-inverted  ">
        <Link href={"/training"} className="items-center justify-center rounded-full text-white-950 font-bold bg-blue-600 p-2 pr-5 pl-5  m-auto shadow shadow-black" ><i className="fa-solid fa-share"></i> LEIA MAIS</Link>
      </div>
    </div>
  );
};

export default TrainingsBlock;
