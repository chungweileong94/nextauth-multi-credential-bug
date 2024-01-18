"use server";

import { signIn } from "~/server/auth";
import { AuthError } from "next-auth";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    // This should work, but it doesn't...
    // This will break if:
    // - There are multiple credentials providers
    // - Set an ID to the credentials provider
    await signIn("credentials_1", formData);
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
