import Link from "next/link";
import React from "react";

const ConsultancysBlock = () => {
  return (
    <div className="card text-center text-2xl border-2 border-slate-700 rounded-md m-1">
      <h1 className={"font-extrabold text-2xl"}>Consultoria</h1>
      <p className={"text-xl p-2"}>
        Nossa consultoria é sobretudo, focada em resultados sustentáveis tendo
        como premissas a estratégia do negócio, o desenvolvimento do capital
        intelectual e o estabelecimento das melhores práticas de gestão.
      </p>
      <div className="btn btn-inverted text-2xl">
        <Link href={"/consultancy"}>LEIA MAIS</Link>
      </div>
    </div>
  );
};

export default ConsultancysBlock;
