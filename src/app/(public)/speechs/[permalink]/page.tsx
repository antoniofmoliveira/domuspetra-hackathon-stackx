import FullArticle from "@/app/components/FullArticle";
import SpeechFooter from "@/app/components/SpeechFooter";

interface PageProps {
  params: { permalink: string };
}

export default async function Speech({ params: { permalink } }: PageProps) {
  return (
    <>
      <FullArticle permalink={permalink} footer_={SpeechFooter} />
    </>
  );
}
