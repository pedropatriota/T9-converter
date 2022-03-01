import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    95.02deg,
    #82307a 0%,
    #d7235d 50.36%,
    #e78140 100%
  );
`;

export const Container = styled.div`
  width: 90%;
  position: relative;
  color: #fffbfb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: color 0.4s;

  @media (min-width: 768px) {
    width: 72%;
    max-width: 1280px;
  }
`;
