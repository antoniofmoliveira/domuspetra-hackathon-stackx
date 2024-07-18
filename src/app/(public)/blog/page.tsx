import Cards from "@/app/components/cards";
import { revalidateTag } from "next/cache";

export default async function Blogs() {
  revalidateTag("blog");
  return <Cards category="blog" />;
}
