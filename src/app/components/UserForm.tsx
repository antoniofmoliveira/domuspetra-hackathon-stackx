"use client";
import { UserObj } from "@/model/definitions";
import { ChangeEventHandler, useState } from "react";
import { Button } from "./Button";
import { useRouter } from "next/navigation";
import { z } from "zod";

/**
 * UserForm component
 *
 * This component is used to create a new user.
 *
 * @component
 * @example
 * <UserForm />
 */
export default function UserForm() {
  const [user, setUser] = useState(new UserObj());
  const router = useRouter();

  const on_change_select_handler: ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    const value = event.target.value;
    const element = event.target.id;
    switch (element) {
      case "newRule":
        setUser((prevState) => ({ ...prevState, rule: value }));
        break;
      default:
        break;
    }
  };

  const on_change_input_handler: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const value = event.target.value;
    const element = event.target.id;
    switch (element) {
      case "newName":
        setUser((prevState) => ({ ...prevState, name: value }));
        break;
      case "newEmail":
        setUser((prevState) => ({ ...prevState, email: value }));
        break;
      default:
        break;
    }
  };

  const saveUser = async () => {
    const parsedCredentials = z
      .object({ email: z.string().email(), password: z.string().min(6) })
      .safeParse(user);
    if (parsedCredentials.success) {
      const response = await fetch(`/dashboard/api/user`, {
        method: "POST",
        next: { tags: ["User"], revalidate: 60 },
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      setUser(new UserObj());
      router.push(`/dashboard/users`);
    } else {
      alert("Nome ou email inválidos");
    }
  };
  return (
    <>
      <tr className="">
        <td className="pt-4 font-bold">Cadastre novo usuário</td>
      </tr>
      <tr className="rounded-lg shadow-lg border-hidden shadow-zinc-400 hover:shadow-blue-200 text-black">
        <td>
          <p className="m-1 dark:text-white text-black">
            Nome:&nbsp;
            <input
              id="newName"
              type="text"
              required
              onChange={on_change_input_handler}
              value={user.name}
              placeholder="Nome do novo usuário"
            />
          </p>
          <p className="m-1 dark:text-white text-black">
            Email:&nbsp;&nbsp;
            <input
              id="newEmail"
              type="email"
              required
              onChange={on_change_input_handler}
              value={user.email}
              placeholder="Email do novo usuário"
            />
          </p>
          <p className="m-1 dark:text-white text-black">
            Autorização:&nbsp;
            <select
              className="m-1 dark:text-black"
              id="newRule"
              value="editor"
              onChange={on_change_select_handler}
            >
              <option value="editor">editor</option>
              <option value="admin">admin</option>
            </select>
          </p>
          <div className={"flex flex-col content-center w-full items-center"}>
            <Button onClick={saveUser}>Enviar</Button>
          </div>
        </td>
      </tr>
    </>
  );
}
