import Image from "next/image";
import showdown from "showdown";

export default async function Blog() {
  const blog = await fetch(
    "https://igokyqfhjd9mjhcm.public.blob.vercel-storage.com/texto1-u0d9lkp0XSbIo6TpsnLDMUwjU7I8oF.txt"
  );
  const content = blog.text();
  //   const convert = new showdown.Converter();
  //   const chtml = convert.makeHtml(await content);
  const chtml = await content;
  return (
    <>
      <div>Blog Page</div>
      <div>
        <Image
          src="https://igokyqfhjd9mjhcm.public.blob.vercel-storage.com/26_29-10-2014_33d8b45781-Y5UcPPDYBB1jnEq85109DlTmftCFTu.jpg"
          alt="alt"
          width={268}
          height={188}
        />
      </div>
      <div className="post" dangerouslySetInnerHTML={{ __html: chtml }}></div>
    </>
  );
}
