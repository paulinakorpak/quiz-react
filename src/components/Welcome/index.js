import React from 'react';
import PropTypes from 'prop-types';
import { Section, Text, BackgroundImage } from './styles';
import { Button } from '../App/styles';

function Welcome({ showNextStage }) {
  return (
    <Section>
      <Text>Maderia Quiz</Text>
      <BackgroundImage src="./img/madeira.jpg" alt="madeira" />
      <Button type="button" onClick={showNextStage}>Start</Button>
    </Section>
  );
}

export default Welcome;

Welcome.propTypes = {
  showNextStage: PropTypes.func.isRequired,
};
