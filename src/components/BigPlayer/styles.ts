import styled from "styled-components";

export const Container = styled.div`
  width: 22.356rem;
  height: 16.667rem;
  background: #2a2141;
  border-radius: 0.6rem;
  padding: 1.8rem;
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.8rem;

  img {
    max-width: 5.25rem;
    max-height: 5.25rem;
  }
`;

export const Title = styled.div`
  h1 {
    color: #e1e1e6;
    font-weight: bold;
    font-size: 1.4rem;
  }

  h2 {
    color: #e1e1e6;
    font-size: 1.2rem;
    opacity: 80%;
  }
`;

export const Pause = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.8rem;
  margin-bottom: 1.8rem;
`;

export const Progress = styled.div``;

export const Time = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #c4c4cc;
    opacity: 70%;
  }
`;
