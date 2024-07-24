import React from "react";

function GeraErroPage() {
  throw new Error("Teste de erro");

  return <div>GeraErroPage</div>;
}

export default GeraErroPage;
