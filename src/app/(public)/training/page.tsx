import Cards from "@/app/components/Cards";

export default async function Blogs() {
  return (
    <>
      <h1
        className="w-full text-center dark:text-teal-400 text-slate-800 font-extrabold text-3xl p-4"
        style={{ textShadow: "0px 4px 10px gray" }}
      >
        Treinamentos
      </h1>
      <Cards category="training" />
    </>
  );
}
