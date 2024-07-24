import ContactSection from "./ContactSection";

const TrainingFooter = ({ title }: { title: string }): JSX.Element => {
  return <ContactSection title={`Treinamentos: ${title}`} />;
};

export default TrainingFooter;
