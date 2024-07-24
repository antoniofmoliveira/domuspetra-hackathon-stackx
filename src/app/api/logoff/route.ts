import { signOut } from "@/auth";

/**
 * Signs out the user and redirects to the specified URL.
 *
 * @param {Request} request - The request object.
 * @return {Promise<void>} A promise that resolves when the sign out and redirect are complete.
 */
export async function POST(request: Request): Promise<void> {
  // Signs out the user by calling the `signOut` function with
  // the `redirect` option set to `true` and `redirectTo` set to "/".
  //
  // The `signOut` function redirects the user to the specified URL after
  // signing them out.
  await signOut({ redirect: true, redirectTo: "/" });
}
