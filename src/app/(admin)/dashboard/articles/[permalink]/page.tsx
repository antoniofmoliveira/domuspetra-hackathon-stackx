import FullArticle from "@/app/components/article";
import BlogFooter from "@/app/components/blogFooter";

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
