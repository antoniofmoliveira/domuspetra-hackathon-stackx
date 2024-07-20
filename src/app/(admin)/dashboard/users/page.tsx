import { Button } from "@/app/components/button";
import { getUsers } from "@/lib/db";
import { User } from "@/model/definitions";
interface UserRowProp {
  user: User;
}
function UserRow({ user }: UserRowProp) {
  return (
    <tr key={user.id}>
      <td className="p-1">{user.id}</td>
      <td className="p-1">{user.name}</td>
      <td className="p-1">{user.email}</td>
      <td className="p-1">{user.rule}</td>
      <td className="border-spacing-1 border-0 border-black p-2 rounded-md cursor-pointer">
        <Button>Editar</Button>
      </td>
      <td className="border-spacing-1 border-0 border-black p-2 rounded-md cursor-pointer">
        <Button>Alterar Senha</Button>
      </td>
    </tr>
  );
}

export default async function AdminUsers() {
  const users = await getUsers();
  //   const users = await fetch(
  //     "https://domuspetra-hackathon-stackx.vercel.app/api/users",
  //     {
  //       next: { tags: ["User"] },
  //     }
  //   );
  //   const j = await users.json();
  //   //   console.log(j);
  //   const data = j;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td className="p-1 font-extrabold">Usuários</td>
          </tr>
          <tr>
            <td className="p=1 font-bold">Id</td>
            <td className="p=1 font-bold">Nome</td>
            <td className="p=1 font-bold">Email</td>
            <td className="p=1 font-bold">Autorização</td>
          </tr>
        </thead>
        <tbody>
          {users!.map((user: User) => {
            return <UserRow user={user} key={user.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
