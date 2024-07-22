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

export class UserObj {
  id: string = "";
  name: string = "";
  email: string = "";
  password: string = "";
  rule: string = "editor";
}

export type Contact = {
  id: string;
  name: string;
  email: string;
  tel: string;
  message: string;
};

export class ContactObj {
  id: string = "";
  name: string = "";
  email: string = "";
  tel: string = "";
  message: string = "";
  constructor(message: string) {
    this.message = message;
  }
}
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
  content_url: string; // the url of the content
  image_url: string; //the url of the blob of image
  article_date: string;
  is_published: boolean; // can it be displayed?
  has_no_content: boolean; // there is no content. only show
  is_external_url_an_iframe: boolean; // media?
};

export class ArticleObj implements Article {
  id = null;
  type = "blog";
  permalink = "";
  external_url = null;
  title = "";
  summary = "";
  content_url = "";
  image_url = "";
  article_date = "";
  is_published = true;
  has_no_content = false;
  is_external_url_an_iframe = false;

  construtor() {}
}
