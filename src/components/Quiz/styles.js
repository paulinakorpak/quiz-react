import styled from 'styled-components';

const Section = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export default Section;
