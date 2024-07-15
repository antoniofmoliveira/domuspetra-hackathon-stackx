import { sql } from "@vercel/postgres";
import bcrypt from "bcrypt";

import { Article, ArticleObj, User } from "@/model/definitions";

export { sql };

/**
 *
 * @returns array de users
 */
export async function getUsers(): Promise<User[] | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users ORDER BY name`;
    return user.rows;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

/**
 * retorna um user
 *
 * @param userId
 * @returns
 */
export async function getUser(userId: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE id=${userId}`;
    return user.rows[0];
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

/**
 * apaga um user
 *
 * @param userId
 */
export async function deleteUser(userId: string): Promise<void> {
  try {
    const user = await sql`DELETE * FROM users WHERE id=${userId}`;
  } catch (error) {
    console.error("Failed to delete user:", error);
    throw new Error("Failed to delete user.");
  }
}

/**
 * cria um user
 *
 * @param user
 * @returns
 */
export async function createUser(user: User): Promise<User | undefined> {
  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const result = await sql<User>`
        INSERT INTO users (name, email, password, rule)
        VALUES (${user.name}, ${user.email}, ${hashedPassword}, ${user.rule}) 
        RETURNING id;`;

    return result.rows[0];
  } catch (error) {
    console.error("Failed to create user:", error);
    throw new Error("Failed to create user.");
  }
}

/**
 * atualiza um user menos a password
 *
 * @param user
 * @returns
 */
export async function updateUser(user: User): Promise<User | undefined> {
  try {
    const result = await sql<User>`
        UPDATE user 
        SET name = ${user.name}, email = ${user.email}, rule = ${user.rule})
        WHERE id=${user.id}
        RETURNING id, name, email, password, rule`;
    return result.rows[0];
  } catch (error) {
    console.error("Failed to update user:", error);
    throw new Error("Failed to update user.");
  }
}

/**
 * atualiza a password de um user
 *
 * @param user
 */
export async function updateUserPassword(user: User): Promise<void> {
  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const result = await sql`
        UPDATE user 
        set password = ${hashedPassword}
        WHERE id=${user.id}`;
  } catch (error) {
    console.error("Failed to update user password:", error);
    throw new Error("Failed to update user password.");
  }
}

/**
 *
 * @param type
 * @returns articles de um tipo
 */
export async function getArticles(
  type: string
): Promise<Article[] | undefined> {
  try {
    const articles =
      await sql<Article>`SELECT * FROM articles WHERE type = ${type}
      AND is_published=true ORDER BY article_date DESC`;
    return articles.rows;
  } catch (error) {
    console.error(`Failed to fetch article of type ${type}:`, error);
    throw new Error(`Failed to fetch article of type ${type}.`);
  }
}

/**
 *
 * @param permalink
 * @returns um article com o permalink fornecido
 */
export async function getArticleByPermalink(
  permalink: string
): Promise<Article | undefined> {
  try {
    const article =
      await sql<Article>`SELECT * FROM articles WHERE permalink=${permalink}`;
    return article.rows[0];
  } catch (error) {
    console.error("Failed to fetch article:", error);
    throw new Error("Failed to fetch article.");
  }
}

/**
 *
 * @param articleId
 * @returns um article do id fornecido
 */
export async function getArticleById(
  articleId: string
): Promise<Article | undefined> {
  try {
    const article =
      await sql<Article>`SELECT * FROM articles WHERE id=${articleId}`;
    return article.rows[0];
  } catch (error) {
    console.error("Failed to fetch article:", error);
    throw new Error("Failed to fetch article.");
  }
}

/**
 *  apaga um article
 * @param articleId
 */
export async function deleteArticle(articleId: string): Promise<void> {
  try {
    const article = await sql`DELETE * FROM articles WHERE id=${articleId}`;
  } catch (error) {
    console.error("Failed to delete article:", error);
    throw new Error("Failed to delete article.");
  }
}

export async function updateArticle(
  article: Article
): Promise<Article | undefined> {
  try {
    const result = await sql<Article>`
          UPDATE articles 
          SET type = ${article.type}, permalink = ${article.permalink}, external_url = ${article.external_url},
            title = ${article.title}, summary = ${article.summary}, content_url = ${article.content_url},
            image_url = ${article.image_url}, article_date = ${article.article_date}, is_published = ${article.is_published},
            has_no_content = ${article.has_no_content}, is_external_url_an_iframe = ${article.is_external_url_an_iframe}
          WHERE id=${article.id}
          RETURNING id, type, permalink, external_url, title, summary, content_url, image_url, article_date, is_published, has_no_content, is_external_url_an_iframe`;
    return result.rows[0];
  } catch (error) {
    console.error("Failed to update article:", error);
    throw new Error("Failed to update article.");
  }
}

export async function createArticle(
  article: Article
): Promise<Article | undefined> {
  try {
    const result = await sql<Article>`INSERT INTO articles 
        (type, permalink, external_url, title, summary, content_url, image_url,  
        is_published, has_no_content, is_external_url_an_iframe)
        VALUES (${article.type}, ${article.permalink}, ${article.external_url}, ${article.title},
        ${article.summary}, ${article.content_url}, ${article.image_url}, 
        ${article.is_published}, ${article.has_no_content}, ${article.is_external_url_an_iframe})
        RETURNING *`;
    return result.rows[0];
  } catch (error) {
    console.error("Failed to update article:", error);
    throw new Error("Failed to update article.");
  }
}
