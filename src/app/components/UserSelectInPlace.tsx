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
  tag: string;
}

/**
 * Component that allows the user to select a value from a list and save
 * it to the server.
 *
 * @param {UserSelectInPlaceProps} props - The component props.
 * @param {string} props.userId - The id of the user to be edited.
 * @param {string} props.fieldName - The name of the field to be edited (e.g.
 *   "name", "email").
 * @param {string} props.value - The current value of the field.
 * @param {string[]} props.options - The list of options to be displayed in the
 *   select.
 * @param {string} props.tag - The tag to revalidate when the edit is saved.
 * @return {JSX.Element} The UserSelectInPlace component.
 */
const UserSelectInPlace = ({
  userId,
  fieldName,
  value,
  options,
  tag,
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
      <p
        ref={paragraphRef}
        onClick={onClickPHandler}
        title="2 cliques para editar"
      >
        <em>{tag}:&nbsp;</em>
        {componentValue}
      </p>

      <select
        className="display:none dark:text-black"
        ref={selectRef}
        value={componentValue}
        onChange={onChangeSelectHandler}
        onBlur={onBlurSelectHandler}
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
