import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Domus Petra",
  description: "Consultoria e treinamento",
};

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p>Cabeçalho Público</p>

          <div className={inter.className}>{children}</div>
          <p>Rodapé Público</p>
        </div>
      </main>
    </>
  );
}
