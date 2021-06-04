import styled from 'styled-components';

export const Section = styled.section`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Text = styled.h1`
  font-size: 35px;
  color: var(--mainColor);
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 2.5rem;
`;

export const BackgroundImage = styled.img`
  height: 50%;
  width: 100%;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  
  @media (min-width: 768px) {
    height: 80%;
    width: 100%;
  }
`;
