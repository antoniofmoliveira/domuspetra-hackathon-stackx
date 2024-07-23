import { createContact } from "@/lib/db";
import { NextResponse } from "next/server";
import { env } from "process";
import { Resend } from "resend";

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
          //
          const resend = new Resend(env.RESEND_KEY);
          const res = await resend.batch.send([
            {
              from: "domuspetra@resend.dev",
              to: `${env.RESEND_EMAIL}`,
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
              from: "domuspetra@resend.dev",
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
          console.log({ res });
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
