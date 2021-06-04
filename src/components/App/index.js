import React, { useState } from 'react';
import Welcome from '../Welcome';
import Quiz from '../Quiz';
import Result from '../Result';
import { GlobalStyle, Wrapper } from './styles';

const stageMapping = [Welcome, Quiz, Result];

function App() {
  const [stageIndex, setStageIndex] = useState(0);

  const showNextStage = () => {
    setStageIndex(stageIndex + 1);
  };

  const Stage = stageMapping[stageIndex];

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Stage showNextStage={showNextStage} />
      </Wrapper>
    </>
  );
}

export default App;
