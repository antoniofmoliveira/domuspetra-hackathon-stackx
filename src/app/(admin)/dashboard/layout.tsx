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
      <p>Cabeçalho Administração</p>
      <div className={inter.className}>{children}</div>
      <p>Rodapé Administração</p>
    </>
  );
}
