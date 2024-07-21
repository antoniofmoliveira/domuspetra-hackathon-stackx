import Link from "next/link";
import React from "react";

const SpeechsBlock = () => {
  return (
    <div className="rounded-3xl border-2 border-stone-700 text-center shadow-2xl border-hidden shadow-zinc-400 m-1  hover:shadow-blue-400">
      <h1 className={"font-bold text-xl pt-2"}>Palestras</h1>
      <p className={"text-base p-2"}>
        As palestras são dinâmicas, com linguagem coerente com o público, e com
        mensagens incisivas e marcantes, tornando a experiência algo duradouro
        com alto potencial de mudanças.
      </p>
      <div className="btn btn-inverted">
        <Link
          href={"/speechs"}
          className="items-center justify-center rounded-full text-white-950 font-bold bg-blue-600 p-2 pr-5 pl-5  m-auto shadow shadow-black"
        >
          <i className="fa-solid fa-share"></i> LEIA MAIS
        </Link>
      </div>
    </div>
  );
};

export default SpeechsBlock;
