import Link from "next/link";

const Par = ({ text, target }: { text: string; target: string }) => {
  return (
    <>
      <p>
        <Link href={target}>{text}</Link>
      </p>
    </>
  );
};

export default Par;
