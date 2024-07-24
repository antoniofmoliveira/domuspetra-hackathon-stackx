import type { NextAuthConfig } from "next-auth";

/**
 * Configuração padrão de autenticação
 * @see {@link https://next-auth.js.org/configuration/options NextAuthConfig}
 */
export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      //   console.log(nextUrl); // TODO Igor interceptar aqui
      // objeto nextUrl tem a seguintes propriedades
      //   {
      //     href: 'http://localhost:3000/dashboard/articles',
      //     origin: 'http://localhost:3000',
      //     protocol: 'http:',
      //     username: '',
      //     password: '',
      //     host: 'localhost:3000',
      //     hostname: 'localhost',
      //     port: '3000',
      //     pathname: '/dashboard/articles',
      //     search: '',
      //     searchParams: URLSearchParams {  },
      //     hash: ''
      //   }
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
