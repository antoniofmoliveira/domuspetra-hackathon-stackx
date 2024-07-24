import { NextResponse } from "next/server";

import { createUser } from "@/lib/db";

/**
 * POST endpoint for creating a new user.
 * @param {Request} request - The incoming request object.
 * @return {Promise<NextResponse>} - A promise that resolves to a JSON response containing the newly created user.
 */
export async function POST(request: Request): Promise<NextResponse> {
  const body = await request.json();
  const newUser = await createUser(body);
  return NextResponse.json(newUser);
}
