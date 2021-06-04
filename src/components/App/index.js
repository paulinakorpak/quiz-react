import React from 'react';
import Welcome from '../Welcome';
// import Quiz from '../Quiz';
// import Result from '../Result';
import { GlobalStyle, Wrapper } from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Welcome />
        {/* <Quiz /> */}
        {/* <Result /> */}
      </Wrapper>
    </>
  );
}

export default App;
