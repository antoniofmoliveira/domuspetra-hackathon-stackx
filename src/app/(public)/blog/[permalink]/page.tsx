import FullArticle from "@/app/components/article";
import BlogFooter from "@/app/components/blogFooter";

interface PageProps {
  params: { permalink: string };
}

export default async function Speech({ params: { permalink } }: PageProps) {
  return (
    <>
      <FullArticle permalink={permalink} footer={BlogFooter} />
    </>
  );
}
