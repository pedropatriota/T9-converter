import { MessageDetail } from "@styled-icons/boxicons-regular";

import * as S from "./styles";

interface MessageProps {
  title: string;
  text: string;
}

export const MessageBox: React.FC<MessageProps> = ({ title, text }) => {
  return (
    <S.Container data-testid="message-box">
      <MessageDetail width="60px" fill="#ccc" />
      <S.TextContainer>
        <strong>{title}</strong>
        <p>{text}</p>
      </S.TextContainer>
    </S.Container>
  );
};
