import Image from "next/image";
import Card from "../../components/card";

export default async function Blog() {
  return (
    <>
      <div>Blog Page</div>
      <Card
        img="/src/app/(public)/blog/26_29-10-2014_33d8b45781.jpg"
        title="Ah, meu Brasil!"
        subtitle="Como fica o Brasil passadas as eleições de 2014?"
      />
    </>
  );
}
