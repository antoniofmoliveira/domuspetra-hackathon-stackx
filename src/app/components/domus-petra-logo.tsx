import { rockFont } from "@/lib/fonts";

export default function DomusPetraLogo() {
  return (
    <p
      className={`${rockFont.className} 
        text-4xl md:text-5xl lg:text-6xl
        shadow-1xl md:shadow-1xl lg:shadow-2xl
        shadow-zinc-400 hover:shadow-blue-400 
        dark:text-slate-200 text-black 
        bg-transparent`}
    >
      DOMUS&nbsp;Petra
    </p>
  );
}
