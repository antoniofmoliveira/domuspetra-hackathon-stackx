"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html className="dark:bg-slate-950 bg-gray-50">
      <body>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between p-2 w-[95%]">
          <div className="z-10 w-[95%] max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <h2>Alguma coisa não funcionou direito!</h2>
            <button onClick={() => reset()}>Tente novamente</button>
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
