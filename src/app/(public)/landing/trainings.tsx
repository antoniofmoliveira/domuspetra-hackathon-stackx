import Link from "next/link";
import React from "react";

const TrainingsBlock = () => {
  return (
    <div className="card text-center text-2xl border-2 border-slate-700 rounded-md  m-1">
      <h1 className={"font-extrabold text-2xl"}>Treinamentos</h1>
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
      <div className="btn btn-inverted">
        <Link href={"/training"}>LEIA MAIS</Link>
      </div>
    </div>
  );
};

export default TrainingsBlock;
