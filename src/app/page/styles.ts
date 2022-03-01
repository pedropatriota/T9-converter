import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 50px 0 30px 0;
  flex-direction: column;
  align-items: center;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  margin: 50px 0 30px 0;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ResultContainer = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  border-radius: 4px;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;
