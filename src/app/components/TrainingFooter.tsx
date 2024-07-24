import ContactSection from "./ContactSection";
/**
 * TrainingFooter component
 *
 * This component renders a ContactSection component with a title composed of
 * the word "Treinamentos" and the title passed as prop.
 *
 * @param {Object} props - The properties of the component
 * @param {string} props.title - The title of the training
 * @returns {JSX.Element} A ContactSection component with the title composed of
 * the word "Treinamentos" and the title passed as prop.
 */
const TrainingFooter = ({ title }: { title: string }): JSX.Element => {
  return <ContactSection title={`Treinamentos: ${title}`} />;
};

export default TrainingFooter;
