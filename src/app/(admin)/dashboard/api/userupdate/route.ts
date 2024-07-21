import {
  createArticle,
  createUser,
  getUser,
  updateUser,
  updateUserPassword,
} from "@/lib/db";
import { Article, User } from "@/model/definitions";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  const body = await request.json();
  const updatedUser = await getUser(body["userId"]);
  switch (body["fieldName"]) {
    case "name":
      updatedUser!.name = body["value"];
      updateUser(updatedUser!);
      break;
    case "email":
      updatedUser!.email = body["value"];
      updateUser(updatedUser!);
      break;
    case "rule":
      updatedUser!.rule = body["value"];
      updateUser(updatedUser!);
      break;
    case "password":
      updatedUser!.name = body["value"];
      updateUserPassword(updatedUser!);
      break;
    default:
      break;
  }
  return NextResponse.json({ message: "ok" });
}
