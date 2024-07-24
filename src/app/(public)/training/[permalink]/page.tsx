import FullArticle from "@/app/components/FullArticle";
import TrainingFooter from "@/app/components/TrainingFooter";

/**
 * Training page component.
 *
 * Renders a full article with the specified permalink and a training footer.
 *
 * @param {PageProps} props - An object containing the permalink for the training.
 * @returns {Promise<JSX.Element>} A Promise that resolves to a JSX element.
 */
interface PageProps {
  params: { permalink: string };
}

export default async function Training({ params: { permalink } }: PageProps) {
  return (
    <>
      <FullArticle permalink={permalink} footer_={TrainingFooter} />
    </>
  );
}
