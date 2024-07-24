import { hideContact, getContacts } from "@/lib/db";
import { NextResponse } from "next/server";

/**
 * Retrieves a list of contacts from the database and returns them as a JSON response.
 *
 * @param {Request} request - The HTTP request object.
 * @return {Promise<NextResponse>} A promise that resolves to a JSON response containing the list of contacts.
 */
export async function POST(request: Request): Promise<NextResponse> {
  const contacts = await getContacts();
  //   console.log(JSON.stringify(contacts));
  return NextResponse.json(contacts);
}

/**
 * Retrieves a list of contacts from the database and returns them as a JSON response.
 *
 * @param {Request} request - The HTTP request object.
 * @return {Promise<NextResponse>} A promise that resolves to a JSON response containing the list of contacts.
 */
export async function GET(request: Request): Promise<NextResponse> {
  const contacts = await getContacts();
  //   console.log(JSON.stringify(contacts));
  return NextResponse.json(contacts);
}
