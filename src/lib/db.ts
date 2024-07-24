import { sql } from "@vercel/postgres";
import bcrypt from "bcrypt";

import { Article, ArticleObj, Contact, User } from "@/model/definitions";

export { sql };
/**
 * Retrieves all users from the database and returns them as an array of User objects.
 *
 * @return {Promise<User[] | undefined>} A Promise that resolves to an array of User objects, or undefined if an error occurs.
 * @throws {Error} If an error occurs while fetching the users.
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
 * Retrieves a user from the database based on the provided userId.
 *
 * @param {string} userId - The unique identifier of the user.
 * @return {Promise<User | undefined>} A Promise that resolves to the User object if found, or undefined if not found.
 * @throws {Error} If an error occurs while fetching the user.
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
 * Deletes a user from the database based on the provided userId.
 *
 * @param {string} userId - The unique identifier of the user.
 * @return {Promise<void>} A Promise that resolves when the user is deleted, or rejects with an error if the deletion fails.
 * @throws {Error} If an error occurs while deleting the user.
 */
export async function deleteUser(userId: string): Promise<void> {
  try {
    const user = await sql`DELETE FROM users WHERE id=${userId}`;
  } catch (error) {
    console.error("Failed to delete user:", error);
    throw new Error("Failed to delete user.");
  }
}

/**
 * Updates a user in the database with the provided user object.
 *
 * @param {User} user - The user object containing the updated user data.
 * @return {Promise<User | undefined>} A Promise that resolves to the updated User object if successful, or undefined if the update fails.
 * @throws {Error} If an error occurs while updating the user.
 */
export async function updateUser(user: User): Promise<User | undefined> {
  try {
    const hashedPassword = user.password
      ? await bcrypt.hash(user.password, 10)
      : undefined;
    const result = await sql<User>`
        UPDATE users 
        SET name = ${user.name}, email = ${user.email}, password = ${
      hashedPassword ?? "$1"
    }, rule = ${user.rule}
        WHERE id=${user.id}
        RETURNING *`;
    return result.rows[0];
  } catch (error) {
    console.error("Failed to update user:", error);
    throw new Error("Failed to update user.");
  }
}

/**
 * Updates a user's password in the database with the provided user object.
 *
 * @param {User} user - The user object containing the updated user data.
 * @return {Promise<void>} A Promise that resolves when the password is updated, or rejects with an error if the update fails.
 * @throws {Error} If an error occurs while updating the user's password.
 */
export async function updateUserPassword(user: User): Promise<void> {
  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    await sql`
      UPDATE users
      SET password = ${hashedPassword}
      WHERE id=${user.id}`;
  } catch (error) {
    console.error("Failed to update user password:", error);
    throw new Error("Failed to update user password.");
  }
}

/**
 * Retrieves a user from the database by their email address.
 *
 * @param {string} email - The email address of the user.
 * @returns {Promise<User | undefined>} A Promise that resolves to the User object if found, or undefined if not found.
 * @throws {Error} If an error occurs while retrieving the user.
 */
export async function getUserByEmail(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}
/**
 * Creates a new user in the database.
 *
 * @param {User} user - The user object containing the user's information.
 * @return {Promise<User | undefined>} A Promise that resolves to the created User object if successful, or undefined if the creation fails.
 * @throws {Error} If an error occurs while creating the user.
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
 * Retrieves articles from the database based on the specified type.
 *
 * @param {string} type - The type of articles to retrieve.
 * @return {Promise<Article[] | undefined>} A Promise that resolves to an array of Article objects if successful, or undefined if no articles are found.
 * @throws {Error} If an error occurs while fetching the articles.
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
 * Retrieves all articles from the database ordered by article date in descending order.
 *
 * @return {Promise<Article[] | undefined>} A Promise that resolves to an array of Article objects if successful, or undefined if no articles are found.
 * @throws {Error} If an error occurs while fetching the articles.
 */
export async function getAllArticles(): Promise<Article[] | undefined> {
  try {
    const articles =
      await sql<Article>`SELECT * FROM articles ORDER BY article_date DESC`;
    return articles.rows;
  } catch (error) {
    console.error(`Failed to fetch all articles:`, error);
    throw new Error(`Failed to fetch all articles}.`);
  }
}
/**
 * Retrieves the latest articles from the database.
 *
 * @return {Promise<Article[] | undefined>} A promise that resolves to an array of Article objects representing the latest articles, or undefined if no articles are found.
 * @throws {Error} If there is an error fetching the latest articles.
 */
export async function getLatestArticles(): Promise<Article[] | undefined> {
  try {
    const articles =
      await sql<Article>`SELECT * FROM articles WHERE type in ('blog', 'speechs', 'training', 'consultancy')
        AND is_published=true ORDER BY article_date DESC LIMIT 6`;
    return articles.rows;
  } catch (error) {
    console.error(`Failed to fetch latest article:`, error);
    throw new Error(`Failed to fetch latest article.`);
  }
}
/**
 * Retrieves an article from the database based on the provided permalink.
 *
 * @param {string} permalink - The permalink of the article to retrieve.
 * @return {Promise<Article | undefined>} A Promise that resolves to the retrieved Article object, or undefined if no article is found.
 * @throws {Error} If there is an error fetching the article.
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
 * Retrieves an article from the database by its ID.
 *
 * @param {string} articleId - The ID of the article to retrieve.
 * @return {Promise<Article | undefined>} A Promise that resolves to the retrieved Article object, or undefined if no article is found.
 * @throws {Error} If there is an error fetching the article.
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
 * Deletes an article from the database based on the provided article ID.
 *
 * @param {string} articleId - The ID of the article to be deleted.
 * @return {Promise<void>} A Promise that resolves when the article is successfully deleted.
 * @throws {Error} If there is an error deleting the article.
 */
export async function deleteArticle(articleId: string): Promise<void> {
  try {
    const article = await sql`DELETE * FROM articles WHERE id=${articleId}`;
  } catch (error) {
    console.error("Failed to delete article:", error);
    throw new Error("Failed to delete article.");
  }
}
/**
 * Updates an article in the database with the provided article object.
 *
 * @param {Article} article - The article object containing the updated data.
 * @return {Promise<Article | undefined>} A Promise that resolves to the updated Article object, or undefined if the update fails.
 * @throws {Error} If there is an error updating the article.
 */
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
/**
 * Creates a new article in the database.
 *
 * @param {Article} article - The article object containing the data to be inserted.
 * @return {Promise<Article | undefined>} A Promise that resolves to the newly created Article object, or undefined if the insertion fails.
 * @throws {Error} If there is an error inserting the article.
 */
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
/**
 * Creates a new contact in the database.
 *
 * @param {Contact} contact - The contact object containing the data to be inserted.
 * @return {Promise<Contact | undefined>} A Promise that resolves to the newly created Contact object, or undefined if the insertion fails.
 * @throws {Error} If there is an error inserting the contact.
 */
export async function createContact(
  contact: Contact
): Promise<Contact | undefined> {
  try {
    const result = await sql<Contact>`INSERT INTO contacts 
            (name, email, tel, message)
            VALUES (${contact.name}, ${contact.email}, ${contact.tel}, ${contact.message})
            RETURNING *`;
    return result.rows[0];
  } catch (error) {
    console.error("Failed to create contact:", error);
    throw new Error("Failed to  create contact.");
  }
}
/**
 * Retrieves a list of contacts from the database that have not been hidden.
 *
 * @return {Promise<Contact[] | undefined>} A Promise that resolves to an array of Contact objects, or undefined if the query fails.
 * @throws {Error} If there is an error fetching the contacts.
 */
export async function getContacts(): Promise<Contact[] | undefined> {
  try {
    const contacts =
      await sql<Contact>`SELECT * FROM contacts where hide_contact=false ORDER BY contact_date desc `;
    return contacts.rows;
  } catch (error) {
    console.error("Failed to fetch Contacts:", error);
    throw new Error("Failed to fetch Contacts.");
  }
}
/**
 * Hides a contact in the database by updating the 'hide_contact' field to true for the specified contact ID.
 *
 * @param {string} contactId - The ID of the contact to be hidden.
 * @return {Promise<void>} A Promise that resolves when the contact is successfully hidden, or rejects with an error if the update fails.
 */
export async function hideContact(contactId: string): Promise<void> {
  try {
    const contacts =
      await sql<Contact>`UPDATE contacts set hide_contact=true where id=${contactId}`;
  } catch (error) {
    console.error("Failed to hide Contact:", error);
    throw new Error("Failed to hide Contact.");
  }
}
