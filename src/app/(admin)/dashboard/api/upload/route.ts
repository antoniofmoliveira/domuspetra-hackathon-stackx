import { NextResponse } from "next/server";

import { put } from "@vercel/blob";

/**
 * Handle POST request to upload a blob
 * @param {Request} request - The incoming request
 * @returns {Promise<NextResponse>} - The response with the blob information
 */
export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("filename");
  const blob = await put(filename!, request.body!, {
    access: "public",
  });
  const res = NextResponse.json(blob);
  return NextResponse.json(blob);
}
