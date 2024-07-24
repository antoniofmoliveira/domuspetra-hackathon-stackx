import Cards from "@/app/components/Cards";
import { revalidateTag } from "next/cache";
/**
 * The blogs page of the application.
 *
 * This page displays all the cards of the articles, sorted by date.
 *
 * @return {JSX.Element} The rendered component.
 */

export default async function Blogs() {
  revalidateTag("blog");
  return (
    <>
      {" "}
      <h1
        className="w-full text-center dark:text-teal-400 text-slate-800 font-extrabold text-3xl p-4"
        style={{ textShadow: "0px 4px 10px gray" }}
      >
        Blog
      </h1>
      <Cards category="blog" />
    </>
  );
}
