"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html className="dark:bg-slate-700 bg-gray-50">
      <body>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between p-2 w-[95%]">
          <div className="z-10 w-[95%] max-w-5xl items-center justify-between font-mono text-sm flex flex-col">
            <h2 className="dark:text-white text-black text-3xl p-10">
              Esta página não existe.
            </h2>
            <Link href="/" className="dark:text-white text-black text-xl p-10">
              Verifique o endereço ou volte à pagina principal clicando aqui
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
