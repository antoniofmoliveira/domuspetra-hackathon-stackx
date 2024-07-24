import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header";
/**
 * The public layout for the site.
 *
 * This layout is used for pages that are accessible to the public.
 *
 * @component
 * @param {Object} props - The properties of the component.
 * @param {React.ReactNode} props.children - The child components.
 * @return {JSX.Element} The rendered component.
 */
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Domus Petra",
  description: "Consultoria e treinamento",
};

/**
 * The public layout for the site.
 *
 * This layout is used for pages that are accessible to the public.
 *
 * @component
 * @param {Object} props - The properties of the component.
 * @param {React.ReactNode} props.children - The child components.
 * @return {JSX.Element} The rendered component.
 */
export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  /**
   * Renders the public layout.
   *
   * @return {JSX.Element} The rendered public layout.
   */
  return (
    <>
      {/* Render the header */}
      <Header />
      {/* Render the children components */}
      <div>{children}</div>
    </>
  );
}
