"use client";
import React, { ChangeEventHandler, useRef, useState } from "react";

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
 * componente que permite a edição de registros de usuário in place
 */
const ArticleSelectInPlace = ({
  articleId,
  fieldName,
  value,
  options,
  tag,
}: ArticleSelectInPlaceProps) => {
  const [componentValue, setComponentValue] = useState(value);
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
    setComponentValue(value);
    saveUser(value);
    onBlurSelectHandler();
  };

  const onBlurSelectHandler = () => {
    paragraphRef.current!.style.display = "block";
    selectRef.current!.style.display = "none";
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
        className="hidden dark:text-black"
        ref={selectRef}
        value={componentValue}
        onChange={onChangeSelectHandler}
        onBlur={onBlurSelectHandler}
        hidden
      >
        {options.map((item) => {
          return (
            <option key={item.key} value={item.key}>
              {item.value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ArticleSelectInPlace;
