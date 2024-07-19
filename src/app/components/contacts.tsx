import { getContacts } from "@/lib/db";
import ButtonHide from "./ButtonHide";
import { Contact } from "@/model/definitions";

export default async function Contacts() {
  const contacts = await getContacts();
  //   let contacts: Contact[] = [];

  //   const result = fetch("http://localhost:3000/api/contactlist", {
  //     method: "GET",
  //     next: { revalidate: 60 },
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     // body: JSON.stringify({}),
  //   }).then(async (res) => {
  //     // console.log(res);
  //     const j = await res.json();
  //     contacts = j as unknown as Contact[];
  //   });

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
            contacts!.map((item) => {
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
