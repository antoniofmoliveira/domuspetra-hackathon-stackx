import { NextResponse } from "next/server";

import { hideContact } from "@/lib/db";

/**
 * Endpoint to hide a contact. This endpoint expects a POST request with a JSON
 * body containing the contactId of the contact to be hidden.
 *
 * @param {Request} request - The incoming request object.
 * @returns {Promise<NextResponse>} - A promise that resolves to the response object.
 */
export async function POST(request: Request): Promise<NextResponse> {
  const body = await request.json();
  const id = body["contactId"];
  hideContact(id);
  return NextResponse.json({ message: "ok" });
}
