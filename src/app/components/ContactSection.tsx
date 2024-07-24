"use client";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import ContactUsForm from "./ContactUsForm";

/**
 * This is the ContactSection component.
 *
 * @component
 * @category Components
 * @example
 * <ContactSection title="Contact us" />
 * @param {Object} props - The properties for the ContactSection component.
 * @param {string} [props.title=""] - The title of the contact section.
 * @returns {JSX.Element} - The rendered ContactSection component.
 */
interface ContactSectionProps {
  title?: string;
}
/**
 * Props for the ContactSection component.
 * @typedef {Object} ContactSectionProps
 * @property {string} [title=""] - The title of the contact section.
 */
function ContactSection({ title = "" }: ContactSectionProps) {
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
        <ContactUsForm subject={title} />
      </GoogleReCaptchaProvider>
    </div>
  );
}

export default ContactSection;
