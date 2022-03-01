import { CloseCircle } from "@styled-icons/ionicons-solid";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #444;
  padding: 5px 10px;
  outline: none;

  &:focus {
    border: 1px solid #444;
  }

  &::placeholder {
    color: #ddd;
  }
`;

export const ClearIcon = styled(CloseCircle)`
  width: 30px;
  height: auto;
  fill: #807d7d;
  position: absolute;
  left: calc(100% - 40px);
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  transition: fill 0.3s linear;

  &:hover {
    fill: #444;
  }
`;
