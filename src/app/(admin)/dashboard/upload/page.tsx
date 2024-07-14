"use client";

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
        <input name="file" ref={inputFileRef} type="file" required />
        <button type="submit">Upload</button>
      </form>
      {blob && (
        <div>
          Blob url: <a href={blob.url}>{blob.url}</a>
        </div>
      )}
    </>
  );
}
