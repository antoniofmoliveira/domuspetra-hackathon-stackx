import { createArticle } from "@/lib/db";
import { Article } from "@/model/definitions";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  const body = await request.json();
  const newPost = await createArticle(body);
  console.log(JSON.stringify(newPost));
  return NextResponse.json(`{}`);
}

// /**
//  * cria tabela de artigos
//  */
// async function createTableArticles() {
//   await client.sql`
//       CREATE TABLE IF NOT EXISTS articles (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         type TEXT NOT NULL,
//         permalin TEXT NOT NULL UNIQUE,
//         external_url TEXT,
//         title TEXT NOT NULL,
//         summary TEXT NOT NULL,
//         content_url TEXT,
//         image TEXT NOT NULL,
//         article_date TIMESTAMP NOT NULL DEFAULT now(),
//         is_published BOOLEAN DEFAULT FALSE,
//         has_no_content BOOLEAN DEFAULT FALSE,
//         is_external_url_an_iframe BOOLEAN DEFAULT FALSE
//         );
//     `;
// }
