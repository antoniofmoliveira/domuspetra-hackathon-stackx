"use client";
import { ChangeEventHandler, useRef, useState } from "react";

export interface Pairs {
  key: string;
  value: string;
}
/**
 * Props
 */
interface ArticleSelectInPlaceProps {
  articleId: string;
  fieldName: string;
  value: string;
  options: Pairs[];
  tag: string;
}

/**
 * Componente que permite a edição de registros de artigo in place
 * @param articleId - Identificador do artigo
 * @param fieldName - Nome do campo
 * @param value - Valor atual do campo
 * @param options - Opções disponíveis para o campo
 * @param tag - Tag para revalidação de cache
 */
const ArticleSelectInPlace = ({
  articleId,
  fieldName,
  value,
  options,
  tag,
}: ArticleSelectInPlaceProps) => {
  let actualOption: Pairs | undefined = options.find(
    (option) => option.value === value
  );
  if (!actualOption) actualOption = { key: "false", value: "Não" };
  //   console.log(`actualOption ${actualOption.key}`);
  const [componentValue, setComponentValue] = useState(value);
  const [componentDisplay, setComponentDisplay] = useState(actualOption!.value);

  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  /**
   * trata o click no parágrafo
   */
  const onClickPHandler = () => {
    paragraphRef.current!.style.display = "none";
    selectRef.current!.style.display = "block";
  };

  /**
   * handler do input
   * @param event
   */
  const onChangeSelectHandler: ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    const value = event.target.value;
    console.log(`value: ${value}`);

    // const option = options.find((pair) => (pair.value = value));
    // console.log(`option ${{ option }}`);
    setComponentValue(value);
    saveUser(value);
    onBlurSelectHandler();
  };

  const onBlurSelectHandler = () => {
    paragraphRef.current!.style.display = "block";
    selectRef.current!.style.display = "none";
    // saveUser(value);
  };

  /**
   * grava a edição
   */
  const saveUser = async (value: string) => {
    const response = await fetch(`/dashboard/api/articleupdate`, {
      method: "POST",
      next: { tags: ["Article"], revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        articleId: articleId,
        fieldName: fieldName,
        value: value,
      }),
    }); //.then(() => revalidateTag("User"));
  };

  return (
    <div>
      <p
        ref={paragraphRef}
        onClick={onClickPHandler}
        title="2 cliques para editar"
      >
        <em>{tag}:&nbsp;</em>
        {componentValue}
      </p>

      <select
        className="hidden dark:text-black text-black"
        ref={selectRef}
        value={componentValue}
        onChange={onChangeSelectHandler}
        onBlur={onBlurSelectHandler}
        hidden
      >
        {options.map((item) => {
          return (
            <option
              key={item.key}
              value={item.key}
              className=" dark:text-black text-black"
            >
              {item.value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ArticleSelectInPlace;
