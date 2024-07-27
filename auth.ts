import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { sql } from "@vercel/postgres";
import bcrypt from "bcrypt";

import type { User } from "@/model/definitions";

/**
 * Valida e compara a senha de um usuário com o email fornecido.
 *
 * @param email O email do usuário.
 * @returns Um objeto `Promise` que retorna o objeto `User` se a validação for bem-sucedida, caso contrário `undefined`.
 * @throws Um erro se a busca do usuário falhar.
 */
async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

/**
 * Compara as credenciais de login do usuário com as do banco de dados.
 *
 * @param credentials Um objeto com as credenciais de login do usuário: email e password.
 * @returns Um objeto `Promise` que retorna o objeto `User` se a validação for bem-sucedida, caso contrário `undefined`.
 * @throws Um erro se a busca do usuário falhar.
 */
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        try {
          const parsedCredentials = z
            .object({ email: z.string().email(), password: z.string().min(6) })
            .safeParse(credentials);
          if (parsedCredentials.success) {
            const { email, password } = parsedCredentials.data;
            const user = await getUser(email);
            if (!user) return null;
            const passwordsMatch = await bcrypt.compare(
              password,
              user.password
            );

            if (passwordsMatch) return user;
          }

          console.log(`Invalid credentials '${parsedCredentials.success}'`);
          return null;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
});
