"use client";

import Header from "@/app/components/Header";
import Link from "next/link";
import { useEffect } from "react";
import "./globals.css";
/**
 * Renders an error page with a message and a link to the homepage.
 *
 * @param {Object} props - The props object.
 * @param {Error & { digest?: string }} props.error - The error object.
 * @param {() => void} props.reset - The reset function.
 * @return {JSX.Element} The error page component.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <div className="dark:bg-slate-700 bg-gray-50">
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
    </div>
  );
}
