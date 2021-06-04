import React from 'react';
import Question from '../Question';
import Section from './styles';
import { Button } from '../App/styles';

function Quiz() {
  return (
    <Section>
      <Question />
      <Button type="button">Dalej</Button>
    </Section>
  );
}

export default Quiz;
