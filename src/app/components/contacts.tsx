import { getContacts, hideContact } from "@/lib/db";

export default async function Contacts() {
  const contacts = await getContacts();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Solicitações de contato</td>
          </tr>
        </thead>
        <tbody>
          if (contacts!=undefined)
          {contacts!.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.tel}</td>
                <td>{item.message}</td>
                <td>
                  <button onClick={() => hideContact(item.id)}>Hide</button>
                </td>
              </tr>
            );
          })}
          else
          {
            <tr>
              <td>Não há solicitações de contato</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  );
}
