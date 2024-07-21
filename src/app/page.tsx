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
import LandingPage from "./(public)/landing/page";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-2">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <LandingPage />
        </div>
      </main>
    </>
  );
}
