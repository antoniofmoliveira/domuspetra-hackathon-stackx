"use client";
import ContactCard from "@/app/components/ContactCard";
import ContactUsForm from "@/app/components/ContactUsForm";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

function ContactArgs() {
  const searchParams = useSearchParams();
  const param = searchParams.get("subject");
  const arg = param == null ? "" : param;

  return (
    <div>
      <GoogleReCaptchaProvider
        reCaptchaKey="6LeDjxYqAAAAAH6IpzXGJb0GVWR6KOcJn_HCUzS9"
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

export default function ContactPage() {
  return (
    <Suspense>
      <ContactArgs />
    </Suspense>
  );
}
