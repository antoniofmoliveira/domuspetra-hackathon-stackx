import AboutUsFooter from "@/app/components/AboutUsFooter";
import FullArticle from "@/app/components/FullArticle";
/**
 * @description
 * Page for the about section
 *
 * @returns {JSX.Element} A JSX element representing the about page
 */

export default async function About() {
  return (
    <>
      <FullArticle permalink={"sobre_nos"} footer_={AboutUsFooter} />
    </>
  );
}
