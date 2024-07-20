"use client";
import React, {
  ChangeEventHandler,
  KeyboardEventHandler,
  useRef,
  useState,
} from "react";
interface UserEditInPlaceProps {
  userId: string;
  fieldName: string;
  value: string;
}

const UserEditInPlace = ({
  userId,
  fieldName,
  value,
}: UserEditInPlaceProps) => {
  const [componentValue, setComponentValue] = useState(value);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickPHandler = () => {
    paragraphRef.current!.style.display = "none";
    inputRef.current!.style.display = "block";
  };

  const onKeyDownInputHandler: KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.code === "Enter") {
      paragraphRef.current!.style.display = "block";
      inputRef.current!.style.display = "none";
      saveUser();
    }
  };

  const onChangeInputHandler: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const value = event.target.value;
    setComponentValue(value);
  };

  const onBlurInputHandler = () => {
    paragraphRef.current!.style.display = "block";
    inputRef.current!.style.display = "none";
  };

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
    });
    // setUser(new UserObj());
    // router.push(`/dashboard/users`);
  };

  return (
    <div>
      <p ref={paragraphRef} onClick={onClickPHandler}>
        {componentValue}
      </p>
      <input
        className="display:none"
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
