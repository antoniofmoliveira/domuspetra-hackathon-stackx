"use client";

import { useFormState, useFormStatus } from "react-dom";

import { lusitana } from "@/app/components/Fonts";
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

import { Button } from "./Button";
import { authenticate } from "@/lib/actions";
import { useId } from "react";

/**
 * Renders the login form component.
 *
 * The login form component is responsible for rendering the login form and
 * handling the form submission. It uses the `useFormState` and `useFormStatus`
 * hooks from the `react-dom` library to handle form state and form status.
 *
 * @return {JSX.Element} The rendered login form component.
 */
export default function LoginForm(): JSX.Element {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const emailId = useId();
  const passwordId = useId();
  const emailLabelId = useId();
  const passwordLabelId = useId();
  return (
    <form
      action={dispatch}
      className="space-y-3"
      aria-labelledby={emailLabelId}
      aria-describedby={passwordLabelId}
    >
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl text-black`}>
          Por favor identifique-se para continuar
        </h1>
        <div className="w-full">
          <div>
            <label
              id={emailLabelId}
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor={emailId}
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 text-black"
                id={emailId}
                type="email"
                name="email"
                placeholder="Entre o seu email"
                required
                aria-invalid={errorMessage ? "true" : "false"}
                aria-describedby={passwordId + "Error"}
                aria-required={errorMessage ? "true" : "false"}
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 text-black"
                id="password"
                type="password"
                name="password"
                placeholder="Entre a password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <LoginButton />
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full" aria-disabled={pending}>
      Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
