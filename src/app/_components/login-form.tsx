"use client";

import { useFormState, useFormStatus } from "react-dom";

import { authenticate } from "../actions";

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={dispatch}>
      <LoginButton />
      <p>{errorMessage}</p>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <button className="mt-4 w-full" aria-disabled={pending}>
      {pending ? "Loading..." : "Log in"}
    </button>
  );
}
