import { createArticle, createUser } from "@/lib/db";
import { Article } from "@/model/definitions";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  const body = await request.json();
  const newUser = await createUser(body);
  return NextResponse.json(newUser);
}
