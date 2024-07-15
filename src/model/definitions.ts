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
  id: string;
  type: string; // record, blog, training, consultancy, speechs, about
  permalink: string; // the text in url
  external_url: string; // eg. link to youtube
  title: string;
  summary: string;
  content_url: string; // the url of the content
  image_url: string; //the url of the blob of image
  article_date: string;
  is_published: boolean; // can it be displayed?
  has_no_content: boolean; // there is no content. only show
  is_external_url_an_iframe: boolean; // media?
};
