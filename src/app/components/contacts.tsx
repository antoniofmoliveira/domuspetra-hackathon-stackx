import ButtonHide from "./ButtonHide";
import { Contact } from "@/model/definitions";
import { headers } from "next/headers";
import { revalidateTag } from "next/cache";

export default async function Contacts() {
  const headersList = headers();

  const domain = `${headersList.get("x-forwarded-proto")}://${headersList.get(
    "x-forwarded-host"
  )}`;

  const f = async (basePath: string) => {
    const authorization: string | null = headers().get("authorization");
    const users = await fetch(`${basePath}/api/contactlist`, {
      headers: { authorization: authorization || "" },
      next: { tags: ["Contact"], revalidate: 60 },
    });
    const j = await users.json();
    return j;
  };

  const contacts: Contact[] = await f(domain);
  revalidateTag("Contact");

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td colSpan={5} className="font-extrabold">
              Solicitações de contato
            </td>
          </tr>
          <tr>
            <td className="font-bold">Nome</td>
            <td className="font-bold">Email</td>
            <td className="font-bold">Telefone</td>
            <td className="font-bold">Mensagem</td>
          </tr>
        </thead>
        <tbody>
          {contacts != undefined ? (
            contacts!.map((item: Contact) => {
              return (
                <tr key={item.id}>
                  <td className="p-1">{item.name}</td>
                  <td className="p-1">
                    <a
                      title="Envie um email"
                      href={`mailto:${item.email}?subject=Domus Petra contato&body=Olá ${item.name},
Recebemos sua mensagem:
"""
${item.message}
"""`}
                    >
                      {item.email}
                    </a>
                  </td>
                  <td title=" Faça uma chamada telefônica" className="p-1">
                    <a href={`tel:${item.tel}`}>{item.tel}</a>
                  </td>
                  <td className="p-1">{item.message}</td>
                  <td className="p-1">
                    <ButtonHide contactId={item.id} />
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>Não há solicitações de contato</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
