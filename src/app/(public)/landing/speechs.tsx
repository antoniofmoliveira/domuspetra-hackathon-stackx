import Link from 'next/link'
import React from 'react'

const SpeechsBlock = () => {
    return (
        <div className="text-center text-2xl border-hidden shadow-[0px_-1px_0px_0px_rgba(0,0,0,0.1)] shadow-zinc-400 m-1">
            <h1 className={"font-extrabold text-3xl pt-2"}>Palestras</h1>
            <p className={"text-xl p-2"}>
                As palestras são dinâmicas, com linguagem coerente com o público, e
                com mensagens incisivas e marcantes, tornando a experiência algo
                duradouro com alto potencial de mudanças.
            </p>
            <div className="btn btn-inverted">
                <Link href={"/speechs"} className="text-amber-950 font-bold">LEIA MAIS</Link>
            </div>
        </div>
    )
}

export default SpeechsBlock