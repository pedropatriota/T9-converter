import { useCallback, useEffect, useRef, useState } from "react";

import { api } from "../services";

export const MainPageHelper = () => {
  const [value, setValue] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(true);
  const [converted, setConverted] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (!value) {
      setConverted([]);
    }
  }, [value]);

  useEffect(() => {
    if (value) setDisabled(false);
    else setDisabled(true);
  }, [value]);

  const handleInputChange = useCallback((value: string) => {
    const valueReplaced = value?.replace(/[^0-9]/g, "");
    setValue(valueReplaced);
  }, []);

  const handleClearField = useCallback(() => {
    setValue("");
  }, []);

  const sendPost = (obj: object) => {
    api
      .post("/api/converter", obj)
      .then(res => setConverted(res.data.result))
      .catch(err => console.log(err.message));
  };

  return {
    value,
    disabled,
    handleInputChange,
    handleClearField,
    inputRef,
    sendPost,
    converted,
  };
};
