import { NextResponse } from "next/server";

import { getUsers } from "@/lib/db";

export async function POST(request: Request): Promise<NextResponse> {
  const users = await getUsers();
  return NextResponse.json(users);
}

export async function GET(request: Request): Promise<NextResponse> {
  const users = await getUsers();
  return NextResponse.json(users);
}
