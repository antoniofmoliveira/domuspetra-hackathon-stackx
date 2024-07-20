import { signOut } from "@/auth";

export async function POST(request: Request): Promise<void> {
  await signOut({ redirect: true, redirectTo: "/" });
}
