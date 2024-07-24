import { rockFont } from "@/lib/localFonts";

/**
 * Component for the logo of Comus Petra
 *
 * @component
 * @return {JSX.Element} The logo component
 */
export default function DomusPetraLogo() {
  return (
    <div className="m-1 rounded-lg p-3 shadow-lg md:shadow-lg lg:shadow-lg border-hidden shadow-zinc-400 hover:shadow-blue-200">
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

/**
 * Component for the small version of the logo of Comus Petra
 *
 * @component
 * @return {JSX.Element} The small logo component
 */
export function DomusPetraLogoSmall() {
  return (
    <div className={"w-full"}>
      <p
        className={`${rockFont.className} 
          text-2xl md:text-3xl lg:text-4xl
          dark:text-slate-200 text-black 
          w-full
          bg-transparent
           rounded-lg p-3 shadow-lg md:shadow-lg lg:shadow-lg border-hidden shadow-zinc-400 hover:shadow-blue-200`}
      >
        DOMUS&nbsp;Petra
      </p>
    </div>
  );
}
