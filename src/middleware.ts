import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

/**
 * obtém a configuração padrão do app
 */
export default NextAuth(authConfig).auth;

/**
 * exclusão de paths padrão
 */
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
