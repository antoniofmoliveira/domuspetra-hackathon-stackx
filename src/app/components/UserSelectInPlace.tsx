"use client";
import React, { ChangeEventHandler, useRef, useState } from "react";

/**
 * Props
 */
interface UserSelectInPlaceProps {
  userId: string;
  fieldName: string;
  value: string;
  options: string[];
}

/**
 * componente que permite a edição de registros de usuário in place
 */
const UserSelectInPlace = ({
  userId,
  fieldName,
  value,
  options,
}: UserSelectInPlaceProps) => {
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
  };

  /**
   * grava a edição
   */
  const saveUser = async (value: string) => {
    const response = await fetch(`/dashboard/api/userupdate`, {
      method: "POST",
      next: { tags: ["User"], revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        fieldName: fieldName,
        value: value,
      }),
    }); //.then(() => revalidateTag("User"));
  };

  return (
    <div>
      <p ref={paragraphRef} onClick={onClickPHandler}>
        {componentValue}
      </p>

      <select
        ref={selectRef}
        value={componentValue}
        onChange={onChangeSelectHandler}
        hidden
      >
        {options.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default UserSelectInPlace;
