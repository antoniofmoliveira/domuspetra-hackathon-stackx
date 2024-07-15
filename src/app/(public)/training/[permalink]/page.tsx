import FullArticle from "@/app/components/article";
import TrainingFooter from "@/app/components/trainingFooter";

interface PageProps {
  params: { permalink: string };
}

export default async function Training({ params: { permalink } }: PageProps) {
  return (
    <>
      <FullArticle permalink={permalink} footer={TrainingFooter} />
    </>
  );
}
