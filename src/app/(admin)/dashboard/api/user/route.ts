import { NextResponse } from "next/server";

import { createUser } from "@/lib/db";

export async function POST(request: Request): Promise<NextResponse> {
  const body = await request.json();
  const newUser = await createUser(body);
  return NextResponse.json(newUser);
}
