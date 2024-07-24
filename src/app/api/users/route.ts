import { getUsers } from "@/lib/db";
import { NextResponse } from "next/server";

/**
 * Retrieves a list of users from the database and returns it as a JSON response.
 *
 * @param {Request} request - The HTTP request object.
 * @return {Promise<NextResponse>} A promise that resolves to a NextResponse object containing the list of users.
 */
export async function POST(request: Request): Promise<NextResponse> {
  const users = await getUsers();
  return NextResponse.json(users);
}

/**
 * Retrieves a list of users from the database and returns it as a JSON response.
 *
 * @param {Request} request - The request object containing information about the HTTP request.
 * @return {Promise<NextResponse>} A promise that resolves to a NextResponse object containing the list of users.
 */
export async function GET(request: Request): Promise<NextResponse> {
  const users = await getUsers();
  return NextResponse.json(users);
}
