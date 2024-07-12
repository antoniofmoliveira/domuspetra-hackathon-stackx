import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import AcmeLogo from "@/app/ui/acme-logo";
import { PowerIcon } from "@heroicons/react/24/outline";
import { signOut } from "@/auth";
import Par from "./components/par";

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
        <p>Cabeçalho Administração</p>
        <Par text="Administração" target="/dashboard" />
        <Par text="Administração Blog" target="/dashboard/blog" />
        <Par text="Administração Usuários" target="/dashboard/users" />
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <div className={inter.className}>{children}</div>
        </div>
        <p>Rodapé Administração</p>
      </main>
    </>
  );
}
