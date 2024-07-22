import { getAllArticles } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  const articles = await getAllArticles();
  return NextResponse.json(articles);
}

export async function GET(request: Request): Promise<NextResponse> {
  const articles = await getAllArticles();
  return NextResponse.json(articles);
}
