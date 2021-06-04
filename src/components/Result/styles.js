import styled from 'styled-components';

export const Section = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Box = styled.div`
  width: 100%;
  height: 200px;
  background-color: rgba(199, 193, 193, 0.3);
`;

export const Text = styled.h3`
  text-align: center;
  font-size: 20px;
  color: var(--mainColor);
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const Score = styled.p`
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
  color: var(--secondColor);
  
  @media (min-width: 768px) {
  font-size: 25px;
  }
`;
