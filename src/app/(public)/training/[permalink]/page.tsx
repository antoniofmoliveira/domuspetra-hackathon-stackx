import FullArticle from "@/app/components/FullArticle";
import TrainingFooter from "@/app/components/TrainingFooter";

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
