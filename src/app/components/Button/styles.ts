import styled from "styled-components";

export const Button = styled.button`
  background-color: #d9435c;
  color: #fff;
  height: 40px;
  width: 100%;
  border: 0px;
  border-radius: 4px;
  transition: background-color 0.3s linear;

  &:hover {
    background-color: #aa406d;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;

    &:hover {
      background-color: #ccc;
    }
  }

  @media (min-width: 768px) {
    width: 200px;
  }
`;
