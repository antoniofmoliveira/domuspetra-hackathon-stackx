import FullArticle from "@/app/components/FullArticle";
import BlogFooter from "@/app/components/BlogFooter";
/**
 * This module exports a Next.js page that renders a full article with the
 * specified permalink and a blog footer.
 *
 * @module src/app/(public)/blog/[permalink]/page
 * @param {PageProps} props - An object with a `params` property containing
 * the `permalink` string.
 * @returns {Promise<JSX.Element>} A Promise that resolves to a JSX element.
 */
interface PageProps {
  params: { permalink: string };
}
/**
 * Renders a full article with the specified permalink and a blog footer.
 *
 * @param {PageProps} params - An object containing the permalink.
 * @return {Promise<JSX.Element>} A Promise that resolves to a JSX element.
 */
export default async function Speech({ params: { permalink } }: PageProps) {
  return (
    <>
      <FullArticle permalink={permalink} footer_={BlogFooter} />
    </>
  );
}
