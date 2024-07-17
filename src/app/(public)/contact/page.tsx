"use client";
import ContactCard from "@/app/components/contact-card";
import ContactUsForm from "@/app/components/contactus-form";
import { useSearchParams } from "next/navigation";

export default function Contact() {
  const searchParams = useSearchParams();
  const param = searchParams.get("subject");
  const arg = param == null ? "" : param;

  return (
    <div>
      <ContactUsForm subject={arg} />
    </div>
  );
}
