import ContactSection from "./ContactSection";

const BlogFooter = ({ title }: { title: string }): JSX.Element => {
  return <ContactSection title={`Blog post: ${title}`} />;
};

export default BlogFooter;
