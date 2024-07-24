import Contacts from "@/app/components/Contacts";
/**
 * Dashboard page
 *
 * @returns {Promise<JSX.Element>} The Dashboard page
 */
export default async function Dashboard(): Promise<JSX.Element> {
  return (
    <>
      {/* This is the dashboard page, it displays the contacts */}
      <Contacts />
    </>
  );
}
