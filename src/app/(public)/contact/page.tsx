"use client";
import ContactCard from "@/app/components/ContactCard";
import ContactUsForm from "@/app/components/ContactUsForm";
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
