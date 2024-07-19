import { hideContact } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  const body = await request.json();
  const id = body["contactId"];
  hideContact(id);
  return NextResponse.json({ message: "ok" });
}
