import Link from "next/link";
import React from "react";

const ConsultancysBlock = () => {
  return (
    <div className="card text-center text-2xl border-hidden shadow-[0px_-1px_0px_0px_rgba(0,0,0,0.1)] shadow-zinc-400 m-1">
      <h1 className={"font-extrabold text-3xl pt-2"}>Consultoria</h1>
      <p className={"text-xl p-2"}>
        Nossa consultoria é sobretudo, focada em resultados sustentáveis tendo
        como premissas a estratégia do negócio, o desenvolvimento do capital
        intelectual e o estabelecimento das melhores práticas de gestão.
      </p>
      <div className="btn btn-inverted text-2xl">
        <Link href={"/consultancy"} className="text-amber-950 font-bold">LEIA MAIS</Link>
      </div>
    </div>
  );
};

export default ConsultancysBlock;
