import Cards from "@/app/components/Cards";

export default async function Speechs() {
  return (
    <>
      <h1
        className="w-full text-center dark:text-teal-400 text-slate-800 font-extrabold text-3xl p-4"
        style={{ textShadow: "0px 4px 10px gray" }}
      >
        Palestras
      </h1>
      <Cards category="speechs" />
    </>
  );
}
