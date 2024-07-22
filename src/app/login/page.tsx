import { DomusPetraLogoSmall } from "@/app/components/domus-petra-logo";
import LoginForm from "@/app/components/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen ">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32 shadow-2xl border-hidden shadow-zinc-400 mt-6 mb-6  hover:shadow-blue-400 rounded-xl">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className=" text-white ">
            <DomusPetraLogoSmall />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
