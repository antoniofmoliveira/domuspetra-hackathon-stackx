"use client";
import React, {
  ChangeEventHandler,
  KeyboardEventHandler,
  useRef,
  useState,
} from "react";

/**
 * Props
 */
interface ArticleEditInPlaceProps {
  articleId: string;
  fieldName: string;
  value: string;
  tag: string;
}

/**
 * componente que permite a edição de registros de usuário in place
 */
const ArticleEditInPlace = ({
  articleId,
  fieldName,
  value,
  tag,
}: ArticleEditInPlaceProps) => {
  const [componentValue, setComponentValue] = useState(value);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * trata o click no parágrafo
   */
  const onClickPHandler = () => {
    paragraphRef.current!.style.display = "none";
    inputRef.current!.style.display = "block";
  };

  /**
   * trata a tecla Enter no input
   * @param event
   */
  const onKeyDownInputHandler: KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.code === "Enter") {
      paragraphRef.current!.style.display = "block";
      inputRef.current!.style.display = "none";
      saveUser();
    }
  };

  /**
   * handler do input
   * @param event
   */
  const onChangeInputHandler: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const value = event.target.value;
    setComponentValue(value);
  };

  /**
   * quando sai do input
   */
  const onBlurInputHandler = () => {
    paragraphRef.current!.style.display = "block";
    inputRef.current!.style.display = "none";
  };

  /**
   * grava a edição
   */
  const saveUser = async () => {
    const response = await fetch(`/dashboard/api/articleupdate`, {
      method: "POST",
      next: { tags: ["Article"], revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        articleId: articleId,
        fieldName: fieldName,
        value: componentValue,
      }),
    }); //.then(() => revalidateTag("User"));
  };

  return (
    <div>
      <p
        ref={paragraphRef}
        onClick={onClickPHandler}
        title="2 cliques para editar, Enter para gravar"
      >
        <em>{tag}:&nbsp;</em>
        {componentValue}
      </p>
      <input
        className="display:none dark:text-black w-full"
        ref={inputRef}
        onKeyDown={onKeyDownInputHandler}
        onChange={onChangeInputHandler}
        onBlur={onBlurInputHandler}
        value={componentValue}
        hidden
      ></input>
    </div>
  );
};

export default ArticleEditInPlace;
