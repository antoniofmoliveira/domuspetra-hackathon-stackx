import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import AcmeLogo from "@/app/components/domus-petra-logo";
import { PowerIcon } from "@heroicons/react/24/outline";
import { signOut } from "@/auth";
import Par from "../../components/par";
import AdminHeader from "@/app/components/adminheader";
import Footer from "@/app/components/footer";

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
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
      <AdminHeader />
      <main className="p-2">
        <div className={inter.className}>{children}</div>
      </main>
    </>
  );
}
