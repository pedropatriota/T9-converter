import * as S from "./styles";

interface ButtonProps {
  children: JSX.Element | string;
  disabled: boolean;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  onClick,
}) => {
  return (
    <S.Button type="button" disabled={disabled} onClick={onClick}>
      {children}
    </S.Button>
  );
};
