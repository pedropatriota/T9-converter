import { Header } from "../components";
import * as S from "./styles";

interface Props {
  children: React.ReactNode;
}

export const Template: React.FC<Props> = ({ children }) => {
  return (
    <S.Container>
      <Header text="Online T9 converter" />
      <S.Main>{children}</S.Main>
    </S.Container>
  );
};
