import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px 30px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  strong {
    color: #444;
    text-align: left;
  }
  p {
    font-size: 13px;
    color: #ccc;
  }
`;
