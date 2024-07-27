"use client";
import {
  ChangeEvent,
  ChangeEventHandler,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import showdown from "showdown";
import "./page.css";
import { Button } from "@/app/components/Button";
/**
 * Component for Markdown Editor.
 *
 * @returns {JSX.Element} The Markdown Editor component.
 */
function MDEditor() {
  // Reference to the editor textarea element.
  const refEditor = useRef<HTMLTextAreaElement>(null);
  // Reference to the rendered HTML element.
  const refDisplay = useRef<HTMLDivElement>(null);
  // Converter for Markdown to HTML.
  const converter = new showdown.Converter();

  // State for the text in the editor.
  const [text, setText] = useState("");
  // State for the rendered HTML.
  const [chtml, setChtml] = useState("");

  /**
   * Event handler for when the text in the editor changes.
   *
   * @param {ChangeEvent<HTMLTextAreaElement>} event - The event object.
   * @return {void}
   */
  const onChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = (
    event: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setText(event.target.value);
    setChtml(converter.makeHtml(event.target.value));
  };

  /**
   * Event handler for when the 'Salvar arquivo' button is clicked.
   * Prompts the user for a file name and downloads the markdown content.
   *
   * @return {void}
   */
  const onClickHandler = (): void => {
    const promptFilename = prompt("Salvar arquivo como", "nome_do_arquivo.md");
    if (promptFilename) {
      const textBlob = new Blob([refEditor.current!.value], {
        type: "text/plain",
      });
      const downloadLink = document.createElement("a");
      downloadLink.download = promptFilename;
      downloadLink.innerHTML = "Baixar arquivo";
      downloadLink.href = window.URL.createObjectURL(textBlob);
      downloadLink.click();
    }
  };

  const onClickCleanHandler = (): void => {
    if (confirm("Confirma limpeza?")) {
      setText("");
      setChtml("");
      localStorage.removeItem("texto_em_edicao");
    }
  };

  useEffect(() => {
    try {
      const text = localStorage.getItem("texto_em_edicao");
      if (text) setText(text);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (text) localStorage.setItem("texto_em_edicao", text);
    }, 5000);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div>
      <em>#</em>&nbsp; titulo, <em>##</em>&nbsp; subtitulo, <em>*</em>&nbsp;
      lista, <em>0.</em>&nbsp; lista numerada,<br></br> <em>[Texto](href)</em>
      &nbsp; <span className={"text-[#3060d8]"}>Texto</span>, `
      <pre className="inline bg-gray-500">codigo</pre>`,&nbsp;{" "}
      <em>*italico*</em>,&nbsp;<strong>**negrito**</strong>
      ,&nbsp;
      <em>
        <strong>***ambos***</strong>
      </em>
      <div className="flex flex-col lg:flex-row lgcol-auto w-[90%]  h-full m-3">
        <Button className="m-1" onClick={onClickHandler}>
          Salvar arquivo
        </Button>
        <Button className="m-1" onClick={onClickCleanHandler}>
          Limpar Editor
        </Button>
      </div>
      <div className="flex flex-col lg:flex-row lgcol-auto w-[90%]  h-full m-3">
        <div className="w-1/2 h-[600px]">
          <textarea
            className="w-full h-full  dark:text-black text-black rounded-lg caret-auto border-black p-4    shadow-lg border-hidden shadow-zinc-400 hover:shadow-blue-200"
            onChange={onChangeHandler}
            value={text}
            ref={refEditor}
          ></textarea>
        </div>
        <div
          className="editor w-1/2  h-[600px] dark:text-white text-black rounded-lg border-black p-4    shadow-lg border-hidden shadow-zinc-400 hover:shadow-blue-200"
          dangerouslySetInnerHTML={{ __html: chtml }}
        ></div>
      </div>
    </div>
  );
}

export default MDEditor;
