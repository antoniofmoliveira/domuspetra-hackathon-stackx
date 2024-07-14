import { lusitana } from "@/app/components/fonts";
import Image from "next/image";

export default function DomusPetraLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image
        src="/images/logo.png"
        alt="Logo Domus Petra"
        width={550}
        height={100}
      />
    </div>
  );
}
