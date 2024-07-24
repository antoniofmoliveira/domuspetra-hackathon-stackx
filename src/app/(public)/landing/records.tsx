import RecordsCards from "@/app/components/RecordsCards";
/**
 * Component to display a list of records.
 *
 * This component is used in the landing page to display a list of records.
 * It uses the RecordsCards component to display the records.
 *
 * @returns {Promise<JSX.Element>} The React component.
 */
export default async function RecordsBlock() {
  return <RecordsCards category="record" />;
}
