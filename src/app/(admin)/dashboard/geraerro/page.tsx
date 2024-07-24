import React from "react";

interface GeraErroPageDProps {
  search: URLSearchParams;
}

function GeraErroDPage({ search }: GeraErroPageDProps) {
  const errorMessage = search.get("error");
  if (errorMessage) {
    throw new Error(errorMessage);
  }

  return <div>GeraErroDPage</div>;
}

export default GeraErroDPage;
