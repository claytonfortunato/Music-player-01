import styled from "styled-components";

export const Container = styled.div`
  width: 16.655rem;
  height: 31.125rem;
  background-color: #2a2141;
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.8rem;

  img {
    max-width: 11.85rem;
    max-height: 11.85rem;
  }
`;

export const Title = styled.div`
  h1 {
    color: #ddd;
    font-weight: bold;
    font-size: 1.4rem;
  }

  h2 {
    color: #ddd;
    font-size: 1.2rem;
    opacity: 80%;
  }
`;

export const Pause = styled.div``;

export const Progress = styled.div``;

export const Time = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
