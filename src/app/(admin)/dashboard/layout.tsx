import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AdminHeader from "@/app/components/AdminHeader";
/**
 * The layout for the admin dashboard page.
 *
 * This layout is used for pages that are accessible only to the admin.
 *
 * @component
 * @param {Object} props - The properties of the component.
 * @param {React.ReactNode} props.children - The child components.
 * @return {JSX.Element} The rendered component.
 */
const inter = Inter({ subsets: ["latin"] });
/**
 * The metadata for the admin dashboard page.
 *
 * This metadata is used for the head tag of the admin dashboard page.
 *
 * @type {Metadata}
 * @property {string} title - The title of the page
 * @property {string} description - The description of the page
 */
export const metadata: Metadata = {
  title: "Administração",
  description: "Parte do site destinada à administração do site",
};

/**
 * The layout for the admin dashboard page.
 *
 * This layout is used for pages that are accessible only to the admin.
 *
 * @component
 * @param {Object} props - The properties of the component.
 * @param {React.ReactNode} props.children - The child components.
 * @return {JSX.Element} The rendered component.
 */
export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <>
      <AdminHeader />
      <main className="p-2">
        <div className={inter.className}>{children}</div>
      </main>
    </>
  );
}
