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
interface UserEditInPlaceProps {
  userId: string;
  fieldName: string;
  value: string;
  tag: string;
}

/**
 * Component that allows the user to edit a field in place.
 *
 * @param {UserEditInPlaceProps} props - The properties of the component.
 * @param {string} props.userId - The id of the user.
 * @param {string} props.fieldName - The name of the field to be edited.
 * @param {string} props.value - The current value of the field.
 * @param {string} props.tag - The tag to revalidate when the edit is saved.
 * @returns {JSX.Element} - The rendered component.
 */
const UserEditInPlace = ({
  userId,
  fieldName,
  value,
  tag,
}: UserEditInPlaceProps) => {
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
    const response = await fetch(`/dashboard/api/userupdate`, {
      method: "POST",
      next: { tags: ["User"], revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
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
        className="display:none dark:text-black"
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

export default UserEditInPlace;
