"use client";
import ContactCard from "@/app/components/contact-card";
import ContactUsForm from "@/app/components/contactus-form";
import { useSearchParams } from "next/navigation";
interface PageProps {
  subject?: string;
}
export default function Contact({ subject = "" }: PageProps) {
  const searchParams = useSearchParams();
  const param = searchParams.get("subject");
  const arg = param == null ? subject : param;

  return (
    <div>
      <ContactUsForm subject={arg} />
    </div>
  );
}
