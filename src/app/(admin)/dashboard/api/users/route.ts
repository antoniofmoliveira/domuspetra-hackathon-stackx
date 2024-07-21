import { getUsers } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  const users = await getUsers();
  return NextResponse.json(users);
}

export async function GET(request: Request): Promise<NextResponse> {
  const users = await getUsers();
  //   console.log(JSON.stringify(contacts));
  return NextResponse.json(users);
}
