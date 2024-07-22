import { NextResponse } from "next/server";

import { getContacts } from "@/lib/db";

export async function POST(request: Request): Promise<NextResponse> {
  const contacts = getContacts();
  return NextResponse.json(JSON.stringify(contacts));
}

export async function GET(request: Request): Promise<NextResponse> {
  const contacts = getContacts();
  return NextResponse.json(JSON.stringify(contacts));
}
