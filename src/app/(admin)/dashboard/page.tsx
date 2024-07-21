import Contacts from "@/app/components/contacts";
import { getContacts, hideContact } from "@/lib/db";

export default async function Dashboard() {
  return (
    <>
      <Contacts />
    </>
  );
}
