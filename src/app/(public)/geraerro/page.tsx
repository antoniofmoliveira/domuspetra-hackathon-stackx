import React from "react";

interface GeraErroPageProps {
  search: URLSearchParams;
}

function GeraErroPage({ search }: GeraErroPageProps) {
  const errorMessage = search.get("error");
  if (errorMessage) {
    throw new Error(errorMessage);
  }

  return <div>GeraErroPage</div>;
}

export default GeraErroPage;
