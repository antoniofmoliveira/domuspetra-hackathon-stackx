"use client";
import ContactCard from "@/app/components/contact-card";
import ContactUsForm from "@/app/components/contactus-form";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ContactArgs() {
  const searchParams = useSearchParams();
  const param = searchParams.get("subject");
  const arg = param == null ? "" : param;

  return (
    <div>
      <ContactUsForm subject={arg} />
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
