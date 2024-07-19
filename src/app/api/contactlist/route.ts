import { hideContact, getContacts } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  const contacts = await getContacts();
  //   console.log(JSON.stringify(contacts));
  return NextResponse.json(JSON.stringify(contacts));
}

export async function GET(request: Request): Promise<NextResponse> {
  const contacts = await getContacts();
  //   console.log(JSON.stringify(contacts));
  return NextResponse.json(JSON.stringify(contacts));
}
