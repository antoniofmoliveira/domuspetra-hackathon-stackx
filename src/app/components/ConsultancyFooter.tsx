import React from "react";
import ContactSection from "./ContactSection";

/**
 * ConsultancyFooter component
 *
 * This component displays the contact section for a consultancy.
 *
 * @param {Object} props - The properties of the component.
 * @param {string} props.title - The title of the consultancy.
 * @returns {JSX.Element} A ContactSection component with the consultancy title as the subject.
 */
const ConsultancyFooter = ({ title }: { title: string }): JSX.Element => {
  return <ContactSection title={`Consultoria: ${title}`} />;
};

export default ConsultancyFooter;
