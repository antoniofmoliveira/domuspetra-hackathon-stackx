import AboutUsFooter from "@/app/components/AboutUsFooter";
import FullArticle from "@/app/components/FullArticle";

export default async function About() {
  return (
    <>
      <FullArticle permalink={"sobre_nos"} footer_={AboutUsFooter} />
    </>
  );
}
