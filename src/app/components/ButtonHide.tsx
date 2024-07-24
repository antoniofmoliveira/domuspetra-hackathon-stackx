"use client";

import { useRouter } from "next/navigation";
import { Button } from "./Button";

interface ButtonHideProps {
  contactId: string;
}

/**
 * ButtonHide component.
 *
 * This component renders a button that allows the user to hide a contact.
 *
 * @param {ButtonHideProps} props - The properties of the ButtonHide component.
 * @param {string} props.contactId - The ID of the contact to hide.
 * @return {JSX.Element} The rendered ButtonHide component.
 */
function ButtonHide({ contactId }: ButtonHideProps) {
  const router = useRouter();
  const onClickHide = (contactId: string) => {
    const result = fetch("/dashboard/api/contacthide", {
      method: "POST",
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ contactId: contactId }),
    }).then(() => {
      router.refresh();
    });
    // router.refresh();
  };
  return (
    <Button
      title="Oculta este contato"
      className="border-spacing-1 border-2 border-black p-2 rounded-md cursor-pointer"
      onClick={() => onClickHide(contactId)}
    >
      Ocultar
    </Button>
  );
}

export default ButtonHide;
