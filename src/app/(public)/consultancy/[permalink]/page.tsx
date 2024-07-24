import ConsultancyFooter from "@/app/components/ConsultancyFooter";
import FullArticle from "@/app/components/FullArticle";
/**
 * Page for displaying a specific consultancy.
 *
 * @param {PageProps} props - An object containing the permalink for the consultancy.
 * @returns {Promise<JSX.Element>} A Promise that resolves to a JSX element.
 */
interface PageProps {
  params: { permalink: string };
}
/**
 * Renders a consultancy page with the specified permalink and a consultancy footer.
 *
 * @param {PageProps} props - An object containing the permalink for the consultancy.
 * @returns {Promise<JSX.Element>} A Promise that resolves to a JSX element.
 */
export default async function Consultancy({
  params: { permalink },
}: PageProps) {
  return (
    <>
      <FullArticle permalink={permalink} footer_={ConsultancyFooter} />
    </>
  );
}
