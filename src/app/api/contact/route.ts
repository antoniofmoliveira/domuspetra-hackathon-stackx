import { createContact } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  const body = await request.json();
  const newContact = await createContact(body);
  return NextResponse.json({ messahe: "ok" });
}
