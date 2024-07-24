import Image from "next/image";
import React from "react";
/**
 * ImagemOliveiras component.
 *
 * This component displays an image of olive trees.
 *
 * @returns {JSX.Element} The rendered component.
 */
function ImagemOliveiras(): JSX.Element {
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
