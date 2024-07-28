import { headers } from "next/headers";
import { revalidateTag } from "next/cache";

import ButtonHide from "./ButtonHide";
import { Contact } from "@/model/definitions";
/**
 * @function Contacts
 * @description The contacts page of the application.
 *
 * This page displays all the contacts, sorted by date.
 *
 * @return {JSX.Element} The rendered component.
 */
export default async function Contacts(): Promise<JSX.Element> {
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
    <div className={"flex flex-col content-center w-full items-center"}>
      <table className="">
        <thead>
          <tr className="">
            <td colSpan={5} className="font-extrabold">
              Solicitações de contato
            </td>
          </tr>
        </thead>
        <tbody>
          {contacts != undefined ? (
            contacts!.map((item: Contact) => {
              return (
                <>
                  <tr
                    key={item.id}
                    className={
                      "hidden lg:block shadow-md border-hidden shadow-zinc-400 mb-2 rounded-lg  hover:shadow-blue-200"
                    }
                  >
                    <td className="p-1">
                      <p className="p-1">
                        {item.name}&nbsp; (&nbsp;
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
                        &nbsp;)&nbsp; (&nbsp;
                        <a
                          title=" Faça uma chamada telefônica"
                          href={`tel:${item.tel}`}
                        >
                          {item.tel}
                        </a>
                        &nbsp;)
                      </p>
                      <p className="p-1"> {item.message}</p>
                    </td>

                    <td className="p-1 w-[5%]">
                      <ButtonHide contactId={item.id} />
                    </td>
                  </tr>

                  <tr
                    key={item.id}
                    className={
                      "w-full block lg:hidden shadow-md border-hidden shadow-zinc-400"
                    }
                  >
                    <td colSpan={5}>
                      <p className="p-1">Nome: {item.name}</p>
                      <p className="p-1">
                        Email:{" "}
                        <a
                          title="Envie um email"
                          href={`mailto:${item.email}?subject=Domus Petra contato&body=Olá ${item.name},
Recebemos sua mensagem:
"""
${item.message}
"""`}
                        >
                          {item.email}
                        </a>{" "}
                      </p>
                      <p className="p-1">
                        Telefone: <a href={`tel:${item.tel}`}>{item.tel}</a>
                      </p>
                      <p className="p-1">Mensagem: {item.message}</p>
                      <div
                        className={
                          " flex flex-row content-center w-full items-center p-2"
                        }
                      >
                        <ButtonHide contactId={item.id} />
                      </div>
                    </td>
                  </tr>
                </>
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
