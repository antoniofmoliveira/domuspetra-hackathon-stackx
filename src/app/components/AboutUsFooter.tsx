import ContactSection from "./ContactSection";
/**
 * A footer component for the about us page
 *
 * @param {Object} props - Component props
 * @param {string} props.title - The title of the contact section
 * @returns {JSX.Element} A ContactSection component
 */
const AboutUsFooter = ({ title }: { title: string }): JSX.Element => {
  return <ContactSection title={"Sobre a DOMUS Petra"} />;
};

export default AboutUsFooter;
