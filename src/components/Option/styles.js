import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 15px;
  color: var(--secondColor);
  margin-top: 2rem;
  margin-right: 1rem;
  
  &.correct {
    color: var(--successColor);
  }
  
  &.wrong {
    color: var(--failureColor);
  }
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
`;

export const Input = styled.input`
  margin-right: 1rem;
`;
