import { createContact } from "@/lib/db";
import { NextResponse } from "next/server";
import { env } from "process";

export async function POST(request: Request): Promise<NextResponse> {
  const body = await request.json();
  try {
    fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${env.CAPTCHA_SECRET_KEY}&response=${body["gRecaptchaToken"]}`,
    })
      .then((reCaptchaRes) => reCaptchaRes.json())
      .then(async (reCaptchaRes) => {
        console.log(
          reCaptchaRes,
          "Response from Google reCaptcha verification API"
        );
        if (reCaptchaRes?.score > 0.5) {
          const newContact = await createContact(body);
          return NextResponse.json({
            status: "success",
            message: "Enquiry submitted successfully",
          });
        } else {
          return NextResponse.json({
            status: "failure",
            message: "Google ReCaptcha Failure",
          });
        }
      });
  } catch (err) {
    return NextResponse.json({
      status: "405",
      message: "Error submitting the enquiry form",
    });
  }
  return NextResponse.json({
    status: "405",
    message: "Error submitting the enquiry form",
  });
}
