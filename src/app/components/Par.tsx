import Link from "next/link";

/**
 * Renders a paragraph with a link to the specified target.
 *
 * @param {Object} props - The component props.
 * @param {string} props.text - The text to be rendered inside the link.
 * @param {string} props.target - The target URL for the link.
 * @returns {JSX.Element} - The rendered paragraph element.
 */
const Par = ({
  text,
  target,
}: {
  text: string;
  target: string;
}): JSX.Element => {
  return (
    <>
      <p>
        <Link href={target}>{text}</Link>
      </p>
    </>
  );
};

export default Par;
