import FullArticle from "@/app/components/article";
import SpeechFooter from "@/app/components/speechFooter";

export default async function About() {
  return (
    <>
      <FullArticle permalink={"sobre_nos"} footer_={SpeechFooter} />
    </>
  );
}
