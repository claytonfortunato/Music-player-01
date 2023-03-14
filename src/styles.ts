import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const SmallPlay = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-direction: column;
`;
