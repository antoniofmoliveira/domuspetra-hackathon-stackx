import { NextResponse } from "next/server";

import { getUsers } from "@/lib/db";

/**
 * This function is an HTTP route handler that handles POST requests
 * to create a new user.
 *
 * @param {Request} request - the HTTP request object
 * @return {Promise<NextResponse>} a promise that resolves to a NextResponse
 * object containing the created user.
 */
export async function POST(request: Request): Promise<NextResponse> {
  const users = await getUsers();
  return NextResponse.json(users);
}
/**
 * This function is an HTTP route handler that handles GET requests
 * to get a list of users.
 *
 * @param {Request} request - the HTTP request object
 * @return {Promise<NextResponse>} a promise that resolves to a NextResponse
 * object containing the list of users.
 */
export async function GET(request: Request): Promise<NextResponse> {
  const users = await getUsers();
  return NextResponse.json(users);
}
