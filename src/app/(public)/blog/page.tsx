import Cards from "@/app/components/Cards";
import { revalidateTag } from "next/cache";

export default async function Blogs() {
  revalidateTag("blog");
  return <Cards category="blog" />;
}
