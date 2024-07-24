import { db } from "@vercel/postgres";
import bcrypt from "bcrypt";

import { users } from "@/util/placeholder-data";

// TODO eliminar este na produção
const client = await db.connect();

/**
 * This function seeds the database with placeholder users.
 *
 * @return {Promise<void>} A Promise that resolves when the seeding is complete.
 */
async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        rule TEXT NOT NULL
      );
    `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      //   console.log(`'${hashedPassword}'`);
      return client.sql`
        INSERT INTO users (name, email, password, rule)
        VALUES (${user.name}, ${user.email}, ${hashedPassword}, ${user.rule})
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedUsers;
}
/**
 * executa o seed
 *
 * @returns
 */
export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedUsers();
    await client.sql`COMMIT`;
    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
