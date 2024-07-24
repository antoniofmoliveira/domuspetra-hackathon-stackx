import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

/**
 * Middleware para autenticação
 *
 * Este middleware é responsável por envolver o manipulador de autenticação
 * `NextAuth` da biblioteca `next-auth`. Ele configura a estratégia de
 * autenticação usando o objeto `authConfig`, que é definido no módulo
 * `auth.config`.
 *
 * @see https://next-auth.js.org/configuration/options Opções do NextAuth
 * @see {@link ./auth.config|auth.config} A configuração para a estratégia de autenticação
 * @type {import('next-auth').Middleware}
 */
export default NextAuth(authConfig).auth;

/**
 * Middleware para autenticação
 *
 * Este middleware é responsável por envolver o manipulador de autenticação
 * `NextAuth` da biblioteca `next-auth`. Ele configura a estratégia de
 * autenticação usando o objeto `authConfig`, que é definido no módulo
 * `auth.config`.
 *
 * @see https://next-auth.js.org/configuration/options Opções do NextAuth
 * @see {@link ./auth.config|auth.config} A configuração para a estratégia de autenticação
 * @type {import('next-auth').Middleware}
 */
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
