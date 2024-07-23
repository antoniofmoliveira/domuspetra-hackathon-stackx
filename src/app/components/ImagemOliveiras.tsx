import Image from "next/image";
import React from "react";

function ImagemOliveiras() {
  return (
    <div>
      <Image
        src="/images/oliveiras.jpg"
        width={250}
        height={250}
        alt="alt"
        className="w-[250px]"
      />
    </div>
  );
}

export default ImagemOliveiras;
