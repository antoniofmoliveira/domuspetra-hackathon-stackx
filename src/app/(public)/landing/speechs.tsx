import Link from 'next/link'
import React from 'react'

const SpeechsBlock = () => {
    return (
        <div className="card text-center text-2xl border-2 border-slate-700 rounded-md  m-1">
            <h1 className={"font-extrabold text-2xl"}>Palestras</h1>
            <p className={"text-xl p-2"}>
                As palestras são dinâmicas, com linguagem coerente com o público, e
                com mensagens incisivas e marcantes, tornando a experiência algo
                duradouro com alto potencial de mudanças.
            </p>
            <div className="btn btn-inverted">
                <Link href={"/speechs"}>LEIA MAIS</Link>
            </div>
        </div>
    )
}

export default SpeechsBlock