import { NextResponse } from "next/server";

import { createArticle } from "@/lib/db";
/**
 * API endpoint for creating a new article.
 *
 * @param {Request} request - HTTP request object containing the article data in the body.
 * @return {Promise<NextResponse>} A promise that resolves to a NextResponse object containing the newly created article.
 */
export async function POST(request: Request): Promise<NextResponse> {
  const body = await request.json();
  const newPost = await createArticle(body);
  return NextResponse.json(newPost);
}
