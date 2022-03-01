import { forwardRef } from "react";

import * as S from "./styles";

interface InputProps {
  value: string;
  placeholder: string;
  handleInputChange: (value: string) => void;
  handleClearField: () => void;
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ value, placeholder, handleInputChange, handleClearField }, ref) => {
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      handleInputChange(e.target.value);
    };

    return (
      <S.Container>
        <S.Input
          ref={ref}
          placeholder={placeholder}
          type="text"
          value={value}
          onChange={onInputChange}
        />
        {value && (
          <S.ClearIcon data-testid="clear-icon" onClick={handleClearField} />
        )}
      </S.Container>
    );
  }
);
