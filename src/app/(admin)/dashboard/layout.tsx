import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Administração",
  description: "Parte do site destinada `a administração",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p>Cabeçalho Administração</p>
          <div className={inter.className}>{children}</div>
          <p>Rodapé Administração</p>
        </div>
      </main>
    </>
  );
}
