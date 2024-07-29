"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import ContactUsForm from "@/app/components/ContactUsForm";

/**
 * This component renders a contact form with a Google reCAPTCHA.
 * It uses Next.js's `useSearchParams` hook to get the subject from the URL query string
 * and passes it to the `ContactUsForm` component as a prop.
 *
 * @returns {JSX.Element} A React component that renders a contact form with a Google reCAPTCHA.
 */
function ContactArgs() {
  const searchParams = useSearchParams();
  const param = searchParams.get("subject");
  const arg = param == null ? "" : param;

  return (
    <div className="flex flex-col content-center w-full items-center mt-4">
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY ?? "NOT DEFINED"}
        scriptProps={{
          async: false,
          defer: false,
          appendTo: "head",
          nonce: undefined,
        }}
      >
        <ContactUsForm subject={arg} />
      </GoogleReCaptchaProvider>
    </div>
  );
}
/**
 * Renders the ContactPage component.
 *
 * @return {JSX.Element} The rendered ContactPage component.
 */
export default function ContactPage() {
  return (
    <Suspense>
      <ContactArgs />
    </Suspense>
  );
}
