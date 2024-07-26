import { revalidateTag } from "next/cache";
import { headers } from "next/headers";
import UserSelectInPlace from "@/app/components/UserSelectInPlace";

import { User } from "@/model/definitions";

import { Button } from "@/app/components/Button";
import UserEditInPlace from "@/app/components/UserEditInPlace";
import UserForm from "@/app/components/UserForm";

interface UserRowProps {
  user: User;
}

/**
 * The component that renders a row in the user dashboard table.
 *
 * @param {UserRowProp} props - The properties of the component.
 * @param {User} props.user - The user object to be displayed.
 * @returns {JSX.Element} The rendered component.
 */
function UserRow({ user }: UserRowProps): JSX.Element {
  return (
    <tr
      key={user.id}
      className="rounded-lg shadow-lg border-hidden shadow-zinc-400 hover:shadow-blue-200"
    >
      <td className="p-1">
        <p>
          <em>Id:&nbsp;</em>
          {user.id}
        </p>
        <UserEditInPlace
          tag="Nome"
          userId={user.id}
          fieldName="name"
          value={user.name}
        />
        <UserEditInPlace
          tag="Email"
          userId={user.id}
          fieldName="email"
          value={user.email}
        />
        <UserSelectInPlace
          tag="Autorização"
          userId={user.id}
          fieldName="rule"
          value={user.rule}
          options={["editor", "admin"]}
        />
        {/* <div className={"flex flex-col content-center w-full items-center"}>
          <Button>Alterar Senha</Button>
        </div> */}
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
    <div className={"flex flex-col content-center w-full items-center"}>
      <table>
        <thead>
          <tr>
            <td className="p-1 font-extrabold">Usuários</td>
          </tr>
          {/* <tr className=" shadow-md border-hidden shadow-zinc-400">
            <td className="p=1 font-bold">Id</td>
            <td className="p=1 font-bold">Nome</td>
            <td className="p=1 font-bold">Email</td>
            <td className="p=1 font-bold">Autorização</td>
          </tr> */}
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
