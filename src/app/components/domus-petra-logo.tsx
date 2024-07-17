import { lusitana } from "@/app/components/fonts";
import Image from "next/image";
import { useRef } from "react";

export default function DomusPetraLogo() {
  //   const ref = useRef<HTMLDivElement>(null);
  //   let src = "/images/logos/domuspetralogo1w.png";
  //   console.log(ref.current?.style.backgroundColor);
  return (
    <div
      //   ref={ref}
      className="flex flex-row items-center leading-none dark:bg-black background-color=rgb(214, 219, 220) "
    >
      <picture>
        <source
          srcSet="/images/logos/domuspetralogo1w.png"
          media="(prefers-color-scheme: dark)"
        />
        <source
          srcSet="/images/logos/domuspetralogo1b.png"
          media="(prefers-color-scheme: light)"
        />
        <img src="/images/logos/domuspetralogo1b.png" alt="Logo Domus Petra" />
      </picture>
      {/* <Image src={src} alt="Logo Domus Petra" width={550} height={100} /> */}
    </div>
  );
}
