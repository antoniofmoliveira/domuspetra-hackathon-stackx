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
      <h1>Upload seu arquivo</h1>

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
        <input
          name="file"
          ref={inputFileRef}
          type="file"
          required
          className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
        />
        <Button type="submit">Upload</Button>
      </form>
      {blob && (
        <div>
          Blob url: <a href={blob.url}>{blob.url}</a>
        </div>
      )}
    </>
  );
}
