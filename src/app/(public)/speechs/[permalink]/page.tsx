import FullArticle from "@/app/components/FullArticle";
import SpeechFooter from "@/app/components/SpeechFooter";

/**
 * The Speech page component.
 *
 * @param {Object} props - The props object.
 * @param {Object} props.params - The params object.
 * @param {string} props.params.permalink - The permalink of the speech.
 * @returns {Promise<JSX.Element>} A promise that resolves to a JSX element.
 */
interface PageProps {
  params: { permalink: string };
}
/**
 * Renders a speech page with a full article and a speech footer.
 *
 * @param {PageProps} params - The parameters for the page.
 * @param {string} params.permalink - The permalink of the speech.
 * @return {JSX.Element} The rendered speech page.
 */
export default async function Speech({ params: { permalink } }: PageProps) {
  return (
    <>
      <FullArticle permalink={permalink} footer_={SpeechFooter} />
    </>
  );
}
