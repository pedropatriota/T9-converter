import * as S from "./styles";

interface HeaderProps {
  text: string;
}

export const Header: React.FC<HeaderProps> = ({ text }) => {
  return (
    <S.Header>
      <S.Container>
        <h3>{text}</h3>
      </S.Container>
    </S.Header>
  );
};
