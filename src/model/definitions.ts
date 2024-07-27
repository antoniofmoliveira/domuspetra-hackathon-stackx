/**
 * @file Contém definições de tipos e classes de dados
 * @module model/definitions
 * @author antoniofmoliveira <antoniofmolveira@outlook.com>
 * @copyright 2024 Equipe Oliveira
 * @license MIT
 * @version 0.1.0
 * @since 0.1.0
 */

/**
 * Esta classe define os dados de um usuário do sistema
 * @prop {string} id - id do usuário
 * @prop {string} name - nome do usuário
 * @prop {string} email - email do usuário
 * @prop {string} password - password do usuário
 * @prop {string} rule - papel do usuário no sistema
 */
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  rule: string;
};

/**
 * Esta classe define os dados de um usuário do sistema
 *
 * @prop {string} id - id do usuário
 * @prop {string} name - nome do usuário
 * @prop {string} email - email do usuário
 * @prop {string} password - password do usuário
 * @prop {string} rule - papel do usuário no sistema. Os valores possíveis são "admin" e "editor". O padrão é "editor".
 */
export class UserObj {
  id: string = "";
  name: string = "";
  email: string = "";
  password: string = "123456";
  rule: string = "editor";
}

export type Contact = {
  id: string;
  name: string;
  email: string;
  tel: string;
  message: string;
};

/**
 * Esta classe define os dados de uma mensagem de contato
 *
 * @class
 * @property {string} id - id da mensagem de contato
 * @property {string} name - nome do remetente da mensagem
 * @property {string} email - email do remetente da mensagem
 * @property {string} tel - telefone do remetente da mensagem
 * @property {string} message - mensagem de contato
 */
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
 * Exporta as definições de tipo para os dados de usuários e artigos
 *
 * @module model/definitions
 * @author antoniofmoliveira <antoniofmolveira@outlook.com>
 * @copyright 2024 Equipe Oliveira
 * @license MIT
 * @version 0.1.0
 * @since 0.1.0
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

/**
 * Esta classe define os dados de um artigo de blog, treinamento, consultoria ou palestra
 *
 * @class
 * @property {string | null} id - id do artigo
 * @property {string} type - tipo do artigo (record, blog, training, consultancy, speechs, about)
 * @property {string} permalink - o texto do url
 * @property {string | null} external_url - o link externo (exemplo: link para o youtube)
 * @property {string} title - o título do artigo
 * @property {string} summary - o resumo do artigo
 * @property {string} content_url - o url do conteúdo
 * @property {string} image_url - o url da imagem do artigo
 * @property {string} article_date - a data do artigo
 * @property {boolean} is_published - se o artigo pode ser exibido?
 * @property {boolean} has_no_content - se o artigo não possui conteúdo, apenas exibe
 * @property {boolean} is_external_url_an_iframe - se o link externo é uma mídia?
 */
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
