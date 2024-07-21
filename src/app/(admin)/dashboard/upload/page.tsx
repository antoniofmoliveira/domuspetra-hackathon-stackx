"use client";

import { Button } from "@/app/components/button";
import type { PutBlobResult } from "@vercel/blob";
import { useState, useRef } from "react";

/**
 * upload de blobs de imagem e textos dos artigos
 * no caso de sucesso exibe a url do blob para informação no
 * registro do artigo
 *
 * */
export default function UploadPage() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  return (
    <>
      <h1 className="p-2 font-bold">Upload seu arquivo</h1>

      <form
        onSubmit={async (event) => {
          event.preventDefault();

          if (!inputFileRef.current?.files) {
            throw new Error("Nenhum arquivo selecionado");
          }

          const file = inputFileRef.current.files[0];

          const response = await fetch(
            `/dashboard/api/upload?filename=${file.name}`,
            {
              method: "POST",
              body: file,
            }
          );

          const newBlob = (await response.json()) as PutBlobResult;

          setBlob(newBlob);
        }}
      >
        <div className="flex flex-row w-[350px] m-1 rounded-lg p-3   shadow-2xl border-hidden shadow-zinc-400 hover:shadow-blue-400">
          <input
            name="file"
            ref={inputFileRef}
            type="file"
            required
            className="w-[75%] file:border-0 file:bg-blue-500 file:rounded-lg file:px-4 file:py-2 file:color-white file:hover:bg-blue-400 file:text-white flex h-10 items-center rounded-lg  px-4 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
          />
          <Button type="submit" className="p-2 font-bold">
            Upload
          </Button>
        </div>
      </form>

      {blob && (
        <div className="p-2 font-bold">
          Blob url: <a href={blob.url}>{blob.url}</a>
        </div>
      )}
    </>
  );
}
