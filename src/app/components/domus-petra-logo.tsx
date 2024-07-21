import { rockFont } from "@/lib/fonts";

export default function DomusPetraLogo() {
  return (
    <div className="m-1 rounded-lg p-3 shadow-xl md:shadow-xl lg:shadow-xl border-hidden shadow-zinc-400 hover:shadow-blue-400">
      <p
        className={`${rockFont.className} 
        text-4xl md:text-5xl lg:text-6xl
        dark:text-slate-200 text-black 
        bg-transparent`}
      >
        DOMUS&nbsp;Petra
      </p>
    </div>
  );
}
