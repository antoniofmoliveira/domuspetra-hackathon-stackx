import ConsultancyFooter from "@/app/components/ConsultancyFooter";
import FullArticle from "@/app/components/FullArticle";

interface PageProps {
  params: { permalink: string };
}

export default async function Consultancy({
  params: { permalink },
}: PageProps) {
  return (
    <>
      <FullArticle permalink={permalink} footer_={ConsultancyFooter} />
    </>
  );
}
