import FullArticle from "@/app/components/FullArticle";
import SpeechFooter from "@/app/components/SpeechFooter";

export default async function About() {
  return (
    <>
      <FullArticle permalink={"sobre_nos"} footer_={SpeechFooter} />
    </>
  );
}
