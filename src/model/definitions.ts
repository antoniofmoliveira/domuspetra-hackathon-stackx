/**
 * usuário do app com acesso à area de administração /dashboard
 */
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  rule: string;
};

/**
 * uma artigo de testemunho, blog, treinamento, consultoria ou palestra
 */
export type Article = {
  id: string | null;
  type: string; // record, blog, training, consultancy, speechs, about
  permalink: string; // the text in url
  external_url: string | null; // eg. link to youtube
  title: string;
  summary: string;
  content_url: string | null; // the url of the content
  image_url: string | null; //the url of the blob of image
  article_date: string;
  is_published: boolean; // can it be displayed?
  has_no_content: boolean; // there is no content. only show
  is_external_url_an_iframe: boolean; // media?
};

export class ArticleObj implements Article {
  id = null;
  type = "";
  permalink = "";
  external_url = null;
  title = "";
  summary = "";
  content_url = "";
  image_url = "";
  article_date = "";
  is_published = false;
  has_no_content = false;
  is_external_url_an_iframe = false;

  construtor() {}

  //   constructor(
  //     id: string,
  //     type: string,
  //     permalink: string,
  //     external_url: string | null,
  //     title: string,
  //     summary: string,
  //     content_url: string | null,
  //     image_url: string | null,
  //     article_date: string,
  //     is_published: boolean,
  //     has_no_content: boolean,
  //     is_external_url_an_iframe: boolean
  //   ) {
  //     this.id = id;
  //     this.type = type;
  //     this.permalink = permalink;
  //     this.external_url = external_url;
  //     this.title = title;
  //     this.summary = summary;
  //     this.content_url = content_url;
  //     this.image_url = image_url;
  //     this.article_date = article_date;
  //     this.is_published = is_published;
  //     this.has_no_content = has_no_content;
  //     this.is_external_url_an_iframe = is_external_url_an_iframe;
  //   }
}
