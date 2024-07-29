import { createContact } from "@/lib/db";
import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * POST endpoint for contact form submission.
 * @param {Request} request - The incoming request object.
 * @returns {Promise<NextResponse>} - A promise that resolves to the response object.
 */

export async function POST(request: Request): Promise<NextResponse> {
  const body = await request.json();

  try {
    fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.CAPTCHA_SECRET_KEY}&response=${body["gRecaptchaToken"]}`,
    })
      .then(async (reCaptchaRes) => await reCaptchaRes.json())
      .then(async (reCaptchaRes) => {
        //
        console.info(
          reCaptchaRes,
          "Response from Google reCaptcha verification API"
        );
        //
        if (reCaptchaRes?.score > 0.5) {
          const newContact = await createContact(body);
          //
          const resend = new Resend(process.env.RESEND_KEY);
          const res = await resend.batch.send([
            {
              from: "onboarding@resend.dev",
              to: `${process.env.RESEND_EMAIL}`,
              subject: "Novo Contato",
              html: `</p><p>Novo contato</p>
<p>Nome: ${newContact?.name}</p>
<p>Email: ${newContact?.email}</p>
<p>Tel: ${newContact?.tel}</p>
<p>Mensagem: ${newContact?.message}</p>
<p>Equipe Oliveiras</p>
`,
            },
            {
              from: "onboarding@resend.dev",
              to: `${newContact?.email}`,
              subject: "Domus Petra recebeu sua mensagem",
              html: `<p>${newContact?.name},</p>
            <p></p>Agradecemos seu contato</p>
<p>"""</p>
<p>Mensagem: ${newContact?.message}</p>
<p>"""</p>
<p></p>
<p>Em breve daremos retorno</p>
<p></p>
<p>Domus Petra</p>
<p>Equipe Oliveiras</p>
`,
            },
          ]);
          //
          console.info({ res });
          //
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
