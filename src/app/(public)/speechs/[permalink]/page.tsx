import FullArticle from "@/app/components/article";
import SpeechFooter from "@/app/components/speechFooter";

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
