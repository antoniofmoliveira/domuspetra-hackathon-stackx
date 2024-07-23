"use client";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import ContactUsForm from "./ContactUsForm";

function ContactSection() {
  return (
    <div className="flex flex-col content-center w-full items-center">
      <GoogleReCaptchaProvider
        reCaptchaKey="6LeDjxYqAAAAAH6IpzXGJb0GVWR6KOcJn_HCUzS9"
        scriptProps={{
          async: false,
          defer: false,
          appendTo: "head",
          nonce: undefined,
        }}
      >
        <ContactUsForm subject={""} />
      </GoogleReCaptchaProvider>
    </div>
  );
}

export default ContactSection;
