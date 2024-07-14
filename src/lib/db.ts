import { sql } from "@vercel/postgres";
import bcrypt from "bcrypt";

import { User } from "@/model/definitions";

export { sql };

/**
 *
 * @returns array de users
 */
export async function getUsers(): Promise<User[] | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users ORDER BY name`;
    return user.rows;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

/**
 * retorna um user
 *
 * @param userId
 * @returns
 */
export async function getUser(userId: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE id=${userId}`;
    return user.rows[0];
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

/**
 * apaga um user
 *
 * @param userId
 */
export async function deleteUser(userId: string): Promise<void> {
  try {
    const user = await sql`DELETE * FROM users WHERE id=${userId}`;
  } catch (error) {
    console.error("Failed to delete user:", error);
    throw new Error("Failed to delete user.");
  }
}

/**
 * cria um user
 *
 * @param user
 * @returns
 */
export async function createUser(user: User): Promise<User | undefined> {
  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const result = await sql<User>`
        INSERT INTO users (name, email, password, rule)
        VALUES (${user.name}, ${user.email}, ${hashedPassword}, ${user.rule}) 
        RETURNING id;`;

    return result.rows[0];
  } catch (error) {
    console.error("Failed to create user:", error);
    throw new Error("Failed to create user.");
  }
}

/**
 * atualiza um user menos a password
 *
 * @param user
 * @returns
 */
export async function updateUser(user: User): Promise<User | undefined> {
  try {
    const result = await sql<User>`
        UPDATE user 
        SET name = ${user.name}, email = ${user.email}, rule = ${user.rule})
        WHERE id=${user.id}
        RETURNING id, name, email, password, rule`;
    return result.rows[0];
  } catch (error) {
    console.error("Failed to update user:", error);
    throw new Error("Failed to update user.");
  }
}

/**
 * atualiza a password de um user
 *
 * @param user
 */
export async function updateUserPassword(user: User): Promise<void> {
  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const result = await sql`
        UPDATE user 
        set password = ${hashedPassword}
        WHERE id=${user.id}`;
  } catch (error) {
    console.error("Failed to update user password:", error);
    throw new Error("Failed to update user password.");
  }
}
