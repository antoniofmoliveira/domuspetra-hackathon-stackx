import { getAllArticles } from "@/lib/db";
import { NextResponse } from "next/server";
/**
 * endpoint para retornar lista de artigos
 * @param {Request} request Request object
 * @returns {NextResponse} response
 */
export async function POST(request: Request): Promise<NextResponse> {
  const articles = await getAllArticles();
  return NextResponse.json(articles);
}

/**
 * Retrieve all articles.
 *
 * @param {Request} request - The request object.
 * @returns {Promise<NextResponse>} A promise that resolves to a NextResponse object containing the list of articles.
 */
export async function GET(request: Request): Promise<NextResponse> {
  const articles = await getAllArticles();
  return NextResponse.json(articles);
}
