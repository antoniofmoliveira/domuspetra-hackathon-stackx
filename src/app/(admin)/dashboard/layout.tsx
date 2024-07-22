import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AdminHeader from "@/app/components/AdminHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Administração",
  description: "Parte do site destinada à administração do site",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AdminHeader />
      <main className="p-2">
        <div className={inter.className}>{children}</div>
      </main>
    </>
  );
}
