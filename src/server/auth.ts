import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";

import { authConfig } from "../auth.config";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      id: "credentials_1",
      async authorize(credentials) {
        return { name: "John Doe", email: "lX0R0@example.com" };
      },
    }),
    Credentials({
      id: "credentials_2",
      async authorize(credentials) {
        return { name: "John Doe", email: "lX0R0@example.com" };
      },
    }),
  ],
});
