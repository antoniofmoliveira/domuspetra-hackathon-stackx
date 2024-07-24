import { NextResponse } from "next/server";

import { getContacts } from "@/lib/db";

/**
 * POST endpoint for retrieving all contacts from the database.
 *
 * @param {Request} request - The incoming request object.
 * @returns {Promise<NextResponse>} A promise that resolves to a JSON response containing the list of contacts.
 */

export async function POST(request: Request): Promise<NextResponse> {
  const contacts = getContacts();
  return NextResponse.json(JSON.stringify(contacts));
}

/**
 * GET endpoint for retrieving all contacts from the database.
 *
 * @param {Request} request - The incoming request object.
 * @returns {Promise<NextResponse>} A promise that resolves to a JSON response containing the list of contacts.
 */
export async function GET(request: Request): Promise<NextResponse> {
  const contacts = getContacts();
  return NextResponse.json(JSON.stringify(contacts));
}
