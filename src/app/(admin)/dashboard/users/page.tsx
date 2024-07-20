import { Button } from "@/app/components/button";
import UserEditInPlace from "@/app/components/UserEditInPlace";
import UserForm from "@/app/components/UserForm";
import { User, UserObj } from "@/model/definitions";
import { revalidateTag } from "next/cache";
import { headers } from "next/headers";

interface UserRowProp {
  user: User;
}
function UserRow({ user }: UserRowProp) {
  return (
    <tr key={user.id}>
      <td className="p-1">{user.id}</td>
      <td className="p-1">
        <UserEditInPlace userId={user.id} fieldName="name" value={user.name} />
      </td>
      <td className="p-1">
        <UserEditInPlace
          userId={user.email}
          fieldName="email"
          value={user.email}
        />
      </td>
      <td className="p-1">{user.rule}</td>
      <td className="border-spacing-1 border-0 border-black p-2 rounded-md cursor-pointer">
        <Button>Alterar Senha</Button>
      </td>
    </tr>
  );
}

export default async function AdminUsers() {
  const headersList = headers();

  const domain = `${headersList.get("x-forwarded-proto")}://${headersList.get(
    "x-forwarded-host"
  )}`;

  const f = async (basePath: string) => {
    const authorization: string | null = headers().get("authorization");
    const users = await fetch(`${basePath}/api/users`, {
      headers: { authorization: authorization || "" },
      next: { tags: ["User"], revalidate: 60 },
    });
    const j = await users.json();
    return j;
  };

  const data = await f(domain);
  revalidateTag("User");
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
          {data!.map((user: User) => {
            return <UserRow user={user} key={user.id} />;
          })}
          <UserForm />
        </tbody>
      </table>
    </div>
  );
}
