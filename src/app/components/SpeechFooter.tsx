import ContactSection from "./ContactSection";

/**
 * Footer component for the speech section.
 *
 * @param {Object} props - Component props
 * @param {string} props.title - The title of the speech
 * @returns {JSX.Element} A ContactSection component
 */
const SpeechFooter = ({ title }: { title: string }): JSX.Element => {
  return <ContactSection title={`Palestras: ${title}`} />;
};

export default SpeechFooter;
