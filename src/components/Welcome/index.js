import React from 'react';
import { Section, Text, BackgroundImage } from './styles';
import { Button } from '../App/styles';

function Welcome() {
  return (
    <Section>
      <Text>Maderia Quiz</Text>
      <BackgroundImage src="./img/madeira.jpg" alt="madeira" />
      <Button type="button">Start</Button>
    </Section>
  );
}

export default Welcome;
