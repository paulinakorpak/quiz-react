import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Question from '../Question';
import Section from './styles';
import { Button } from '../App/styles';
import questions from '../../questions';

function Quiz({ showNextStage, addPoint }) {
  const [questionIndex, setQuestionIndex] = useState(0);

  const showNextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      showNextStage();
    }
  };

  const question = questions[questionIndex];

  return (
    <Section>
      <Question key={questionIndex} question={question} index={questionIndex} addPoint={addPoint} />
      <Button type="button" onClick={showNextQuestion}>Dalej</Button>
    </Section>
  );
}

export default Quiz;

Quiz.propTypes = {
  showNextStage: PropTypes.func.isRequired,
  addPoint: PropTypes.func.isRequired,
};
