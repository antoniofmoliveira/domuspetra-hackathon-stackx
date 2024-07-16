import Link from "next/link";

import { PowerIcon } from "@heroicons/react/24/outline";

import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";
import Header from "./components/header";

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
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>
      </main>
    </>
  );
}
