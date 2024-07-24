import ArticleEditInPlace from "@/app/components/ArticleEditInPlace";
import ArticleSelectInPlace from "@/app/components/ArticleSelectInPlace";
import { Article } from "@/model/definitions";
import { revalidateTag } from "next/cache";
import { headers } from "next/headers";
import { Pairs } from "../../../components/ArticleSelectInPlace";

/**
 * Renders the ArticlesList component
 *
 * @return {Promise<JSX.Element>} The rendered ArticlesList component
 */
async function ArticlesList(): Promise<JSX.Element> {
  const headersList = headers();

  const options = [
    { key: "blog", value: "Blog Post" },
    { key: "record", value: "Testemunho" },
    { key: "training", value: "Treinamento" },
    { key: "consultancy", value: "Consultoria" },
    { key: "speech", value: "Palestra" },
    { key: "about", value: "Sobre nós" },
  ];

  const domain = `${headersList.get("x-forwarded-proto")}://${headersList.get(
    "x-forwarded-host"
  )}`;

  const f = async (basePath: string) => {
    const authorization: string | null = headers().get("authorization");
    const articles = await fetch(`${basePath}/api/articles`, {
      headers: { authorization: authorization || "" },
      next: { tags: ["Article"], revalidate: 60 },
    });
    const j = await articles.json();
    return j;
  };

  const data = await f(domain);
  //   console.log(data);
  revalidateTag("Article");
  return (
    <div
      className={"flex flex-col content-center sm:w-[85%] w-full items-center"}
    >
      <table>
        <tbody>
          {data!.map((article: Article) => {
            return (
              <tr
                key={article.id}
                className=" shadow-lg border-hidden shadow-zinc-400"
              >
                <td className="p-4">
                  <ArticleSelectInPlace
                    tag="Tipo"
                    articleId={article.id!}
                    fieldName="type"
                    value={article.type}
                    options={options}
                  />
                  <ArticleEditInPlace
                    tag="Título"
                    articleId={article.id!}
                    fieldName="title"
                    value={article.title}
                  />
                  <ArticleEditInPlace
                    tag="Resumo"
                    articleId={article.id!}
                    fieldName="summary"
                    value={article.summary}
                  />
                  <ArticleEditInPlace
                    tag="Permalink"
                    articleId={article.id!}
                    fieldName="permalink"
                    value={article.permalink}
                  />
                  <ArticleEditInPlace
                    tag="Url da imagem"
                    articleId={article.id!}
                    fieldName="image_url"
                    value={article.image_url}
                  />
                  <ArticleEditInPlace
                    tag="Url do conteúdo"
                    articleId={article.id!}
                    fieldName="content_url"
                    value={article.content_url}
                  />
                  <ArticleEditInPlace
                    tag="Url externa"
                    articleId={article.id!}
                    fieldName="external_url"
                    value={article.external_url ? article.external_url : ""}
                  />
                  <ArticleSelectInPlace
                    tag="Publicar?"
                    articleId={article.id!}
                    fieldName="is_published"
                    value={`${article.is_published}`}
                    options={[
                      { key: "false", value: "Não" },
                      { key: "true", value: "Sim" },
                    ]}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ArticlesList;
