import { NextResponse } from "next/server";

import { hideContact } from "@/lib/db";

export async function POST(request: Request): Promise<NextResponse> {
  const body = await request.json();
  const id = body["contactId"];
  hideContact(id);
  return NextResponse.json({ message: "ok" });
}
