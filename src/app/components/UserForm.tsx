"use client";
import { UserObj } from "@/model/definitions";
import { ChangeEventHandler, useState } from "react";
import { Button } from "./button";
import { useRouter } from "next/navigation";

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
  };
  return (
    <tr>
      <td className="font-bold">Cadastre novo usuário</td>
      <td>
        <input
          id="newName"
          type="text"
          required
          onChange={on_change_input_handler}
          value={user.name}
          placeholder="Nome do novo usuário"
        />
      </td>
      <td>
        <input
          id="newEmail"
          type="email"
          required
          onChange={on_change_input_handler}
          value={user.email}
          placeholder="Email do novo usuário"
        />
      </td>
      <td>
        <select id="newRule" value="editor" onChange={on_change_select_handler}>
          <option value="editor">editor</option>
          <option value="admin">admin</option>
        </select>
      </td>
      <td className="border-spacing-1 border-0 border-black p-2 rounded-md cursor-pointer">
        <Button onClick={saveUser}>Enviar</Button>
      </td>
    </tr>
  );
}
