import { NextResponse } from "next/server";

import { put } from "@vercel/blob";

/**
 * executa uploads de blobs de imagem ou texto dos artigos
 *
 * @param request
 * @returns
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
