import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Option from '../Option';
import { Title, Options } from './styles';

function Question({ question, index, addPoint }) {
  const [answer, setAnswer] = useState(null);

  const options = Object.entries(question.options);

  const checkAnswer = (value) => {
    setAnswer(value);

    if (value === question.correctOption) {
      addPoint();
    }
  };

  return (
    <>
      <Title>{question.title}</Title>
      <Options>
        {
          options.map((option) => {
            const [value, label] = option;
            const key = `${index}-${value}`;

            let className = '';

            if (answer !== null) {
              if (value === question.correctOption) {
                className = 'correct';
              } else if (value === answer) {
                className = 'wrong';
              }
            }

            return (
              <Option
                key={key}
                value={value}
                label={label}
                className={className}
                disabled={answer !== null}
                checkAnswer={checkAnswer}
              />
            );
          })
        }
      </Options>
    </>
  );
}

export default Question;

Question.propTypes = {
  question: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
  addPoint: PropTypes.func.isRequired,
};
