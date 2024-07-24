import ContactSection from "./ContactSection";

const SpeechFooter = ({ title }: { title: string }): JSX.Element => {
  return <ContactSection title={`Palestras: ${title}`} />;
};

export default SpeechFooter;
