import { lusitana } from "@/app/components/fonts";
import Image from "next/image";

export default function DomusPetraLogo() {
  return (
    <div className={`flex flex-row items-center leading-none`}>
      <Image
        src="/images/domuspetralogo1.png"
        alt="Logo Domus Petra"
        width={550}
        height={100}
      />
    </div>
  );
}
