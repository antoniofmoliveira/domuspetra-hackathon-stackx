import { NextResponse } from "next/server";

import { createArticle } from "@/lib/db";

export async function POST(request: Request): Promise<NextResponse> {
  const body = await request.json();
  const newPost = await createArticle(body);
  return NextResponse.json(newPost);
}
