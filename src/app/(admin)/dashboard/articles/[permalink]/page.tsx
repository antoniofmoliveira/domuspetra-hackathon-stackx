import FullArticle from "@/app/components/FullArticle";
import BlogFooter from "@/app/components/BlogFooter";

interface PageProps {
  params: { permalink: string };
}

/**
 * Renders the admin page for editing an article.
 *
 * @param {PageProps} props - The props object.
 * @param {Object} props.params - The params object.
 * @param {string} props.params.permalink - The permalink of the article to edit.
 * @returns {Promise<JSX.Element>} A Promise that resolves to a JSX element.
 */
export default async function Article({
  params: { permalink },
}: PageProps): Promise<JSX.Element> {
  return (
    <>
      <FullArticle permalink={permalink} footer_={BlogFooter} />
    </>
  );
}
