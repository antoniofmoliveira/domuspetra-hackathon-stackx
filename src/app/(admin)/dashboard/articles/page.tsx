"use client";

import { useRouter } from "next/navigation";
import {
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  useRef,
  useState,
} from "react";
import { PutBlobResult } from "@vercel/blob";

import { Button } from "@/app/components/button";
import { Article, ArticleObj } from "@/model/definitions";

/**
 * formulário para envio de artigos, imagens e arquivos
 * @returns
 */
export default function ArticlesAdmin() {
  const inputImageFileRef = useRef<HTMLInputElement>(null);
  const inputContentFileRef = useRef<HTMLInputElement>(null);
  const [blobImage, setBlobImage] = useState<PutBlobResult | null>(null);
  const [blobText, setBlobText] = useState<PutBlobResult | null>(null);
  const [article, setArticle] = useState<Article>(new ArticleObj());

  const router = useRouter();
  /**
   * submissão de arquivo de imagem
   * @param event
   */
  const on_submit_image = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputImageFileRef.current?.files) {
      throw new Error("Nenhum arquivo selecionado");
    }
    const file = inputImageFileRef.current.files[0];
    const response = await fetch(
      `/dashboard/api/upload?filename=${file.name}`,
      {
        method: "POST",
        body: file,
      }
    );
    const newBlob = (await response.json()) as PutBlobResult;
    setBlobImage(newBlob);
    setArticle((prevState) => ({ ...prevState, image_url: newBlob.url }));
  };

  /**
   * submissão de arquivo de conteúdo
   *
   * @param event
   */
  const on_submit_file = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputContentFileRef.current?.files) {
      throw new Error("Nenhum arquivo selecionado");
    }
    const file = inputContentFileRef.current.files[0];
    const response = await fetch(
      `/dashboard/api/upload?filename=${file.name}`,
      {
        method: "POST",
        body: file,
      }
    );
    const newBlob = (await response.json()) as PutBlobResult;
    setBlobText(newBlob);
    setArticle((prevState) => ({ ...prevState, content_url: newBlob.url }));
  };

  /**
   * submissão do formulário principal
   *
   * @param event
   */
  const on_submit_article: FormEventHandler<HTMLFormElement> = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const response = await fetch(`/dashboard/api/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(article),
    });
    router.push(`/dashboard/articles/${article.permalink}`);
  };

  /**
   * tratamento dos select
   * @param event
   */
  const on_change_select_handler: ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    const value = event.target.value;
    const element = event.target.id;
    switch (element) {
      case "article_type":
        setArticle((prevState) => ({ ...prevState, type: value }));
        break;
      case "article_is_published":
        setArticle((prevState) => ({
          ...prevState,
          is_published: value === "true",
        }));
        break;
      case "article_is_external_url_an_iframe":
        setArticle((prevState) => ({
          ...prevState,
          is_external_url_an_iframe: value === "true",
        }));
        break;

      default:
        break;
    }
  };

  /**
   * tratamento dos inputs
   * @param event
   */
  const on_change_input_handler: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const value = event.target.value;
    const element = event.target.id;
    switch (element) {
      case "article_title":
        setArticle((prevState) => ({ ...prevState, title: value }));
        break;
      case "article_summary":
        setArticle((prevState) => ({ ...prevState, summary: value }));
        break;
      case "article_permalink":
        setArticle((prevState) => ({ ...prevState, permalink: value }));
        break;
      case "article_image_url":
        setArticle((prevState) => ({ ...prevState, image_url: value }));
        break;
      case "article_content_url":
        setArticle((prevState) => ({ ...prevState, content_url: value }));
        break;
      case "article_external_url":
        setArticle((prevState) => ({ ...prevState, external_url: value }));
        break;
      default:
        break;
    }
  };

  return (
    <div
      className={"flex flex-col content-center sm:w-[85%] w-full items-center"}
    >
      <div className=" flex flex-col">
        <div className="p2 font-extrabold">Cadastrar um artigo</div>
      </div>
      <div className="m-1 rounded-lg p-3 w-[500px] max-[500px] border-2 border-cyan-950   shadow-2xl border-hidden shadow-zinc-400 hover:shadow-blue-400">
        <form onSubmit={on_submit_image}>
          <table className="form">
            <tbody>
              <tr>
                <td colSpan={2} className="p-2 font-bold">
                  Passo 1: Envie uma imagem e receba o link a ser utilizado no
                  cadastro do artigo (jpg, png)
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    name="fileImage"
                    ref={inputImageFileRef}
                    type="file"
                    title="Selecione imagem"
                    required
                    className="w-[75%] file:border-0 file:bg-blue-500 file:rounded-lg file:px-4 file:py-2 file:color-white file:hover:bg-blue-400 file:text-white flex h-10 items-center rounded-lg  px-4 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
                  />
                </td>
                <td>
                  <Button className="w-[130px]" type="submit">
                    Envia arquivo
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
      <div>
        <div className="m-1 rounded-lg p-3 w-[500px] max-[500px] border-2 border-cyan-950   shadow-2xl border-hidden shadow-zinc-400 hover:shadow-blue-400">
          <form onSubmit={on_submit_file}>
            <table className="form">
              <tbody>
                <tr>
                  <td colSpan={2}>
                    <hr />
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} className="p-2 font-bold">
                    Passo 2: Envie uma arquivo com o conteúdo e receba o link a
                    ser utilizado no cadastro do artigo (xml, html, txt, md)
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      name="fileContent"
                      ref={inputContentFileRef}
                      type="file"
                      required
                      className="w-[75%] file:border-0 file:bg-blue-500 file:rounded-lg file:px-4 file:py-2 file:color-white file:hover:bg-blue-400 file:text-white flex h-10 items-center rounded-lg  px-4 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
                    />
                  </td>
                  <td>
                    <Button className="w-[130px]" type="submit">
                      Envia arquivo
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
        <div className="m-1 rounded-lg p-3 w-[500px] max-[500px] border-2 border-cyan-950   shadow-2xl border-hidden shadow-zinc-400 hover:shadow-blue-400">
          <form onSubmit={on_submit_article}>
            <table className="form">
              <tbody>
                <tr>
                  <td colSpan={2} className="p-2 font-bold">
                    Passo 3: Preencha os campos obrigatórios
                  </td>
                </tr>
                <tr>
                  <td className="p-1 w-[150px] min-w-[150px]">
                    <label>Tipo de artigo</label>
                  </td>
                  <td className="p-1 w-[350px] min-w-[350px]  dark:text-black text-black">
                    <select
                      id="article_type"
                      value={"blog"}
                      onChange={on_change_select_handler}
                      className="w-[95%]"
                    >
                      <option value={"blog"}>Blog Post</option>
                      <option value={"record"}>Testemunho</option>
                      <option value={"training"}>Treinamento</option>
                      <option value={"consultancy"}>Consultoria</option>
                      <option value={"speechs"}>Palestra</option>
                      <option value={"about"}>Sobre nós</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className="p-1">*Título:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="article_title"
                      onChange={on_change_input_handler}
                      placeholder="Título do artigo, obrigatório"
                      required
                      className="p-1 w-[95%]"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className="p-1">*Resumo:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="article_summary"
                      onChange={on_change_input_handler}
                      placeholder="Resumo do artigo, obrigatório"
                      required
                      className="p-1 w-[95%]"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className="p-1">*Permalink:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="article_permalink"
                      onChange={on_change_input_handler}
                      placeholder="permalink_em_letras_minusculas_sem_acento, obrigatório"
                      required
                      className="p-1 w-[95%]"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className="p-1">*Url da imagem:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="article_image_url"
                      onChange={on_change_input_handler}
                      value={blobImage?.url}
                      placeholder="Url da imagem"
                      required
                      className="p-1 w-[95%]"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className="p-1">Url do conteúdo:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="article_content_url"
                      onChange={on_change_input_handler}
                      value={blobText?.url}
                      placeholder="Url do conteúdo"
                      className="p-1 w-[95%]"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className="p-1">Url externa:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="article_external_url"
                      onChange={on_change_input_handler}
                      placeholder="URL externa, se houver"
                      className="p-1 w-[95%]"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className="p-1">Publicar?:</label>
                  </td>
                  <td>
                    <select
                      id="article_is_published"
                      onChange={on_change_select_handler}
                      className="p-1  dark:text-black text-black"
                      value={"true"}
                    >
                      <option value={"false"}>Não</option>
                      <option value={"true"}>Sim</option>
                    </select>
                    {/* <label className="p-1">Colocar em iframe?:</label>
                    <select
                      id="article_is_external_url_an_iframe"
                      onChange={on_change_select_handler}
                      className="p-1"
                      value={"false"}
                    >
                      <option value={"false"}>Não</option>
                      <option value={"true"}>Sim</option>
                    </select> */}
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} className="p-1 align-middle ">
                    <div>
                      <Button
                        type="submit"
                        id="btnSend"
                        className=" w-[150px] text-black flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-bold  hover:bg-blue-400 md:flex-none  md:p-2 md:px-3"
                      >
                        Enviar
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
}
