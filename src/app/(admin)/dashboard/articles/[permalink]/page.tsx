import FullArticle from "@/app/components/FullArticle";
import BlogFooter from "@/app/components/BlogFooter";

interface PageProps {
  params: { permalink: string };
}

export default async function Article({ params: { permalink } }: PageProps) {
  return (
    <>
      <FullArticle permalink={permalink} footer_={BlogFooter} />
    </>
  );
}
