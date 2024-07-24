"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

/**
 * Authenticates the user with the provided credentials.
 *
 * @param {string | undefined} prevState - The previous state of the user.
 * @param {FormData} formData - The form data containing the user's credentials.
 * @return {Promise<string>} A promise that resolves to a string indicating the result of the authentication.
 * @throws {AuthError} If the authentication fails.
 */
export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
