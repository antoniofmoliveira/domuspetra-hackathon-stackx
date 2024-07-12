import Link from "next/link";
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
      </div>
    </main>
  );
}
