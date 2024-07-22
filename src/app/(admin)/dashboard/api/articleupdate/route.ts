import { NextResponse } from "next/server";

import { getArticleById, updateArticle } from "@/lib/db";

export async function POST(request: Request): Promise<NextResponse> {
  const body = await request.json();
  const updatedArticle = await getArticleById(body["articleId"]);
  switch (body["fieldName"]) {
    case "type":
      updatedArticle!.type = body["value"];
      updateArticle(updatedArticle!);
      break;
    case "permalink":
      updatedArticle!.permalink = body["value"];
      updateArticle(updatedArticle!);
      break;
    case "external_url":
      updatedArticle!.external_url = body["value"];
      updateArticle(updatedArticle!);
      break;
    case "title":
      updatedArticle!.title = body["value"];
      updateArticle(updatedArticle!);
      break;
    case "summary":
      updatedArticle!.summary = body["value"];
      updateArticle(updatedArticle!);
      break;
    case "content_url":
      updatedArticle!.content_url = body["value"];
      updateArticle(updatedArticle!);
      break;
    case "image_url":
      updatedArticle!.image_url = body["value"];
      updateArticle(updatedArticle!);
      break;
    case "is_published":
      updatedArticle!.is_published = body["value"];
      updateArticle(updatedArticle!);
      break;
    case "has_no_content":
      updatedArticle!.has_no_content = body["value"];
      updateArticle(updatedArticle!);
      break;
    default:
      break;
  }
  return NextResponse.json({ message: "ok" });
}
