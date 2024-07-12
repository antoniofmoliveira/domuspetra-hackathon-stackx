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
      <p>Cabeçalho Público</p>
      <div className={inter.className}>{children}</div>
      <p>Rodapé Público</p>
    </>
  );
}
