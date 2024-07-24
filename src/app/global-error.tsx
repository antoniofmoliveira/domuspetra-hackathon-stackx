"use client";

import Link from "next/link";
import Header from "./components/Header";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between p-2 w-[95%]">
          <div className="z-10 w-[95%] max-w-5xl items-center justify-between font-mono text-sm  flex flex-col">
            <h2 className="dark:text-white text-black text-3xl p-10">
              Sentimos muito
            </h2>
            <h2 className="dark:text-white text-black text-3xl p-10">
              Estamos experimentando instabilidades no site.
            </h2>
            <Link href="/" className="dark:text-white text-black text-xl p-10">
              Volte à pagina principal clicando aqui
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
