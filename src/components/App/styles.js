import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    --mainColor: #858285;
    --secondColor: #272727;
    --infoColor: #C7C1C1;
    --successColor: green;
    --failureColor: red;
  }
  
  body {
    margin: 0;
    padding: 0;
    letter-spacing: 2px;
    font-size: 10px;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  
  *, *:before, *:after {
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  // width: 20%;
  align-self: center;
  font-size: 20px;
  text-transform: uppercase;
  padding: 10px;
  background-color: white;
  color: var(--infoColor);
  border: 1px solid var(--infoColor);
  border-radius: 2px;
  cursor: pointer;
  
  :hover {
    background-color: var(--infoColor);
    color: white;
  }
`;
