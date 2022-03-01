import { Button, Input, MessageBox } from "../components";
import { Template } from "../Template";
import { MainPageHelper } from "./MainPage.helper";
import * as S from "./styles";

export const MainPage: React.FC = () => {
  const {
    value,
    disabled,
    handleInputChange,
    handleClearField,
    inputRef,
    sendPost,
    converted,
  } = MainPageHelper();

  return (
    <Template>
      <S.Container>
        <S.InputContainer>
          <Input
            ref={inputRef}
            value={value}
            handleInputChange={handleInputChange}
            handleClearField={handleClearField}
            placeholder="type a number..."
          />
          <Button
            disabled={disabled}
            onClick={() => sendPost({ number: value })}
          >
            Convert
          </Button>
        </S.InputContainer>
        {!value ? (
          <MessageBox
            title="Waiting for a number..."
            text="Type a number to convert its value in T9."
          />
        ) : converted.length ? (
          <S.ResultContainer data-testid="converted-value-box">
            {converted.map(item => (
              <span key={item}>{`${item}, `}</span>
            ))}
          </S.ResultContainer>
        ) : undefined}
      </S.Container>
    </Template>
  );
};
