import ContactSection from "./ContactSection";
/**
 * This component displays the contact section for a blog post.
 *
 * @param {Object} props - The properties of the component.
 * @param {string} props.title - The title of the blog post.
 * @returns {JSX.Element} A ContactSection component with the blog post title as the subject.
 */
const BlogFooter = ({ title }: { title: string }): JSX.Element => {
  return <ContactSection title={`Blog post: ${title}`} />;
};

export default BlogFooter;
