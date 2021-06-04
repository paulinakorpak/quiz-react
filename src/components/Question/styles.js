import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 20px;
  text-align: center;
  font-weight: 500;
  color: var(--mainColor);
  
  @media (min-width: 768px) {
  font-size: 30px;
  }
`;

export const Options = styled.ul`
  list-style: none;
  padding: 1rem;
  margin-top: 2rem;
  margin-bottom: 6rem;
`;
