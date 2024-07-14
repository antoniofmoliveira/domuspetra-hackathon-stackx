import Link from "next/link";

import { PowerIcon } from "@heroicons/react/24/outline";
import { signOut } from "@/auth";

import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";

const Par = ({ text, target }: { text: string; target: string }) => {
  return (
    <>
      <p>
        <Link href={target}>{text}</Link>
      </p>
    </>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Par text="Sobre" target="/about" />
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
        </form>
      </div>
    </main>
  );
}
