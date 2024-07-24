import { Inter, Lusitana } from "next/font/google";
/**
 * @packageDocumentation
 *
 * Provides fonts that are used in the application.
 *
 * @module
 * @example
 * import { inter, lusitana } from "./Fonts";
 */
export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});
