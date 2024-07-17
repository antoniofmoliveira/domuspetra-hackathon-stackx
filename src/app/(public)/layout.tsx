import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/header";

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
      <Header />
      <div>{children}</div>
    </>
  );
}

{
  /* <Par text="Sobre" target="/about" />
<Par text="Blog" target="/blog" />
<Par text="Contacte-nos" target="/contact" />
<Par text="Inicial" target="/landing" />
<Par text="Palestras" target="/speechs" />
<Par text="Treinamento" target="/training" />
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
</form> */
}
